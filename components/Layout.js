import Head from "next/head";
import Navbar from "./Navbar";

const Layout = props => (
  <div>
    <Head>
      <title>Rocket Firm</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Head>
    <Navbar />
    {props.children}
    <style jsx global>{`
      body {
        background: white;
        color: #fff;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
    `}</style>
  </div>
);

export default Layout;
