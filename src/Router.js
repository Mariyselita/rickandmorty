import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NavBar from './components/Navbar';
import Episodios from './components/Episodios/Episodios';
import Personajes from './components/Personajes/Personajes';
import Error404 from "./components/Error404";

export default () => {
    return (
        <HashRouter basename="/">
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Episodios" component={Episodios} />
                <Route exact path="/Personajes" component={Personajes} />
                <Route path="*" component={Error404} status={404} />
            </Switch>
        </HashRouter>
    );
};
