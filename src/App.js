import './styles.css';
import Navbar from './components/header/Navbar';
import ContainerCardItems from './components/components item/ContainerCardItems';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import DetailsItem from './components/components item/DetailsItem';

function App() {
  return (
     <BrowserRouter>
       <Navbar />
       <Routes>
          <Route path='/' element={ <ContainerCardItems />} />
          <Route path='/item/:idItem' element={ <DetailsItem />} />
          <Route path='/category/:idCategory' element={ <ContainerCardItems />} />
       </Routes>
     </BrowserRouter>
  );
}

export default App;
