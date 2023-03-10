import Head from "next/head";
import ContactInfo from "../../components/contactinfo";

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();

  // Повернення помилки, якщо проблеми на сервері і не отримуюю дані data
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { contact: data },
  };
};

const Contact = ({ contact }) => (
  <>
    <Head>
      <title>Contact</title>
    </Head>
    <ContactInfo contact={contact} />
  </>
);

export default Contact;
