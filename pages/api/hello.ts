// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
// import { setup } from '../../data/tasks.install';

type Data = Array<{
  name: string;
}>;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // setup();
  res.status(200).json([{ name: 'John Doe' }, { name: 'Pepe' }]);
}
