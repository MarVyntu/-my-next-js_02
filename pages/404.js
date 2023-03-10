import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../styles/404.module.scss";
import Heading from "../components/heading";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>error 404</title>
      </Head>
      <div>
        <Heading text="404" />
        <Heading tag="h2" text="Something is going wrong... " />
      </div>
    </div>
  );
};

export default Error;

// <h1>404</h1>
// <p>Something is going wrong... </p>

{
  /* <Heading text="404" />
<Heading tag="h2" text="Something is going wrong... " /> */
}
