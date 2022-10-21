import axios from 'axios';
import { useEffect, useReducer } from 'react';
import {useParams} from 'react-router-dom'

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
        } catch (error) {
            dispatch({type:'FETCH_FAIL', payload: error.message});
        }
        };
        fetchData();
    }, [subname]);
    return (
        loading? <div>Loading...</div>
        : error? <div>{error}</div>
        :
        <div>{product.name}</div>
    )
}
