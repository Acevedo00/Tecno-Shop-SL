import Brand from "./Brand";
import ItemListContainer from "./ItemListContainer";
import CartWidget from "./CartWidget";
const Navbar = () => {
    return (
        <header>
            <div className="containerBrand"> 
                <Brand />
            </div>

            <nav className="containerItemList">
               <ItemListContainer 
                   itemUno = "Smartphones"
                   itemDos = "Accesorios"
                   itemTres = "Fundas"
                   itemCuatro = "Laptops"
               />
            </nav>

            <div className="containerCart">
                <CartWidget />
            </div>
        </header>
    )
}

export default Navbar;