import { IAgentRuntime, Memory, Provider, State } from "@elizaos/core";


export const skillSyncProvider: Provider = {
    get: async (
        runtime: IAgentRuntime,
        message: Memory,
        state?: State,
      ): Promise<boolean>=> { 
        try {
          return true;


        } catch (error) {
            return false;
        }
      }
}

