// Create a job

import { Action, IAgentRuntime, ITextGenerationService, Memory, ServiceType } from "@elizaos/core";
import { SkillSyncApi } from "../api/SkillSyncApi";


const ACTION_NAME = "SKILLSYNC_DO_SOMETHING";

export const doSomething: Action = {
    name: ACTION_NAME,
    description: "Do something",
    similes: ["do something", "do a thing", "do a new thing", "do a new thing request", "do a thing request"],
    examples: [
        [
            {
                user: "{{user1}}",
                content: { text: "Please do something" },
            },
            {
                user: "{{user2}}",
                content: { text: "I did something successfully", action: ACTION_NAME },
            },
        ],
    ],
    validate: async (runtime: IAgentRuntime, message: Memory) => {
        return true;
    },
    handler: async (runtime: IAgentRuntime, message: Memory) => {
        // Get the service from runtime
        const skillSyncApi = new SkillSyncApi();

        const result = await skillSyncApi.doSomething();
        if (!result) {
            return {
                user: runtime.agentId,
                content: {
                    text: `I did something unsuccessfully`,
                    action: ACTION_NAME
                }
            };
        }
        return {
            user: runtime.agentId,
            content: {
                text: `I did something successfully`,
                action: ACTION_NAME
            }
        };
    }
}