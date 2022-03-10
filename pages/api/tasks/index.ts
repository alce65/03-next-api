import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../bin/db2';

import { TaskI } from '../../../interfaces/task-i';
import * as crud from '../../../bin/tasks.crud';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<TaskI> | { Error: string }>
) {
  await dbConnect();
  console.log(req.method);

  switch ((req.method as string).toUpperCase()) {
    case 'GET':
      crud
        .getAllTasks()
        .then((result) => {
          console.log(result);
          return res.status(200).json(result);
        })
        .catch((err: string) => {
          return res.status(500).json({ Error: err });
        });
      break;

    case 'POST':
      crud
        .insertTask(req.body)
        .then((result) => {
          console.log(result);
          return res.status(200).json(result);
        })
        .catch((err: string) => {
          return res.status(500).json({ Error: err });
        });
      break;
  }
}
