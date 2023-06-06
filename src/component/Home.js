import image1 from '../assets/img/slide/setAbout.jpg';
import image2 from '../assets/img/slide/banner2.jpg';
function Home() {
    let imageStyle = {
        height: "600px",
        width: "1500px",
        backgroundImage:
        `url(${image1})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        color: "white", 
     };
     let imageStyle2 = {
        height: "600px",
        width: "1500px",
        backgroundImage:
        `url(${image2})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        color: "white", 
     };
    return (
        <div>
            <section id="hero">
                <div id="heroCarousel" data-bs-interval="5000" class="carousel slide carousel-fade" data-bs-ride="carousel">

                    <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

                    <div class="carousel-inner" role="listbox">

                        <div class="carousel-item active" style={imageStyle}>
                            <div class="carousel-container">
                                <div class="container">
                                    <h2 class="animate__animated animate__fadeInDown">Welcome to <span>Valgorik Technologies</span></h2>
                                    
                                </div>
                            </div>
                        </div>

                        <div class="carousel-item" style={imageStyle2}>
                            <div class="carousel-container">
                                <div class="container">
                                    <h2 class="animate__animated animate__fadeInDown">Lorem Ipsum Dolor</h2>
                                    <p class="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                                </div>
                            </div>
                        </div>

                        <div class="carousel-item" style={imageStyle}>
                            <div class="carousel-container">
                                <div class="container">
                                    <h2 class="animate__animated animate__fadeInDown">Sequi ea ut et est quaerat</h2>
                                    <p class="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                                </div>
                            </div>
                        </div>


                    </div>
                    
                    <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
                    </a>

                    <a class="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                        <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
                    </a>

                </div>
            </section>
        </div>

    );
}
export default Home;