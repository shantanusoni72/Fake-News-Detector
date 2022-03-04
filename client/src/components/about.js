import React, {useState} from 'react'
import About_Logo from '../img/about.png'

export default function About() {
    const [show1,set1] = useState(false)
    const [show2,set2] = useState(false)
    const [show3,set3] = useState(false)
    const [show4,set4] = useState(false)
    const [show5,set5] = useState(false)
    const [show6,set6] = useState(false)
    return (
        <div className="about_main" id="about">
            <div>
                <img className="about_logo" src={About_Logo} alt="About Logo" />
            </div>
            <div className="article">
            <h3>How To Fake News</h3>
                <div class="card-container">
                    <div class="card" onMouseOver={()=>set1(true)}>{ show1 ? null :<h3>Develop a Critical Mindset</h3>}<br />
                        { show1 ? <>One of the main reasons fake news is such a big issue is that it is often believable, so it's easy to get caught out. Much fake news is also written to create "shock value," that is, a strong instinctive reaction such as fear or anger.
                        This means it's essential that you keep your emotional response to such stories in check. Instead, approach what you see and hear rationally and critically.</> : null}
                    </div>
                    <div class="card" onMouseOver={()=>set2(true)}>{ show2 ? null :<h3>Check the Source</h3>}<br />
                        {show2 ? <>Check the source whether the the publisher is reliable or not. Be aware that people who spread fake news sometimes create web pages, newspaper mockups images that look official, but aren't.</> : null}
                    </div>
                    <div class="card" onMouseOver={()=>set3(true)}>{ show3 ? null :<h3>See Who Else Is Reporting the Story</h3>}<br />
                        {show3 ? <>Has anyone else picked up on the story? What do other sources say about it? This can be as unwise as following every rumor or conspiracy theory.</> :null}
                    </div>
                </div>
                <div class="card-container">
                    <div class="card" onMouseOver={()=>set4(true)}>{show4 ?null :<h3>Examine the Evidence</h3>}<br />
                        {show4 ?<>A credible news story will include plenty of facts – quotes from experts, survey data and official statistics.</> : null}
                    </div>
                    <div class="card" onMouseOver={()=>set5(true)}>{show5 ? null :<h3>Don't Take Images at Face Value</h3>}<br />
                        {show5 ?<>Modern editing software has made it easy for people to create fake images that look real. In fact, research shows that only half of us can tell when images are fake.</> : null}
                    </div>
                    <div class="card" onMouseOver={()=>set6(true)}>{show6 ?null: <h3>Check That it "Sounds Right"</h3>}<br />
                        {show6 ?<>Finally, use your common sense! Bear in mind that fake news is designed to "feed" your biases, hopes or fears.</>:null}
                    </div>
                </div>
            </div>
        </div>
    )
}
