import "./App.css";
import "../assets/css/bootstrap/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import { Provider } from "react-redux";
import store from "../redux";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
