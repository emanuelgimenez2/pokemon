import React from "react";
import { useNavigate } from "react-router-dom";
import  "./card.scss";

const Card = ({ image, name, types, id }) => {
  var history = useNavigate();
  return (
    <>
      <div className="contenedor_total_de_card">
        <div
          className="detail-card"
          onClick={() => {
            history(`/home/${id}`);
          }}
        >
          <div className="img_de_pkemon_en_card">
            <img src={image} alt="flag imagg" className="image_card" />
          </div>
          <div className="cuerpo_card">
            <div className="contenedor_nombre_pokemon">
              <h4 className="nombre_de_pokemon">{name ?? "no existe"}</h4>
            </div>
            <div className="contenedor_de_typo_pokemon">
                {types.map((e,i) => (
                  <span key={i}>{e.name}</span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
