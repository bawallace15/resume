import React from 'react';
import Card from '../components/Card/Card';
import TextSection from '../components/TextSection/TextSection';
import './Home.css';
import 'tachyons';

import linkedin from '../img/LinkedIn_logo.png';
import github from '../img/github.svg';
import profpic from '../img/snowboard_pic_cropped.jpg';

const AboutText = `Hello and welcome to my website! I am a Mechanical Engineer who does 0 Mechanical Engineering because 
I love software development. Most of my development experience is in Automation, Data Science, Web Development, and 
Infrasturcture. I mostly work in Python and JavaScript, but I know TypeScript and Java as well. I graduated from Penn State 
in 2018 and have worked for Lockheed Martin since then. Currently, I am working on my Master's in Computer Science from 
Steven's Institute of Technology. In the very little free time I have I enjoy playing and watching soccer, running, working 
out, snowboarding and learning about new technologies. 

I use this site as a more extensive resume, as well as, a playground for testing out anything related to web development. 
If something is buggy, I may have broken it while playing around with something. The site is just a basic ReactJS app.
The code can be found on my GitHub. If you would like to get in contact with me, feel free to contact me on LinkedIn!`;

function home() {
    return (
        <div id='home'>
            <div className='container' style={{width: "100vw"}}>
                <img className='tc br-100 ma3' alt='profile-pic' src={profpic} width='150' height='150'/>
            </div>
            <TextSection title='About Me' text={AboutText} />
            <cardlist className='container'>
                <Card media='LinkedIn' username='Ben Wallace' pic={linkedin} link='https://www.linkedin.com/in/ben-wallace-77bb9b9a/'/>
                <Card media='GitHub' username='bawallace15' pic={github} link='https://github.com/bawallace15'/>
            </cardlist>
        </div>
    )
}

export default home;