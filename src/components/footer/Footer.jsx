import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Professional services</h2>
            <span> IT, Electronics and networking</span>
            <span> Web, mobile nd Software Development</span>
            <span> Design and Creative</span>
            <span> Home Repair Services</span>
            <span> General Supplies</span>
            <span> Cars and Automotive</span>
            <span> Building and construction</span>
            <span> General Merchandise</span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
         
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on work and earn</span>
            <span>Buying on work and earn</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>

            <span>Invite a Friend</span>
            <span>Become a Seller</span>
          </div>
          <div className="item">
            <h2>More From Work and Earn</h2>
            <span>work and earn Business</span>
            <span>work and earn Pro</span>
            <span>work and earn Logo Maker</span>
            <span>work and earn Guides</span>
       
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>Work and Earn</h2>
            <span>© Esaya consulting group limited. 2023</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/images/twitter.png" alt="" />
              <img src="/images/facebook.png" alt="" />
              <img src="/images/linkedin.png" alt="" />
              <img src="/images/pinterest.png" alt="" />
              <img src="/images/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="/images/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="/images/coin.png" alt="" />
              <span>pricing</span>
            </div>
            <img src="/images/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
