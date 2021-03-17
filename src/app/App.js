import "./App.css";
import "../assets/css/bootstrap/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
