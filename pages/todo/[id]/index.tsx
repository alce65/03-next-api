import { Layout } from "../../../components/core/layout/layout";
import Head from "next/head";
import { useRouter } from "next/router";
import dbConnect from "../../../bin/db2";
import { getAllTasks, getTask } from "../../../bin/tasks.crud";
import { TaskI } from "../../../interfaces/task-i";

export default function TaskDetail({ task }: { task: TaskI }) {
  const router = useRouter();
  // const id = router.query.id;
  return (
    <>
      <Head>
        <title>Deatail - Next App</title>
      </Head>
      <Layout>
        <h2>Detalles de la tarea {task.id}</h2>;
        <ul>
          <li>Titulo: {task.title}</li>
          <li>Responsable: {task.responsible}</li>
        </ul>
      </Layout>
    </>
  );
}

/**
 * - getStaticProps()
 * - getServerSideProps()
 * Automatically executed in the server before
 * the component function => its possible to include
 * the code that needs a secure environment
 * (it never will be executed in the client)
 *
 */

export async function getStaticProps(context: any) {
  console.log(context.params);
  await dbConnect();
  const initialTask = await getTask(context.params.id);
  const task = {
    ...initialTask._doc,
    id: initialTask._id.toString(),
  };
  delete task._id;
  delete task.__v;
  return {
    props: {
      task,
    },
  };
}

export async function getStaticPaths() {
  await dbConnect();
  const allTasks = await getAllTasks();
  const paths = allTasks.map((item) => {
    return { params: { id: item._id.toString() } };
  });
  return {
    paths,
    fallback: false,
  };
}
