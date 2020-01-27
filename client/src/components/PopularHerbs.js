import React, {useState, useEffect} from "react"
import axios from "axios"

import HerbDetails from "./HerbDetails"

function PopularHerbs() {
    const [popularHerbs, setPopularHerbs] = useState([])

    useEffect(() => getPopularHerbs(), [])

    function getPopularHerbs() {
        axios.get("/mothersMed/search/popularUse?popularUse=true")
            .then(res => setPopularHerbs(res.data))
            .catch(err => console.log(err))
    }

    return (
        <div>
            {popularHerbs.map(herb => <HerbDetails key={herb._id} {...herb} />)}
        </div>
    )
}

export default PopularHerbs