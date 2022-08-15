import Head from "next/head";
import styles from "../styles/Skills.module.sass";

const Skills = () => {
    return (
        <>
            <Head>
                <title>Skills</title>
            </Head>
            <div className="page">
                <h2 className={styles.skills__titles}>Skills</h2>
                <hr className={styles.hr} />
                <ul>
                    <li className={styles.list__item}>JS</li>
                    <li className={styles.list__item}>HTML5</li>
                    <li className={styles.list__item}>CSS3 (SASS + SCSS)</li>
                    <li className={styles.list__item}>BootStrap</li>
                    <li className={styles.list__item}>GIT</li>
                    <li className={styles.list__item}>React JS</li>
                    <li className={styles.list__item}>REST API</li>
                    <li className={styles.list__item}>AJAX</li>
                    <li className={styles.list__item}>React Redux</li>
                    <li className={styles.list__item}>Next JS</li>
                </ul>
                <h2 className={styles.skills__titles}>Languages</h2>
                <hr className={styles.hr} />
                <ul>
                    <li className={styles.list__item}>
                        English - Intermediate
                    </li>
                    <li className={styles.list__item}>Russian - Proficiency</li>
                    <li className={styles.list__item}>Kyrgyz - Intermediate</li>
                </ul>
            </div>
        </>
    );
};

export default Skills;
