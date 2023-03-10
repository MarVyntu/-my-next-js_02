import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

// константа навігації
const navigation = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Posts", path: "/posts" },
  { id: 3, title: "Contacts", path: "/contacts" },
];

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image src="/blue01.png" width={60} height={60} alt="Mar-logo" />
      </div>
      <div className={styles.links}>
        {navigation.map(({ id, title, path }) => (
          <Link
            key={id}
            href={path}
            className={pathname === path ? styles.active : null}
          >
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

// звичайне підключення посилань
{
  /* <div className={styles.links}>
<Link href="/">Home</Link>
<Link href="/posts">Posts</Link>
<Link href="/contacts">Contacts</Link>
</div> */
}
