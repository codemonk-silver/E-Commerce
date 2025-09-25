import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar/navbar";
import Hero from "./component/Hero/hero";
import Feature from "./component/Feature/feature";
import Product from "./component/Product/product";
import Category from "./component/Category/category";
import Our from "./component/Our/our";
import Testimonial from "./component/Testimonial/testimonial";
import Recent from "./component/Recent/recent";
import Footer from "./component/Footer/footer";
import Account from "./component/Account/account";

// Layout wrapper (to include Navbar + Footer)
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <Layout>
              <Hero />
              <Feature />
              <Product />
              <Category />
              <Our />
              <Testimonial />
              <Recent />
            </Layout>
          }
        />

        {/* Account Page */}
        <Route
          path="/account"
          element={
            <Layout>
              <Account />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
