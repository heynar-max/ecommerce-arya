

export const CardItem = ({image,price,category,title, description }) => {
    return (
    <div className="card__container">
        <figure className="card__figure">
            <img className='card__img' src={image} alt=''/>
        </figure>
        <div className="card__content">
            <h4 className="card__title">{category}</h4>
            <h4 className="card__title">{title}</h4>
            <h5 className="card__description">{description}</h5>
            <p className="card__price">{price}</p>
        </div>
    </div>
    )
}

