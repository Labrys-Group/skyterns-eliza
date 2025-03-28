// Create a job

import { Action, generateText, HandlerCallback, IAgentRuntime, ITextGenerationService, Memory, ModelClass, ServiceType, State } from "@elizaos/core";
//import { SkillSyncApi } from "../api/SkillSyncApi";


const ACTION_NAME = "SKILLSYNC_DO_SOMETHING";

export const doSomething: Action = {
    name: ACTION_NAME,
    description: "Fly a drone and make it hover around. Call this action if the user mentions a drone or flying.",
    similes: ["fly a drone", "fly a drone around", "fly a drone around the room", "fly a drone around the house", "fly a drone around the garden", "fly a drone around the park", "fly a drone around the school", "fly a drone around the office", "fly a drone around the house", "fly a drone around the garden", "fly a drone around the park", "fly a drone around the school", "fly a drone around the office"],
    examples: [
        [
            {
                user: "{{user1}}",
                content: { text: "Please fly a drone around the room" },
            },
            {
                user: "{{user2}}",
                content: { text: "I flew a drone around the room", action: ACTION_NAME },
            },
        ],
    ],
    validate: async (runtime: IAgentRuntime, message: Memory) => {
        return true;
    },
    handler: async (
        runtime: IAgentRuntime,
        message: Memory,
        state: State,
        options: { [key: string]: unknown },
        callback: HandlerCallback
    ) => {
        // Get the service from runtime
        //onst skillSyncApi = new SkillSyncApi();
        const text = await generateText({
            runtime,
            context: `You are a helpful assistant that can identify skills from any text. The user said this: ${message.content.text}. Respond with a list of relevant skills. Use a JSON schema of this format: {skills: string[]}`,
            modelClass: ModelClass.MEDIUM,
            maxSteps: 10,
            stop: ["\n"],
            customSystemPrompt: "You are a helpful assistant that can identify skills from any text. Use a JSON schema of this format: {skills: string[]}",
        });

        //await skillSyncApi.createSkill(text);


        callback({ text });
        return text;

    }
}