import { Layout } from "../../components/core/layout/layout";
import Head from "next/head";
import { List } from "../../components/todo/list";
import { TaskI } from "../../interfaces/task-i";
import { getAllTasks } from "../../bin/tasks.crud";
import dbConnect from "../../bin/db2";

export default function Todo({ tasks }: { tasks: Array<TaskI> }) {
  console.log(tasks);
  return (
    <>
      <Head>
        <title>Todo - Next App</title>
      </Head>
      <Layout>
        <h2>Tareas</h2>
        <List tasks={tasks}></List>
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

/* export async function getStaticProps() {
  await dbConnect();
  const tasks = await getAllTasks();
  const modifyData = tasks.map((item) => {
    const result = {
      ...item._doc,
      id: item._id.toString(),
      // title: item.title,
      // responsible: item.responsible,
      // isCompleted: item.isCompleted,
    };
    delete result._id;
    delete result.__v;
    return result;
  });
  console.log({ modifyData });
  return {
    props: {
      tasks: modifyData,
    },
    revalidate: 1
  };
}
 */

export async function getServerSideProps() {
  await dbConnect();
  const tasks = await getAllTasks();
  const modifyData = tasks.map((item) => {
    const result = {
      ...item._doc,
      id: item._id.toString(),
      // title: item.title,
      // responsible: item.responsible,
      // isCompleted: item.isCompleted,
    };
    delete result._id;
    delete result.__v;
    return result;
  });
  console.log({ modifyData });
  // console.log({ context });
  return {
    props: {
      tasks: modifyData,
    },
  };
}
