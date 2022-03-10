import mongoose from 'mongoose';
import { TaskI } from '../interfaces/task-i';
import { Task } from './task.model';
// import { userCreator } from './user.model';

export async function mongoConnect() {
  const user = process.env.DBUSER;
  const password = process.env.DBPASSWD;
  const dbName =
    process.env.NODE_ENV === 'test'
      ? process.env.TESTDBNAME
      : process.env.DBNAME;
  console.log('Connecting to', dbName);
  const uri = `mongodb+srv://${user}:${password}@cluster0.dj9ya.mongodb.net/${dbName}?retryWrites=true&w=majority`;
  return await mongoose.connect(uri);
}

export async function mongoDisconnect() {
  return mongoose.disconnect();
}

/* export async function installUsers(data, modelName = 'User') {
    const User = userCreator(modelName);
    const deleted = await User.deleteMany({});
    const result = await User.insertMany(data);
    return { result, deleted };
} */

export async function installTasks(data: Array<TaskI>) {
  const deleted = await Task.deleteMany({});
  const result = await Task.insertMany(data);
  return { result, deleted };
}
