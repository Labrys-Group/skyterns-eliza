import { Action, IAgentRuntime, Memory } from "@elizaos/core";
import { SkynetApi } from "../api/skynetApi";


const ACTION_NAME = "CREATE_WORKER";

export const createWorker: Action = {
    name: ACTION_NAME,
    description: "Create a worker",
    similes: ["create a worker", "create a new worker", "create a new worker request", "create a worker request"],
    examples: [
        [
            {
                user: "{{user1}}",
                content: { text: "Please create a worker" },
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
        const skynetApi = new SkynetApi();

        // call the create a worker function
        const result = await skynetApi.createWorker();


        if (!result) {
            return {
                user: runtime.agentId,
                content: {
                    text: `I sorry, I was unable to create a worker successfully`,
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