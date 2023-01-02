import { BrowserRouter, Route, NavLink } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import CheezIts from "./CheezIts";
import Reeses from "./Reeses";
import DrPepper from "./DrPepper";
import Navbar from "./Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/cheezits">
          <CheezIts />
        </Route>
        <Route exact path="/reeses">
          <Reeses />
        </Route>
        <Route exact path="/drpepper">
          <DrPepper />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
