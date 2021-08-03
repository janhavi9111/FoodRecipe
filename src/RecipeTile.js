/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import "./RecipeTile.css";

export default function RecipeTile({recipes}) {
    return (
        recipes["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/)!= null && (
        <div className="recipeTile" onClick={()=> {
            window.open(recipes["recipe"]["url"])
        }}>
        <img className="recipeTile__img" src={recipes["recipe"]["image"]} />
        <p className="recipeTile__name"> {recipes["recipe"]["label"]}</p>
        </div>
        )
    )
}
