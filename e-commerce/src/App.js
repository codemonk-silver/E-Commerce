import Navbar  from "./component/Navbar/navbar";
import Hero from './component/Hero/hero';
import Feature from "./component/Feature/feature";
import Product from "./component/Product/product";
import Category from "./component/Category/category";
import Our from './component/Our/our';
import Testimonial from "./component/Testimonial/testimonial";
import Recent from "./component/Recent/recent";
import Footer from "./component/Footer/footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Feature />
      <Product />
      <Category />
      <Our />
      <Testimonial />
      <Recent />
      <Footer />
    </div>
  );
}

export default App;
