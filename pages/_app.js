/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/globals.sass";

const MyApp = ({ Component, pageProps }) => (
    <Layout className="layout">
        <Head>
            <link
                href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
                rel="stylesheet"
            />
        </Head>
        <Component {...pageProps} />
    </Layout>
);

export default MyApp;
