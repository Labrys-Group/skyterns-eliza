import { Action, IAgentRuntime, Memory } from "@elizaos/core";
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

        // call the create a worker function
        const result = await skynetApi.createWorker();


        if (!result) {
            return {
                user: runtime.agentId,
                content: {
                    text: `I'm sorry, I was unable to create a worker successfully`,
                    action: ACTION_NAME
                }
            };
        }

        return {
            user: runtime.agentId,
            content: {
                text: `I created a worker successfully`,
                action: ACTION_NAME
            }
        };
    }
}