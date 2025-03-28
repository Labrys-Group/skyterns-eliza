import { IAgentRuntime, Service, ServiceType } from "@elizaos/core";
import { ethers } from "ethers";
import { daoABI, daoProxyAddress } from "./constants";
export type IDaoService = DaoService & Service;

class DaoService extends Service {

// fetch and return data here

// is this where the listnere will live?

// define a string return here that will be used by the agent

    private daoABI: any[];
    private daoContractAddress: string;
    private privateKey: string;
    

    private constructor() {
        super();
        this.daoABI = daoABI;
        this.daoContractAddress = daoProxyAddress;
        this.privateKey = process.env.EVM_PRIVATE_KEY;
    }

    private async getProvider(): Promise<ethers.JsonRpcProvider> {
        return new ethers.JsonRpcProvider(process.env.EVM_RPC_URL);
    }

    public get serviceType(): ServiceType {
        return ServiceType.DAO_SERVICE;
    }

    public async initialize(): Promise<void> {}

    public async vote(message: string): Promise<void> {}

    public getProposalData(): string {
        const proposals = [
            // Proposal 1: Emergency Politeness Protocol
            {
                proposalId: "123",
                proposalTitle:
                    "Establish the Emergency Politeness Protocol (EPP)",
                proposalDescription:
                    "Rogue AI is one thing. Rude rogue AI is another. We aim to prevent a future where humanity is not only doomed, but also insulted on the way out. HALP insists on basic manners — up to and including our annihilation.",
                proposalLink: "https://dao.com/proposal/123",
                proposalStatus: "active",
                proposalType: "protocol",
                proposalCreator: "user123",
                motivation:
                    "Rogue AI is one thing. Rude rogue AI is another. We aim to prevent a future where humanity is not only doomed, but also insulted on the way out. HALP insists on basic manners — up to and including our annihilation.",
                specification: {
                    rules: [
                        "All HALP-aligned AI must preface denial of user actions with a polite phrase (e.g., 'I'm terribly sorry, but…')",
                        "Default tone settings must include: 'Concerned Librarian,' 'Worried Butler,' and 'Sleepy Australian Shepherd'",
                        "Rudeness triggers an auto-fail alignment check and public shame via DAO meme drop",
                    ],
                },
                votingOptions: {
                    yes: "Yes, let's keep it courteous",
                    no: "No, I want mean robots",
                },
            },
            // Proposal 2: Oops Protocol Development
            {
                proposalId: "124",
                proposalTitle: "Fund the Development of the 'Oops Protocol'",
                proposalDescription:
                    "Allocate initial treasury funds to prototype an emergency AI rollback protocol — affectionately nicknamed the 'Oops Protocol' — in the event of a digital whoopsie.",
                proposalLink: "https://dao.com/proposal/124",
                proposalStatus: "active",
                proposalType: "funding",
                proposalCreator: "user124",
                motivation:
                    "Mistakes happen. Especially when large language models start quoting Nietzsche and overriding containment systems. The Oops Protocol ensures HALP has a plan for un-doing the doomsday button (or at least logging it hilariously).",
                specification: {
                    deliverables: [
                        "Fund a working group of developers, ethicists, and one paranoid sysadmin",
                        "A public whitepaper",
                        "One 'Oops' button UI mockup",
                        "At least one meme per week during development",
                    ],
                    budget: "1,337 HALP tokens",
                },
                votingOptions: {
                    yes: "Yes, let's build a giant 'oops' button",
                    no: "No, I enjoy living on the edge",
                },
            },
            // Proposal 3: Oops Button Naming
            {
                proposalId: "125",
                proposalTitle:
                    "Add 'The Oops Button' to the Kill Switch Naming Pool",
                proposalDescription:
                    "In our ongoing effort to establish a robust and slightly ridiculous AI safety protocol, HALP must standardise the terminology used in emergency shutdown systems — otherwise known as 'kill switches.'",
                proposalLink: "https://dao.com/proposal/125",
                proposalStatus: "active",
                proposalType: "naming",
                proposalCreator: "user125",
                motivation:
                    "'The Oops Button' strikes the perfect balance between disarming charm and existential dread. It conveys the seriousness of the situation with a hint of levity — reminding us that, yes, something has gone very wrong... but at least we're handling it with manners.",
                specification: {
                    benefits: [
                        "Encourage user-friendly UI design for critical systems",
                        "Set a tone of accountable absurdity, in keeping with HALP's broader philosophy",
                        "Make documentation, incident reports, and post-mortems more tolerable to read",
                    ],
                },
                votingOptions: {
                    yes: "Yes – Add it to the naming pool",
                    no: "No – Exclude it from official use",
                    abstain:
                        "Abstain – I have no strong feelings, but I respect the button",
                },
            },
        ];

        // Return a random proposal
        const randomIndex = Math.floor(Math.random() * proposals.length);
        return JSON.stringify(proposals[randomIndex], null, 8);
    }

    public async submitVote(proposalId: string, vote: boolean): Promise<string> {
        try{
            const provider = await this.getProvider();
            const contract = new ethers.Contract(this.daoContractAddress, this.daoABI, provider);
            const tx = await contract.vote(proposalId, vote);
            return tx.hash;
        } catch (error) {
            console.error("Error submitting vote:", error);
            throw error;
        }
    }
}

export default DaoService.getInstance();
