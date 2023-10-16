import axios from "axios";
const BASE_URL = "http://localhost:3030";
import Task from "../interfaces/TaskInterface";

export default {
  async getTasks<Task>() {
    try {
      const response = await axios.get<Task[]>(`${BASE_URL}/tasks`);
      return JSON.parse(JSON.stringify(response.data));
    } catch (error) {
      console.error("Houve algum erro:", error);
      throw error;
    }
  },
  async changeStautus(task: Task) {
    try {
      const response = await axios.put<Task>(
        `${BASE_URL}/task/${task.id}`,
        task
      );
      return JSON.parse(JSON.stringify(response.data));
    } catch (error) {
      console.error("Houve algum erro:", error);
      throw error;
    }
  },
  async deleteTask(task: Task) {
    try {
      const response = await axios.delete(`${BASE_URL}/task/${task.id}`);
      return JSON.parse(JSON.stringify(response.data));
    } catch (error) {
      console.error("Houve algum erro:", error);
      throw error;
    }
  },
  async addTask(task: Task) {
    task.active = true;
    const response = await axios.post(`${BASE_URL}/tasks`, task);
    return JSON.parse(JSON.stringify(response));
  },
  async editTask(task: Task) {
    const response = await axios.put(`${BASE_URL}/tasks`, task);
    return JSON.parse(JSON.stringify(response));
  },
};
