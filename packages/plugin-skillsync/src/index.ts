import type { Plugin } from "@elizaos/core";
import { createWorker } from "./actions/createWorker";
import { skillSyncProvider } from "./provider/SkillSyncProvider";

const skillSyncPlugin: Plugin = {
    name: "skill-sync",
    description: "A plugin for skill-sync",
    actions: [createWorker],
    evaluators: [],
    providers: [skillSyncProvider],
    services: []
};

export default skillSyncPlugin;

