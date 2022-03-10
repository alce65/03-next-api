// import { userCreator } from '../models/user.model.js';
import { PartialTaskI, TaskI } from '../interfaces/task-i';
import { Task } from './task.model';

export async function getAllTasks() {
  console.log(Task.modelName);
  const result = await Task.find({});
  console.log('Result', result);
  return result;
}

export async function getTask(id: string) {
  return await Task.findById(id);
}

export async function insertTask(body: TaskI) {
  const tempTask = await Task.create(body);
  const savedTask = await Task.findById(tempTask.id);
  return savedTask;
}

export async function updateTask(id: string, partialTask: PartialTaskI) {
  return await Task.findByIdAndUpdate(id, partialTask, {
    new: true,
  });
}

export async function deleteTask(id: string) {
  return await Task.findByIdAndDelete(id);
}
