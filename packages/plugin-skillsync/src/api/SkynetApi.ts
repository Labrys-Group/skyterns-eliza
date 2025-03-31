import axios, { type AxiosInstance } from "axios";

export class SkynetApi {
    private axios: AxiosInstance;

    constructor() {
        this.axios = axios.create({
            baseURL: process.env.NEXT_PUBLIC_URL || "http://localhost:8080/api",
            headers: {
                "Content-Type": "application/json"
            }
        });
    }


    async createWorker({name, skills}: {name: string, skills: string[]}): Promise<boolean> {

        console.log("this is the name", name);
        console.log("this is the skills", skills);
        const response = await this.axios.post<boolean>("/worker", {
            headers: {
                "Content-Type": "application/json"
            },
            body: ({name, skills})
        });
        return response.data;
    }

    async getWorker(): Promise<boolean> {
        const response = await this.axios.get(`/worker`);
        return response.data;
    }

    async createProject(): Promise<boolean> {
        const response = await this.axios.post("/project");
        return response.data;
    }

    async getProject(): Promise<boolean> {
        const response = await this.axios.get(`/project`);
        return response.data;
    }
}
