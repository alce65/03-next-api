import { Layout } from "../../components/core/layout/layout";
import Head from "next/head";
import { List } from "../../components/todo/list";

export default function Todo() {
  return (
    <>
      <Head>
        <title>Todo - Next App</title>
      </Head>
      <Layout>
        <h2>Tareas</h2>
        <List></List>
      </Layout>
    </>
  );
}
