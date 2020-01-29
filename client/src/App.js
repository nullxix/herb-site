import React from "react"
import {Switch, Route} from "react-router-dom"

import Header from "./components/Header"
import WelcomePage from "./components/WelcomePage"
import PopularHerbs from "./components/PopularHerbs"
import Herbs from "./components/Herbs"
import AddHerbs from "./components/AddHerbs"

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/welcome-page"><WelcomePage /></Route>
                <Route path="/popular-herbs"><PopularHerbs /></Route>
                <Route path="/admin"><AddHerbs /></Route>
                <Route exact path="/"><Herbs /></Route>
            </Switch>
        </div>
    )
}

export default App