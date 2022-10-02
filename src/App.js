import { Fragment } from "react";
import Feature from "./components/Features/Feature";
import Header from "./components/Layout/Header";
import Pricing from "./components/Pricing/Pricing";
import Welcome from "./components/Welcome/Welcome";

function App() {
  return (
    <Fragment>
      <Header />
      <Welcome />
      <Feature />
      <Pricing />
    </Fragment>
  );
}

export default App;
