import type { NextApiRequest, NextApiResponse } from 'next';
import { PartialTaskI, TaskI } from '../../../interfaces/task-i';
import dbConnect from '../../../bin/db2';
import * as crud from '../../../bin/tasks.crud';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<TaskI> | { Error?: string; Deleted?: string }>
) {
  await dbConnect();
  const id = req.query.id;
  console.log(req.method, id);
  switch ((req.method as string).toUpperCase()) {
    case 'GET':
      crud
        .getTask(id as string)
        .then((result) => {
          console.log(result);
          return res.status(200).json(result);
        })
        .catch((err: string) => {
          return res.status(500).json({ Error: err });
        });
      break;

    case 'PUT':
    case 'PATCH':
      crud
        .updateTask(id as string, req.body as PartialTaskI)
        .then((result) => {
          console.log(result);
          return res.status(200).json(result);
        })
        .catch((err: string) => {
          return res.status(500).json({ Error: err });
        });
      break;

    case 'DELETE':
      crud
        .deleteTask(id as string)
        .then((result) => {
          console.log(result);
          return res.status(204).json({ Deleted: result.id });
        })
        .catch((err: string) => {
          return res.status(500).json({ Error: err });
        });
      break;
  }
}
