import Navbar  from "./component/Navbar/navbar";
import Hero from './component/Hero/hero';
import Feature from "./component/Feature/feature";
import Product from "./component/Product/product";
import Category from "./component/Category/category";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Feature />
      <Product />
      <Category />
    </div>
  );
}

export default App;
