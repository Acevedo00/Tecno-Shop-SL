import brand from '../../img/brand.svg'
import { Link } from "react-router-dom"

const Brand = () => {
    return(
        <Link to="/">
            <img src={brand} alt="Tecno Shop SL" title="Tecno Shop SL"></img>
        </Link>
    )
}

export default Brand;  