import {HashRouter as Router, Route} from "react-router-dom";
import Detail from "../routes/Detail.js";
import Home from "../routes/Home.js";

function App() {
  return (
    <Router>
      <Route eact path = "/" components = {Home} />
      <Route eact path = "/:id" components = {Detail} />
    </Router>
  );
}

export default App;
