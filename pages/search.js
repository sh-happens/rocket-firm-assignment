import React, { useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";

export default function Search() {
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
  const [picture, setPicture] = useState("");
  const [clientId, setClientId] = useState(
    "c2d1a26fc11e773729bada1c8619976fad8ad7595c8d26512db391f178805e78"
  );
  const [result, setResult] = useState([]);

  function handleChange(event) {
    setPicture(event.target.value);
  }

  function keyPressed(event) {
    if (event.key === "Enter") {
      handleSubmit();
    }
  }

  function handleSubmit(event) {
    const url =
      "https://api.unsplash.com/search/photos/?per_page=30&client_id=" +
      clientId +
      "&query=" +
      picture;

    axios.get(url).then(responce => {
      setResult(responce.data.results);
    });
  }
  return (
    <Layout>
      <div className='container'>
        <input
          onChange={handleChange}
          type='text'
          name='picture'
          placeholder='Поиск'
          onKeyPress={keyPressed}
        />
      </div>
      <div className='sugestions'>
        <a>{history}</a>
      </div>
      <div className='itemContainer'>
        {result.map(picture => (
          <img className='items' src={picture.urls.small} />
        ))}
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          background: black;
        }
        a {
          font-size: 16px;
          background: -webkit-linear-gradient(left, white, black);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size: 16px;
          max-width: 80%;
        }
        input {
          background-color: black;
          color: white;
          text-align: center;
          padding: 0;
          font-family: SF UI Display;
          font-size: 50px;
          outline: none;
          border-top-color: transparent;
          border-bottom-color: transparent;
          border-left-color: transparent;
          border-right-color: transparent;
          border-image: linear-gradient(
              to left,
              rgba(0, 0, 0, 1) 1%,
              rgba(255, 255, 255, 1) 50%,
              rgba(0, 0, 0, 1) 100%
            )
            0 0 100% 0/0 0 1px 0;
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
          display: flex;
          justify-content: center;
          font-family: SF UI Display;
          background: black;
        }

        ::placeholder {
          color: white;
        }
        .items {
          margin: 10px;
          border-radius: 5px;
          overflow-x: hidden;
          overflow-y: hidden;
          background-color: black;
        }
        .itemContainer {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
        @media only screen and (max-width: 600px) {
          a {
            text-align: center;
            padding: 0 15% 0 15%;
            color: white;
            background: black;
            -webkit-text-fill-color: white;
            font-size: 16px;
          }
        }
      `}</style>
    </Layout>
  );
}
