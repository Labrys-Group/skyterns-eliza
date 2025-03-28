import { IAgentRuntime, Memory, Provider, State } from "@elizaos/core";
import { SkynetApi } from "../api/skynetApi";

export const skillSyncProvider: Provider = {
    get: async (
        runtime: IAgentRuntime,
        message: Memory,
        state?: State,
      ): Promise<boolean>=> {    
        try {
            const skynetApi = new SkynetApi();
            const result = await skynetApi.createWorker();
            return result;

        } catch (error) {
            return false;
        }
      }
}

