import axios, { AxiosResponse } from 'axios';
import { TaskI, PartialTaskI } from '../interfaces/task-i';

const tasksUrl: string = process.env.NEXT_PUBLIC_URLTASK as string;

export const getAllTasks = (): Promise<AxiosResponse<Array<TaskI>>> => {
  return axios.get<Array<TaskI>>(tasksUrl);
};

export const getTask = (id: string): Promise<AxiosResponse<TaskI>> => {
  return axios.get<TaskI>(tasksUrl + id);
};

export const addTask = (task: TaskI): Promise<AxiosResponse<TaskI>> => {
  return axios.post<TaskI>(tasksUrl, task);
};

export const updateTask = (
  partialTask: PartialTaskI
): Promise<AxiosResponse> => {
  return axios.patch<TaskI>(tasksUrl + partialTask.id, partialTask);
};

export const deleteTask = (partialTask: PartialTaskI): Promise<{}> => {
  return axios.delete(tasksUrl + partialTask.id);
};
