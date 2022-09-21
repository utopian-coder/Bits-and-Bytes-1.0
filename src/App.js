import { Fragment } from "react";
import Header from "./components/Layout/Header";
import Welcome from "./components/Welcome/Welcome";

function App() {
  return (
    <Fragment>
      <Header />
      <Welcome />
    </Fragment>
  );
}

export default App;
