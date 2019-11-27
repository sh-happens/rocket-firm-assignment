import React, { useState } from "react";
import Layout from "../components/Layout";

export default function History() {
  const [history, setHistory] = useState([
    " Wallpapers ",
    " Textures & Patterns ",
    " Nature ",
    " Current ",
    " Events ",
    " Architecture ",
    " Business & Work ",
    " Film ",
    " Animals ",
    " Travel ",
    " Fashion ",
    " Food & Drink ",
    " Spirituality ",
    " Experimental ",
    " People ",
    " Health ",
    " Arts & Culture"
  ]);

  return (
    <Layout>
      <div className='container'>
        <a>Ваши запросы</a>
        <div className='sugestions'>{history}</div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: black;
        }
        a {
          font-family: SF UI Display;
          font-size: 36px;
          line-height: 43px;
          color: white;
          margin-top: 20px;
        }
        .sugestions {
          line-height: 40px;
          background: black;
          display: flex;
          color: white;
          text-align: center;
          font-family: SF UI Display;
          font-size: 18px;
          padding: 0% 15% 0% 15%;
          margin-top: 20px;
        }
        @media only screen and (max-width: 600px) {
          input {
            font-size: 36px;
          }
        }
      `}</style>
    </Layout>
  );
}
