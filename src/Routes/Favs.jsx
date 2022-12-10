import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from '../Components/utils/global.context'


const Favs = () => {
  const {favs} = useContextGlobal()

  return (
    <>
      <h1>Dentistas Favoritos</h1>
      <div className="container-favs">
            {favs.map(item =>{
          return(
            <Link to={`/detail/${item.id}`} key={item.id} className="link-card">
              <div className="card-grid">
                <div className="card">
                  <h3>Id: {item.id}</h3>
                  <img src="./images/doctor.jpg" alt="img-doc" className="img-doc" />
                  <h4>Nombre: {item.name}</h4>
                  <h5>Usuario: {item.username}</h5>
                </div>
              </div>
            </Link>
          )})}
      </div>
    </>
  );
};

export default Favs;