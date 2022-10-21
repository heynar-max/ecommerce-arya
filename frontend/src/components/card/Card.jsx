import { useEffect, useState } from "react"
import { CardItem } from "./CardItem"
import axios from 'axios';
import './Card.css'
import { useReducer } from "react";


const reducer = (state, action) =>{
  switch (action.type){
    case 'FETCH_REQUEST':
      return{...state, loading:true}
    case 'FETCH_SUCCESS':
      return {...state, products: action.payload, loading:false};
    case 'FETCH_FAIL':
      return{...state, loading: false, error: action.payload};
      default:
        return state;
    }
};

export const Card = () => {
  const [{loading, error, products}, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error:'',
  })

    // const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({type: 'FETCH_REQUEST'});
      try {
        
        const result = await axios.get('/api/products');
        dispatch({type:'FETCH_SUCCESS', payload: result.data})
      } catch (error) {
        dispatch({type:'FETCH_FAIL', payload: error.message});
      }
      // setProducts(result.data);
    };
    fetchData();
  }, []);
    
    return (
        <div className="card">
          
        {
          loading? (
          <div>Loading...</div>
          ):error? (
        <div>{error}</div>
          ):
        products.map ((product) => 
            (
                <div  key={product.id}>
                  
                <CardItem
                subname={product.subname}
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

