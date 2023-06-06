import image1 from '../assets/img/slide/setAbout.jpg';

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
                    </div>
                </div>
            </section>
        </div>

    );
}
export default Home;