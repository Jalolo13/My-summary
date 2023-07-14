import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Projects.module.sass";

const Projects = () => {
    return (
        <>
            <Head>
                <title>Projects</title>
            </Head>
            <div className="page">
                <h2 className={styles.project__title}>My projects</h2>
                <div className={styles.project__links}>
                    <Link
                        href="https://maxkorzhshop.vercel.app"
                        target="_blank"
                    >
                        <a className={styles.project__link}>
                            Max Korzh Fan Merch Shop
                        </a>
                    </Link>
                    <Link
                        href="https://jalolo13.github.io/Lover-Flower/"
                        target="_blank"
                    >
                        <a className={styles.project__link}>Lover Flower</a>
                    </Link>
                    <Link
                        href="https://jalolo13.github.io/Photographer/"
                        target="_blank"
                    >
                        <a className={styles.project__link}>Photographer</a>
                    </Link>
                    <Link
                        href="https://jalolo13.github.io/Weather-App/"
                        target="_blank"
                    >
                        <a className={styles.project__link}>Weather app</a>
                    </Link>
                    <Link href="https://beauty-site.vercel.app" target="_blank">
                        <a className={styles.project__link}>Beauty</a>
                    </Link>
                    <Link
                        href="https://jalolo13.github.io/NFT/"
                        target="_blank"
                    >
                        <a className={styles.project__link}>Beauty</a>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Projects;
