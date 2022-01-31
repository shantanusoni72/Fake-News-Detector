import React from 'react'

export default function Feedback() {
    return (
        <div className="feedback" id="feedback">
            <h3>Feedback Form</h3>
            <form action="submit_form" method="post">
            <input type="email" className="input_field" name="email" placeholder="Email"/><br />
            <input type="text" className="input_field" name="name" placeholder="Enter your name"/><br />
            <input type="text" className="input_field" name="message" placeholder="Enter your message"/><br />
            <input type="submit" className="submitBtn" value="Submit" />
            </form>
        </div>
    )
}
