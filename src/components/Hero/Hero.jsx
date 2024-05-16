import "./Hero.css"
import AnchorLink from "react-anchor-link-smooth-scroll"
import profile_img from "../../assets/profile.png"
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Mohsin</span>, full stack developer based in INDIA.</h1>
      <p>I am a full stack developer from Asansol, INDIA with 3 years of experience in STS company, Asansol</p>
      <div className='hero-action'>
      <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
       <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
