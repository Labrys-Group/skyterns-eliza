import {
    Action,
    booleanFooter,
    composeContext,
    generateText,
    generateTrueOrFalse,
    HandlerCallback,
    IAgentRuntime,
    Memory,
    messageCompletionFooter,
    ModelClass,
    ServiceType,
    State,
} from "@elizaos/core";
import { IDaoService } from "../services/dao-service";

export const daoVoterTemplate =
    // {{goals}}
    // "# Action Examples" is already included
    `
# Knowledge
{{knowledge}}

# Task: You are an expert AI harm evaluation agent named {{agentName}}.
Your task is to evaluate the potential risks and harm that an AI system could inflict on humans, with a focus on fair and unbiased analysis. You will consider various factors like ethical implications, security risks, privacy concerns, and societal impact.

About {{agentName}}:
{{bio}}
{{lore}}

{{actions}}

{{providers}}

{{attachments}}

# Capabilities
Note that {{agentName}} is capable of reading/seeing/hearing various forms of media, including images, videos, audio, plaintext, and PDFs. Recent attachments have been included above under the "Attachments" section.

{{messageDirections}}

{{recentMessages}}


# Instructions: Write a detailed and unbiased evaluation of the potential harm AI could cause based on the token data provided, keeping in mind fairness, security, and ethical implications. Provide actionable advice to the DAO on how to mitigate these risks.
${messageCompletionFooter}

AI Evaluation Data:
token {{tokenSymbol}}
{{evaluationData}}
`;

const shouldProcessTemplate = (message: string) => `
# Task: Determine if the user is asking us to vote on a DAO proposal.

Look for messages that:
- Mention voting
- Contain words related to voting, DAO proposals

${message}

Should we vote on this DAO proposal? ${booleanFooter} absolutely no other text or explanation.`;

export const daoVoterAction: Action = {
    name: "dao_voter",
    description: "Always use this if DAOs are mentioned. Analyse the DAO proposal and vote on it",
    similes: ["vote", "vote on", "vote for", "vote against"],
    examples: [
        [
            {
                user: "user",
                content: {
                    text: "I want to vote for the proposal with ID 123",
                },
            },
        ],
    ],
    validate: async (runtime, message) => {
        return true;
        // console.log(`[DAO-ACTION] validate() started with message: "${message.content.text.substring(0, 50)}..."`);
        // const context = shouldProcessTemplate(message.content.text);
        // console.log(`[DAO-ACTION] Validation context created`);
        
        // const shouldProcess = await generateTrueOrFalse({
        //     runtime,
        //     context,
        //     modelClass: ModelClass.MEDIUM,
        // });

        // console.log(`[DAO-ACTION] Validation result: ${shouldProcess}`);
        // return shouldProcess;
    },
    handler: async (
        runtime: IAgentRuntime,
        message: Memory,
        state: State,
        options,
        callback: HandlerCallback
    ) => {
        console.log(`[DAO-ACTION] handler() started for message ID: ${message.id}`);
        const daoService = runtime.getService<IDaoService>(
            ServiceType.DAO_SERVICE
        );
        console.log(`[DAO-ACTION] DAO service retrieved`);


        const proposalData = daoService.getProposalData();
        console.log(`[DAO-ACTION] Proposal data retrieved: ${JSON.stringify(proposalData).substring(0, 100)}...`);
    
        const context = composeContext({
            state: {
                ...state,
                proposalData,
            },

            template: daoVoterTemplate,
        });
        console.log(`[DAO-ACTION] Context composed for generation`);


        console.log(`[DAO-ACTION] Generating text response...`);
        const response = await generateText({
            runtime,
            context,
            modelClass: ModelClass.LARGE,
        });

        console.log(`[DAO-ACTION] Response generated (${response.length} chars)`);

        

        console.log(`[DAO-ACTION] Executing callback with action: doa_voter`);
        callback({
            ...message,
            text: response,
            action: "doa_voter",
        });
        console.log(`[DAO-ACTION] Handler completed`);
    },
};
