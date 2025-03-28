import type { Plugin } from "@elizaos/core";
import { skillSyncProvider } from "./provider/SkillSyncProvider";
import { doSomething } from "./actions/doSomething";

const skillSyncPlugin: Plugin = {
    name: "skill-sync",
    description: "A plugin for skill-sync",
    actions: [doSomething],
    evaluators: [],
    providers: [skillSyncProvider],
    services: []
};

export default skillSyncPlugin;

