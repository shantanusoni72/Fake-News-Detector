import React, { useState } from 'react'
import axios from 'axios'

export default function Feedback() {
    const [send, set] = useState({})
    const sendData = () => {
        const email = document.getElementById('email').value
        const name = document.getElementById('name').value
        const message = document.getElementById('message').value
        const link = '/feedback/' + email + '/' + name + '/' + message
        if (email != '' && name != '' && message != '') {
            axios((
                {
                    method: 'GET',
                    url: link
                }
            )).then((response) => {
                const res = response.data
                set(({
                    email: res.email,
                    name: res.name,
                    message: res.message
                }))
            }
            ).catch((error) => {
                console.log(error)
                document.getElementById('result').innerHTML = 'Something went wrong.'
            }
            )
            document.getElementById('result').innerHTML = 'Feedback submitted successfully.'
        }
    }
    return (
        <div className="feedback" id="feedback">
            <h3>Feedback Form</h3>
            <form method="post">
                <input type="email" className="input_field_2" id="email" placeholder="Email" /><br />
                <input type="text" className="input_field_2" id="name" placeholder="Enter your name" /><br />
                <textarea className="input_text_area" id="message" row="5" col="50" placeholder="Enter your message"></textarea><br />
                <a onClick={sendData} className="feedBtn">Submit</a><br />
                <label id="result"></label>
            </form><br />
        </div>
    )
}
