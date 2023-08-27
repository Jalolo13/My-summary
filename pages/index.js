/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Head from "next/head";
import photo from "../IMG_8831.JPG";
import styles from "../styles/Skills.module.sass";

const About = () => {
    return (
        <>
            <Head>
                <title>About me</title>
            </Head>
            <div className="page">
                <div className={styles.about__inner}>
                    <div>
                        <h2>Zhalil Ibragimov</h2>
                        <h3 className={styles.about__h3}>
                            Junior Front-end Developer
                        </h3>
                        <p className={styles.about__text}>
                            Front-end developer with one year of experience. I
                            am working and learning TypeScript and Next JS at
                            the moment . I'm communicative and I have knowledge
                            on JS Native and React JS. I have graduated
                            IT-Academy. I am on 11th grade in Grammar School
                            №29.
                            <p>
                                Now I am studying German hard and I am planning
                                to move Germany in a year.
                            </p>
                        </p>
                    </div>
                    <Image
                        src={photo}
                        height={400}
                        width={300}
                        style={{ float: "right" }}
                        alt="my-photo"
                    />
                </div>
                <hr className={styles.hr} />
                <ul>
                    <li className={styles.list__item}>
                        <a href="https://t.me/jalololo" target="_blank">
                            Telegram
                        </a>
                    </li>
                    <li className={styles.list__item}>
                        <a
                            href="https://www.linkedin.com/in/%D0%B6%D0%B0%D0%BB%D0%B8%D0%BB-%D0%B8%D0%B1%D1%80%D0%B0%D0%B3%D0%B8%D0%BC%D0%BE%D0%B2-53a550248/"
                            target="_blank"
                        >
                            LinkedIn
                        </a>
                    </li>
                    <li className={styles.list__item}>
                        <a href="https://github.com/Jalolo13" target="_blank">
                            GitHub
                        </a>
                    </li>
                </ul>
                <h2 className={styles.skills__titles}>Email</h2>
                <a
                    href="mailto:jalololo13@gmail.com"
                    className={styles.about__strings}
                >
                    jalololo13@gmail.com
                </a>
                <h2 className={styles.skills__titles}>Address</h2>
                <p className={styles.about__strings}>Baytik-Baatyra 67-11</p>
                <h2 className={styles.skills__titles}>Nationality</h2>
                <p className={styles.about__strings}>Kyrgyz</p>
                <h2 className={styles.skills__titles}>Date of birth</h2>
                <p className={styles.about__strings}>2006-05-25</p>
                <h2 className={styles.skills__titles}>Phone number</h2>
                <a href="tel:+996705705314" className={styles.about__strings}>
                    +996 (705) 705-314
                </a>
            </div>
        </>
    );
};

export default About;
