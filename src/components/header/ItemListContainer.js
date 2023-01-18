import { Link } from "react-router-dom"
 
const ItemListContainer = (props) => {
    return (
        <ul>
            <li>
                <Link to= "category/Smartphones">
                    {props.itemUno}
                </Link>
            </li>
            
            <li>
                <Link to= "category/Accesorios">
                    {props.itemDos}
                </Link>
            </li>
            
            <li>
                <Link to= "category/Tablets">
                    {props.itemTres}
                </Link>
            </li>
            
            <li>
                <Link to= "category/Laptops">
                    {props.itemCuatro}
                </Link>
            </li>
        </ul>
    )
}

export default ItemListContainer; 

