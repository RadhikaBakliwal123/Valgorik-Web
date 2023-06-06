import React from "react";
import img1 from '../assets/img/aboutPage/aboutMobile.jpg';

const About = () => {
  return (

    <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>About Us</h2>
        </div>

        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2">
            <img src={img1} className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
          <h2>About Our Company</h2><br></br>
                <p>
                  Welcome to Valgorik Tech Solutions, a leading IT company specializing in delivering innovative technology solutions to businesses of all sizes. With a team of skilled professionals and a passion for cutting-edge technologies, we strive to empower our clients and help them achieve their digital goals.
                </p>
                <p>
                  At Valgorik Tech Solutions, we offer a wide range of services including web development, mobile app development, cloud solutions, cybersecurity, and IT consulting. Our expertise spans across various industries, allowing us to tailor our solutions to meet the unique needs of each client.
                </p>
                <p>
                  Our mission is to deliver top-notch solutions that drive growth and enhance operational efficiency. We believe in building long-lasting partnerships with our clients by providing exceptional customer service and delivering projects on time and within budget.
                </p>
          </div>
        </div>
      </div>
    </section>

  );
}
export default About;