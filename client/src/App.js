import React from 'react'
import {hot} from "react-hot-loader"; //allows hot reloading, which is useful for testing

import Header from "./components/Header.js"

function App() {

    return (
        <div>
            <Header />
            <p>Welcome to Mothers Medicinal Herbal API Library - Where Dreams Come True.</p>
        </div>
    )
}

export default hot(module)(App)