import React, { useState } from "react";
import Layout from "../components/Layout";

export default function History() {
  const [picture, setPicture] = useState("");

  const [result, setResult] = useState([]);

  return (
    <Layout>
      <div className='container'>Ваши запросы</div>
      <div className='sugestions'>search sugestions will be displayed here</div>
      <div className='itemContainer'>favorites are displayed here</div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          background: black;
        }
        input {
          background-color: transparent;
          color: white;
          text-align: center;
          font-family: SF UI Display;
          font-size: 50px;
          outline: none;
          border-top-color: transparent;
          border-bottom-color: #a4036f;
          border-left-color: transparent;
          border-right-color: transparent;
          border-image: linear-gradient(
              to left,
              rgba(0, 0, 0, 1) 1%,
              rgba(255, 255, 255, 1) 50%,
              rgba(0, 0, 0, 1) 100%
            )
            0 0 100% 0/0 0 1px 0 stretch;
        }
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0 30px black inset !important;
          -webkit-text-fill-color: white !important;
          border: black;
        }
        .sugestions {
          line-height: 40px;
          background: black;
          display: flex;
          justify-content: center;
          font-family: SF UI Display;
          font-size: 16px;
        }
        ::placeholder {
          color: white;
        }
        .items {
          margin: 10px;
          border-radius: 5px;
        }
        .itemContainer {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
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
