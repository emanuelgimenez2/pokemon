import React from "react";
import { useNavigate } from "react-router-dom";

const Card = (imagen, nombre, typo, id) => {
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
          <img src="https://media1.popsugar-assets.com/files/thumbor/JjfmXMG0pjokLrwhoJ9okTEaVz8/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2016/07/19/767/n/3019466/2a415584167c7b93_23fe5e_9ef17f60071f464796fa49a82e0b4f29-mv2/i/Pikachu.jpg" alt="flag imagg" className="image_card" />
        </div>
        <div className="cuerpo_card">
          <div className="contenedor_nombre_pokemon">
            <h4 className="nombre_de_pokemon">pikachu</h4>
          </div>
          <div className="contenedor_de_typo_pokemon">
            <h5 className="typo_de_poken">electrico</h5>
     
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Card;
