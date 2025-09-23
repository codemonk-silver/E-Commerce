import Navbar  from "./component/Navbar/navbar";
import Hero from './component/Hero/hero';
import Feature from "./component/Feature/feature";
import Product from "./component/Product/product";
import Category from "./component/Category/category";
import Our from './component/Our/our';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Feature />
      <Product />
      <Category />
      <Our />
    </div>
  );
}

export default App;
