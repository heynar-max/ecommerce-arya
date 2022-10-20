import { useEffect, useState } from "react"
import { CardItem } from "./CardItem"
import axios from 'axios';
import './Card.css'



export const Card = () => {

    const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/products');
      setProducts(result.data);
    };
    fetchData();
  }, []);
    
    return (
        <div className="card">
        {
        products.map ((product) => 
            (
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
        )
        }
        </div>
    )
}

