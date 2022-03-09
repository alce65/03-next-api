import type { NextPage } from "next";
import Head from "next/head";

import { Layout } from "../components/core/layout/layout";
import { Card } from "../components/pages/card/card";
import { Grid } from "../components/pages/grid/grid";

const Home: NextPage = () => {
  const cards = [
    {
      link: "https://nextjs.org/docs",
      title: "Documentation",
      content: "Find in-depth information about Next.js features and API.",
    },
    {
      link: "https://nextjs.org/learn",
      title: "Learn",
      content: "Learn about Next.js in an interactive course with quizzes!",
    },
    {
      link: "https://github.com/vercel/next.js/tree/master/examples",
      title: "Examples",
      content: "Discover and deploy boilerplate example Next.js projects.",
    },
    {
      link: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
      title: "Deploy",
      content:
        "Instantly deploy your Next.js site to a public URL with Vercel.",
    },
  ];
  return (
    <Layout>
      <Head>
        <title>Home - Next App</title>
      </Head>
      <Grid>
        {cards.map((item) => (
          <Card key={item.title} link={item.link} title={item.title}>
            {item.content}
          </Card>
        ))}
      </Grid>
    </Layout>
  );
};

export default Home;
