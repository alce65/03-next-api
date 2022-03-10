import { installTasks, mongoConnect, mongoDisconnect } from '../bin/db';
import { data } from './task.data';

export function setup() {
  mongoConnect()
    .then(() => installTasks(data.tasks))
    .then((taskResult) => console.log(taskResult.result))
    .then(() => mongoDisconnect());
}
