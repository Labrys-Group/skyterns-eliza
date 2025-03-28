// Create a job

import { Action, HandlerCallback, IAgentRuntime, ITextGenerationService, Memory, ServiceType, State } from "@elizaos/core";
import { SkillSyncApi } from "../api/SkillSyncApi";


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

        const result = "I flew a drone around the room";
        callback({ text: result });
        result;

    }
}