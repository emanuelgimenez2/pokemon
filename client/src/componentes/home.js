import React from "react";
import { useSelector } from "react-redux";

import Cards from "./cards";
import Filter from "./filter";
import Nav from "./navbar";

export default function Home() {
  const Data = useSelector((state) => state.pokemons);

  return (
    <div className="container-home">
      <div className="body-home">
        
       
       <div className="navigation-home">
        <Nav />
      </div>
       <div className="body-home">
        <Filter />
      </div> 
      <div className="body-home">
        <Cards />
      </div> 
       {/* <div>
        <Footer />
      </div>   */}
    </div>
      </div>
 
  );
}




 
