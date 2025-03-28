
import { Plugin } from "@elizaos/core";
import { daoVoterAction } from "./actions/dao-action";
export const daoPlugin: Plugin = {
    name: "dao",
    description: "DAO plugin",
    actions: [daoVoterAction],
};