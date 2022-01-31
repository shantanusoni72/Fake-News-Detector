import React, { useState } from 'react'
import axios from 'axios'
import Result from './result'

export default function Screen() {
    const [search_data, setData] = useState({})
    const [showRes, setRes] = useState(false)
    function getData() {
        const search = document.getElementById("search").value
        const link = "/search/" + search
        setRes(true)
        if (search != "") {
            axios({
                method: "GET",
                url: link,
            })
                .then((response) => {
                    const res = response.data
                    setData(({
                        id: res.id,
                        news: res.news_headline,
                        score: res.score
                    }))
                }).catch((error) => {
                    if (error.response) {
                        console.log(error.response)
                        console.log(error.response.status)
                        console.log(error.response.headers)
                    }
                })
        }
    }

    return (<>
        <div className="screen_main">
            <input className="input_field" type="text" id="search" name="search" placeholder="Enter alleged news headline" />
            <input className="submitBtn" onClick={() => getData()} type="submit" value="Submit" />
        </div>
        { showRes ? <Result res={search_data} /> : null}
    </>)
}
