import React from 'react';
import './PricePage.css';
import l1 from './PricingImg/l1.png';
import icon1 from './PricingImg/icon1.png';
import icon2 from './PricingImg/icon2.png';
import icon3 from './PricingImg/icon3.png';
const PricingPage = () => {
  return (
    <div>
      <div className="headerf">
        <div className="logo">
          <span id="sp1">
            <img src={l1} alt="Logo" width="65" height="62" />
          </span>
        </div>
        <h3 className="h3f"> Pricing</h3>
      </div>
      <div className="seva">
        <div className="d">
          <img src={icon1} alt="" height="170px" width="250px" />
          <b>
            <p className="h2">FREE Essentials</p>
            <p id="p1">Green Thumb</p>
          </b>
          <p>
            Unlock the Basics of Farming <br />
            at No Cost!
          </p>
          <h1> FREE</h1>
          <button id="b2"> Sign Up</button>
        </div>
        <div className="d">
          <img src={icon2} alt="" height="170px" width="250px" />
          <b>
            <p className="h2">SEASONAL Insights</p>
            <p id="p1">Harvest_Pro</p>
          </b>
          <p>
            Get Ahead with <br />
            Seasonal Pricing Intelligence
          </p>
          <h1> ₹149</h1>
          <button id="b2">Upgrade</button>
        </div>
        <div className="d">
          <img src={icon3} alt="" height="170px" width="250px" />
          <p className="h2">YEAR ROUND Excellence</p>
          <b>
            <p id="p1"> Crop Master</p>
          </b>
          <p>
            Invest in Your Farming Future
            <br />
            Go Annual and Save
          </p>
          <h1> ₹899</h1>
          <button id="b2">Subscribe!</button>
        </div>
      </div>
    </div>
  );
};
export default PricingPage;
