import React from 'react'

export default function result(props) {
    return (
        <div className="rank">
            <h3>[{props.res.id}] Sentiment Analysis: {props.res.score}</h3>
            <p>{props.res.news}</p>
        </div>
    )
}
