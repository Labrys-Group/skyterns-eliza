import axios, { type AxiosInstance } from "axios";

export class SkillSyncApi {
    private axios: AxiosInstance;

    constructor() {
        this.axios = axios.create({
            baseURL: "https://api.skill-sync.com",
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

    async doSomething(): Promise<boolean> {
        // Create a new job
        const response = await this.axios.post<boolean>("/do-something");
        return response.data;
    }

}
