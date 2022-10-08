import { CardItem } from "./CardItem"
import gafas from '../../assets/descarga.png'


export const Card = () => {
    return (
    <CardItem
        image={gafas}
        category='gafas'
        title='gafas ciegos'
        description='es buena para esos ciegos que no ven nada, con esto quedan viendo lo mejor posible'
        price= '100'
    />
    )
}

