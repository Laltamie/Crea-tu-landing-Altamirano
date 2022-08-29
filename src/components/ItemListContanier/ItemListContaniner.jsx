import React from "react";
import "./ItemListContainer.css"


const ItemListContainber = ({greeting}) => {
    return(
        <div className="greeting">
            <h2>{greeting}</h2>
        </div>
    );
};

export default ItemListContainber;