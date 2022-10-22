import { useEffect} from "react"
import { CardItem } from "./CardItem"
import axios from 'axios';
import './Card.css'
import { useReducer } from "react";
import { LoadingBox } from "../loading_error/LoadingBox";
import { MessageBox } from "../loading_error/MessageBox";


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
            <LoadingBox/>
            ) : error? (<MessageBox variant='danger'>{error}</MessageBox>
            ) : 
        products.map ((product) => 
            (
                <div  key={product.id}>
                  
                <CardItem
                subname={product.subname}
                image ={product.image}
                name={product.name}
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

