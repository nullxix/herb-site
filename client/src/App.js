import React from "react"
import {Switch, Route} from "react-router-dom"

import Header from "./components/Header"
import WelcomePage from "./components/WelcomePage"
import PopularHerbs from "./components/PopularHerbs"
import Herbs from "./components/Herbs"

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/welcome-page"><WelcomePage /></Route>
                <Route path="/popular-herbs"><PopularHerbs /></Route>
                <Route exact path="/"><Herbs /></Route>
            </Switch>
        </div>
    )
}

export default App