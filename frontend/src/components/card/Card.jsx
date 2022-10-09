import { useEffect, useState } from "react"
import { data } from "../../Data";
import { CardItem } from "./CardItem"



export const Card = () => {

    
    
    
    return (
        <div className="card">
        {
        data.products.map (product => {
            return(
                <div  key={product.id}>
                <CardItem
                title ={product.name}
                image ={product.image}
                category={product.category}
                description={product.description}
                price={product.price}
                />
                </div>
            )
        })
        }
        </div>
    )
}

