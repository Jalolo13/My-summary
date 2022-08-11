import styles from "../styles/Header.module.sass";
import Link from "next/link";

const Header = () => {
    return (
        <header className={styles.header}>
            <Link href="/">
                <a className={styles.list__link}>About me</a>
            </Link>

            <Link href="/skills">
                <a className={styles.list__link}>Skills</a>
            </Link>

            <Link href="/projects">
                <a className={styles.list__link}>My projects</a>
            </Link>
        </header>
    );
};

export default Header;
