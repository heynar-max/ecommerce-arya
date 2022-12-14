import { Link } from "react-router-dom"


export const CardItem = ({image,price,category,name, description,subname }) => {
    return (
    <div className="card__container">
        <figure className="card__figure">
            <img className='card__img' src={image} alt=''/>
        </figure>
        <div className="card__content">
            <h4 className="card__title">{category}</h4>
            <h4 className="card__title">{name}</h4>
            <Link to={`/product/${subname}`} className="card__subname">{subname}</Link>
            <h5 className="card__description">{description}</h5>
            <p className="card__price">{price}</p>
            <button className="card__boton">agregar carro</button>

        </div>
    </div>
    )
}

