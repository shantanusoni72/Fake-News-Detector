import React from 'react'

export default function Footer() {
    return (
        <div className="footer-main">
            <div className="row-1">
                <a href="/" alt="home">Home</a><br />
                <a href="/" alt="search">Search</a><br />
                <a href="#about" alt="about">About</a><br />
                <a href="#feedback" alt="feedback">Feedback</a><br />
            </div>
            <div className="row-2">
                <p>Made by</p>
                <a>Shantanu Soni</a><br />
                <a>Rounak Kalbhawar</a><br />
                <a>Ayush Mukati</a>
            </div>
        </div>
    )
}
