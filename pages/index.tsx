//
import Head from "next/head";
import Heading from "../components/Heading";
import Socials from "../components/socials";
import styles from "../styles/Home.module.scss";

interface Social {
  name: string;
  url: string;
}

interface HomeProps {
  socials: Social[];
}

export const getStaticProps = async () => {
  try {
    const response = await fetch(`${process.env.APi_HOST}/socials/`)
    const data = await response.json();
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { socials: data },
    }
  } catch {
    return {
      props: { socials: null },
    }
  }
};

const Home = ({ socials }: HomeProps) => (
  <div className={styles.wrapper}>
    <Head>
      <title>Home</title>
    </Head>
    <Heading tag="h3" text="Front-End-Developer" />
    <Socials socials={socials} />
  </div>
);

export default Home;


// ===============================
// ('http://localhost:3000/api/socials/')