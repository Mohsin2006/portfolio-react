import React from 'react'
import "./About.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import profile_img from "../../assets/pro.png"

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am a experience Full Stack Developer over 3 years in the field, throughout my carrier , i have had previlage of ...</p>
                <p>My passion for fullstack is not only development but also in the enthusiasm and dedication i bring to each project</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML,CSS,Bootstrap & Tailwind</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>React,Node & Express.JS</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>MongoDB,SQLite</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>Figma Design</p><hr style={{width:"60%"}} /></div>


            </div>
        </div>
      </div>
      <div className="about-acheivements">
        <div className="about-acheivement">
            <h1>3+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-acheivement">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-acheivement">
            <h1>5+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
