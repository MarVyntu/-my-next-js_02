import Head from "next/head";
import { useEffect, useState } from "react";
import Heading from "../../components/heading";
import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  // Повернення помилки, якщо проблеми на сервері і не отримуюю дані data
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { contacts: data },
  };
};

const Contacts = ({ contacts }) => {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text="Contacts list:" />
      <ul>
        {contacts &&
          contacts.map(({ id, name, email }) => (
            <li key={id}>
              <Link href={`/contacts/${id}`}>{name}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Contacts;

// у React прийом і передача даних така, у Next вище це заміняє export const getStaticProps

// const [contacts, setContacts] = useState(null);
// useEffect(() => {
//   const fetchData = async () => {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     const data = await response.json();
//     setContacts(data);
//   };
//   fetchData();
// }, []);

// <h1>Contacts list:</h1>
// <p>Maryan Vyntu</p>
