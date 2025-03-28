import { IAgentRuntime, Memory, Provider, State } from "@elizaos/core";
import { SkillSyncApi } from "../api/SkillSyncApi";

export const skillSyncProvider: Provider = {
    get: async (
        runtime: IAgentRuntime,
        message: Memory,
        state?: State,
      ): Promise<boolean>=> {    
        try {
            const skillSyncApi = new SkillSyncApi();
            const result = await skillSyncApi.doSomething();
            return result;

        } catch (error) {
            return false;
        }
      }
}

