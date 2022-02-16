import React, { useState } from 'react'
import axios from 'axios'
import Result from './result'

export default function Screen() {
    const [search_data, setData] = useState({})
    const [showRes, setRes] = useState(false)
    function getData() {
        const search = document.getElementById("search").value
        const link = "/search/" + search
        if (search !== "") {
            setRes(true)
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
            <h2>Fake News Detector</h2>
            <div className="inner_screen_main">
                <input className="input_field" type="text" id="search" name="search" placeholder="Enter alleged news headline" />
                <a className="submitBtn" href="#google.com" onClick={() => getData()} type="submit">Submit</a>
            </div>
        </div>
        {showRes ? <Result res={search_data} /> : null}
    </>)
}
