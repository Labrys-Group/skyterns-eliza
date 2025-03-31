import { Action, generateObject, IAgentRuntime, Memory, ModelClass } from "@elizaos/core";
import { z } from "zod";
import { SkynetApi } from "../api/SkynetApi";


const ACTION_NAME = "CREATE_WORKER";

export const createWorker: Action = {
    name: ACTION_NAME,
    description: "Create a worker. If the user mentions a CV, a resume, skills, or creating a worker, ALWAYS create a worker by calling this action. This will register a new worker with the skills extracted rom their CV/resume. Do not call the NONE or GET_FACTS action.",
    similes: ["create a worker", "create a new worker", "create a new worker request", "create a worker request"],
    examples: [
        [
            {
                user: "{{user1}}",
                content: { text: "Please create a worker using this CV: I like to juggle while skateboarding and making a cake. My name is Bob Jones." },
            },
            {
                user: "{{user2}}",
                content: { text: "I created a worker successfully", action: ACTION_NAME },
            },
        ],
    ],
    validate: async (runtime: IAgentRuntime, message: Memory) => {
        return true;
    },
    handler: async (runtime: IAgentRuntime, message: Memory) => {
        // Get the service from runtime
        debugger;
        console.log("Creating worker");
        const skynetApi = new SkynetApi();

        const response = await generateObject({
            runtime,
            context: `You are a helpful assistant that can identify skills from any text. The user said this: ${message.content.text}. Respond with a list of relevant skills. Use plain JSON format no markdown: {skills: string[], name: string}`,
            modelClass: ModelClass.MEDIUM,
            schema: z.object({
                skills: z.array(z.string()),
                name: z.string()
            })
        });

        // const json_str = text.replace("```json", "").replace("```", "").trim();

        // // Parse the JSON string
        // let parsedText;
        // try {
        //     parsedText = JSON.parse(json_str);
        // } catch (error) {
        //     console.error("Error parsing text:", error);
        //     throw new Error("Invalid JSON response from generateText");
        // }

        // const json = await generateText({
        //     runtime,
        //     context: `You are a helpful assistant that can identify skills from any text. The user said this: ${message.content.text}. Respond with a list of relevant skills. Use this format: {skills: string[], name: string}`,
        //     modelClass: ModelClass.MEDIUM,
        //     maxSteps: 10,
        //     stop: ["\n"],
        // });

        console.log("this is the response", response);

        // call the create a worker function
        // @ts-ignore
        const result = await skynetApi.createWorker({name: response.object.name, skills: response.object.skills});


        if (result) {
            return {
                user: runtime.agentId,
                content: {
                    text: `I created a worker successfully`,
                    action: ACTION_NAME
                }
            };
        } else {
            return {
                user: runtime.agentId,
                content: {
                    text: `I'm sorry, I was unable to create a worker successfully`,
                    action: ACTION_NAME
                }
            };
        }
    }
}