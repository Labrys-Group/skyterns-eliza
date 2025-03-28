import axios, { type AxiosInstance } from "axios";

export class SkynetApi {
    private axios: AxiosInstance;

    constructor() {
        this.axios = axios.create({
            baseURL: process.env.NEXT_PUBLIC_URL || "http://localhost:3000/api",
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

    async createWorker(): Promise<boolean> {
        
        // Create a new worker
        const response = await this.axios.post<boolean>("/worker");
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
