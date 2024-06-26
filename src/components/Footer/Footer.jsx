
import "./Footer.css"
import user_icon from "../../assets/user_icon.svg"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            {/* <img src={footer_logo} alt="" /> */}
            <p className='logos' style={{fontSize:"45px",fontWeight:"700",fontFamily:"monospace"}}>Mohsin</p>
            <p>I am a fullstack developer from, INDIA with 3 years of experience in STS company</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter youy email'/>
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">c 2023 Mohsin Kamal. All rights are reserved</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
