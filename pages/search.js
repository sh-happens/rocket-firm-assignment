import React, { useState } from "react";
import axios from "axios";

export default function search() {
  const [picture, setPicture] = useState("");
  const [clientId, setClientId] = useState(
    "c2d1a26fc11e773729bada1c8619976fad8ad7595c8d26512db391f178805e78"
  );
  const [result, setResult] = useState([]);

  function handleChange(event) {
    setPicture(event.target.value);
  }

  function handleSubmit(event) {
    const url =
      "https://api.unsplash.com/search/photos?page&query=" +
      picture +
      "&client_id=" +
      clientId;

    axios.get(url).then(responce => {
      setResult(responce.data.results);
    });
  }

  return (
    <div>
      <input
        onChange={handleChange}
        type='text'
        name='picture'
        placeholder='Поиск'
      />
      <button onClick={handleSubmit} type='submit'>
        Search
      </button>

      {result.map(picture => (
        <img src={picture.urls.small} />
      ))}
    </div>
  );
}
