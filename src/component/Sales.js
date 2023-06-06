import React from "react";
import salesCloud from '../assets/img/salescloud/sales_cloud.jpg';
import salesBanner from '../assets/img/salescloud/salesCloudMainUp.png';
import '../assets/css/Sales.css';

const SalesCloud = () => {

  let imageStyle = {
    height: "600px",
    width: "1500px",
    backgroundImage:
    `url(${salesBanner})`,
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
                  <h2>What is Salesforce Sales Cloud?</h2>
                  <p>
                  It is a highly advanced, modern-age CRM software that allows you to manage different operations like customer data,marketing, lead generation, 
                  and analytics all from one place. Sales Cloud is highly customisable, making it the perfect fit for all types of businesses. 
                  When properly implemented, this system will fully automate the way your sales department functions, helping you make more sales,
                  in lesser time, and at a lower cost.
                  </p>
              </div>
              <div className="col-lg-6">
                  <img src={salesCloud} alt="Sales_Cloud" className="leftToRight"/>
              </div>
          </div>
      </div>
  </section>
      
      </>
      
      );
}
export default SalesCloud;