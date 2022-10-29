import { Fragment } from "react";
import Features from "./components/features/Features";
import Welcome from "./components/welcome/Welcome";
import Footer from "./components/footer/Footer";
import Products from "./components/products/Products";
import Testimonials from "./components/testimonials/Testimonials";
import Header from "./components/header/Header";

function App() {
  return (
    <Fragment>
      <Header />
      <Welcome />
      <Features />
      <Testimonials />
      <Products />
      <Footer />
    </Fragment>
  );
}

export default App;
