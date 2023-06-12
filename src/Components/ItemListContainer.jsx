/** import React from 'react'

const ItemListContainer = ({greeting}) => {
    return (
        <div style={{fontSize: "2rem", color: "#ffce56", padding:"250px", backgroundColor:"#FF7F50"}}>{greeting}</div>
    )
}

export default ItemListContainer **/ 

import React from "react";
import ProductCard from "../Components/ProductCard";
const ItemListContainer = ({ productsData }) => {
  return (
    <div>
      {productsData.map((product) => {
        return <ProductCard key={product.id} productData={product} />;
      })}
    </div>
  );
};

export default ItemListContainer;
