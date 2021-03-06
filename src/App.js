import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState } from "react";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Admin from "./components/Admin/Admin";
import Orders from "./components/Orders/Orders";
import AddProduct from "./components/AddProduct/AddProduct";
import ManageProduct from "./components/ManageProduct/ManageProduct";
import CheckOut from "./components/CheckOut/CheckOut";
import NotFound from "./components/NotFound/NotFound";

export const UserContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState({});
    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <PrivateRoute path="/admin">
                        <Admin />
                    </PrivateRoute>
                    <PrivateRoute path="/orders">
                        <Orders />
                    </PrivateRoute>
                    <PrivateRoute path="/addProducts">
                        <AddProduct />
                    </PrivateRoute>
                    <PrivateRoute path="/manageProduct">
                        <ManageProduct />
                    </PrivateRoute>
                    <PrivateRoute path="/checkout/:_id">
                        <CheckOut />
                    </PrivateRoute>
                    <Route path="*">
                        <NotFound></NotFound>
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
