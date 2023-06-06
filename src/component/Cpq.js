import React from "react";
import cpq_Image2 from "../assets/img/cpq/cpqImage2.jpg";
import cpq_Image1 from "../assets/img/cpq/CPQImage1Updated.png";
import './Cpq.css';
const Cpq = () => {
  let imageStyle = {
    height: "600px",
    width: "1500px",
    backgroundImage:
    `url(${cpq_Image1})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    color: "white", 
 };

    return (
        <>
        <div class = "image" style = {imageStyle}></div>
        <section id="sales_Cloud">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <h2>Salesforce CPQ Implementation</h2>
                            <p>
                            Salesforce CPQ is a specially designed solution that allows businesses to automate configuration, price and quote to ease out the billing process of products directly on the Salesforce platform.</p>
                            <p>Techmatrix Consultancy is one of the leading CPQ Implementation consultants. The goal of our team is to support the setup of CPQ on your Salesforce platform, Once your project it with us we take care of everything from initial strategy to implementation and aftercare.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <img src={cpq_Image2} alt="Service_Cloud" className="leftToRight"/>
                        </div>
                    </div>
                </div>
            </section>
            </>
      );
}
export default Cpq;