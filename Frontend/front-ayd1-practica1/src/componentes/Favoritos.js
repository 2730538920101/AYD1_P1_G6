import { React, useState, useEffect } from "react";
import Mosaico from './Mosaico'
import '../App.css'

function Favoritos() {
  const [data, setData] = useState([]);
  const url = "http://localhost:5000/showFavorites";

  async function verFavoritos() {
    await fetch(`${url}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.respuesta);
      });
  }

  useEffect(() => {
    verFavoritos();
  }, []);

  return (
    <div className="General">
      <Mosaico favoritos={data} />
    </div>
  )
}

export default Favoritos