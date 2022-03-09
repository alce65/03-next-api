import { Layout } from "../../../components/core/layout/layout";
import Head from "next/head";
import { useRouter } from "next/router";

export default function TaskDetail() {
  const router = useRouter();
  const id = router.query.id;
  return (
    <>
      <Head>
        <title>Deatail - Next App</title>
      </Head>
      <Layout>
        <h2>Detalles de la tarea {id}</h2>;
      </Layout>
    </>
  );
}
