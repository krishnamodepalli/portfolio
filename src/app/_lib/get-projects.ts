import axios from "axios";

import { Project } from "@/app/_types";

// const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const getProjects = async (): Promise<Project[]> => {
  try {
    // await delay(1000);
    const response = await axios.get("https://66c40ba0b026f3cc6ceddb4a.mockapi.io/api/projects");
    return response.data as Project[];
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    throw error;
  }
};

export default getProjects;
