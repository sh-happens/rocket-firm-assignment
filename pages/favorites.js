import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import axios from "axios";

export default function Favorites() {
  const [picture, setPicture] = useState("favorites");
  const [result, setResult] = useState([]);
  const [clientId, setClientId] = useState(
    "c2d1a26fc11e773729bada1c8619976fad8ad7595c8d26512db391f178805e78"
  );

  useEffect(() => {
    const url =
      "https://api.unsplash.com/search/photos/?per_page=30&client_id=" +
      clientId +
      "&query=" +
      picture;

    axios.get(url).then(responce => {
      setResult(responce.data.results);
    });
  }, []);

  return (
    <Layout>
      <div className='container'>
        <a>Избранное</a>
      </div>
      <div className='iconsContainer'>
        <div className='columnIcon'>
          <div id='rectangle'></div>
          <div id='rectangle'></div>
        </div>
        <div>
          <div id='square'></div>
          <div id='square'></div>
        </div>
        <div>
          <div id='square'></div>
          <div id='square'></div>
        </div>
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
          color: black;
          font-family: SF UI Display;
          font-size: 72px;
          font-weight: 600;
          line-height: 86px;
          margin: 40px 0px;
        }
        .items {
          margin: 10px;
          border-radius: 5px;
        }
        .itemContainer {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 40px;
        }
        .iconsContainer {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .wrapIcon {
          display: flex;
        }
        #rectangle {
          width: 23px;
          height: 10px;
          background: #bdbdbd;
          margin: 3px 20px;
        }
        #square {
          width: 10px;
          height: 10px;
          background: black;
          margin: 2px;
        }
        @media only screen and (max-width: 600px) {
          .items {
            border-radius: 0px 5px;
            width: 90%;
            height: auto;
          }
          .itemContainer {
            display: flex;
            align-itmes: center;
            margin-top: 20px;
          }
          .container {
            display: none;
          }
          .iconsContainer {
            margin-top: 20px;
          }
          #rectangle {
            background: black;
          }
          #square {
            background: #bdbdbd;
          }
        }
      `}</style>
    </Layout>
  );
}
