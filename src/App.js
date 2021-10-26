import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Error from "./pages/Error";
import Navbar from "./components/UI/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/error">
          <Error />
        </Route>
        <Redirect to="/error" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
