import axios from 'axios';
import { useContext, useEffect, useReducer } from 'react';
import { Helmet } from 'react-helmet-async';
import {useParams} from 'react-router-dom'
import { LoadingBox } from '../components/loading_error/LoadingBox';
import { MessageBox } from '../components/loading_error/MessageBox';
import { Store } from '../Store';
import { getError } from '../utils';


const reducer = (state, action) =>{
    switch (action.type){
    case 'FETCH_REQUEST':
        return{...state, loading:true}
    case 'FETCH_SUCCESS':
        return {...state, product: action.payload, loading:false};
    case 'FETCH_FAIL':
        return{...state, loading: false, error: action.payload};
        default:
        return state;
    }
};


export const ProductoScreen = () => {
    const params = useParams();
    const {subname} = params;
    const [{loading, error, product}, dispatch] = useReducer(reducer, {
        product: [],
        loading: true,
        error:'',
    })
    
    useEffect(() => {
        const fetchData = async () => {
        dispatch({type: 'FETCH_REQUEST'});
        try {
            
            const result = await axios.get(`/api/products/subname/${subname}`);
            dispatch({type:'FETCH_SUCCESS', payload: result.data})
        } catch (err) {
            dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
        }
        };
        fetchData();
    }, [subname]);
    const {state, dispatch: cxtDispatch} = useContext(Store);
    const {cart} = state;
    const addToCartHandler = async() =>{
        const existItem = cart.cartItems.find((x) => x._id === product._id);
        const quantity = existItem ? existItem.quantity + 1 : 1;
        const {data} = await axios.get(`/api/products/${product._id}`);
        if (data.countInStock < quantity) {
            window.alert('sorry. producto sin stock');
            return;
        }
        cxtDispatch({
            type: 'CART_ADD_ITEM',
            payload: {...product, quantity},
        });
    };
    return loading? (
        <LoadingBox/>
        ) : error? (<MessageBox variant='danger'>{error}</MessageBox>
        ) : (
        <>
            <div className="product__screen_container" >
        <Helmet>
            <title>{product.name}</title>
        </Helmet>
                <figure className='product__screen_figure'>
                    <img src={product.image} alt={product.name}className='product__screen_figure__img'/>
                </figure>
                
                    <ul className="product__screen_content">
                        <li className="product__screen_content_title ">{product.name}</li>
                        <li className="product__screen_content_price ">Precio ${product.price}</li>
                        <img src={product.image} alt={product.name}className='product__screen_content_img list-group-item'/>
                        <li className="product__screen_content_description ">Descripcion: <br/>{product.description}</li>
                    </ul>
                
                    <ul className="product__screen_status list-group">
                    <li className="product__screen_status_price list-group-item">Precio ${product.price}</li>
                        <li className="product__screen_status_status list-group-item">{product.countInStock>0?
                        <span className="badge bg-success">Stock</span>
                        : 
                        <span className="badge bg-danger">Un available</span>
                    }</li>
                    {product.countInStock > 0 && (
                        <li className="product__screen_status_boton list-group-item"><button onClick={addToCartHandler} className="card__boton">agregar carro</button></li>
                    )}
                    </ul>
                    
                
            </div>  
        </>
        
    )
}

