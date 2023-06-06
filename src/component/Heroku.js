import React from "react";
import herokuImage1 from "../assets/img/heroku/heroku.jpg";
import herokuImage2 from "../assets/img/heroku/Heroku_Image2.jpg";
import './Heroku.css';

const Heroku = () => {
  let imageStyle = {
    height: "600px",
    width: "1500px",
    backgroundImage:
    `url(${herokuImage1})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    color: "white", 
 };
    return (
      <>
      <div class = "image" style = {imageStyle}></div>
      <section id="Heroku_Cloud">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <h2>What is Heroku Cloud?</h2>
                            <p>
                            Heroku is one of the very popularly used container-based cloud Platforms. It won’t be wrong if Heroku Cloud is referred to as a boon for developers. It allows them to manage, scale and deploy modern applications easily. This elegant platform is very easy and flexible to use and also provides a beautiful means to the developers to get their apps to the market. Techmatrix has been identified by clients as one of the top Salesforce 
                            consulting company having excellent experience in offering Heroku implementation services.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <img src={herokuImage2} alt="Heroku_Cloud" className="leftToRight"/>
                        </div>
                    </div>
                </div>
            </section>
      </>
       
      );
}
export default Heroku;