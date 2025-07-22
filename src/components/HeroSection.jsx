import "./heroSection.css";
import Abstract from "../assets/about-portrait-1.webp";
import Person1 from "../assets/person-m-1.webp"
import Person2 from "../assets/person-f-3.webp"
function HeroSection() {
    return (
        <section id="About">
            <div className="container">
                <div className="About">
                    <div className="About-image">
                        <h2>ABOUT</h2>
                        <span>Learn More About Us</span>
                        <div className="About-image-image">
                            <img src={Abstract} alt="" />
                            <div className="experience">
                                <p>20K</p>
                                <span>YEARS OF EXPERTISE</span>
                            </div>
                        </div>
                    </div>
                    <div className="About-inf">
                        <h1>Elevating Business Performance Through Innovation</h1>
                        <span>We focus on crafting bespoke strategies that navigate complexity and deliver tangible results for our clients.</span>
                        <p>Through a blend of sophisticated analytics and creative problem-solving, we empower organizations to thrive in rapidly evolving markets.</p>
                        <div className="feature-item">
                            <div className="feature-item1">
                                <span>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Circle_Check">
                                            <g>
                                                <path d="M15.81,10.4a.5.5,0,0,0-.71-.71l-3.56,3.56L9.81,11.52a.5.5,0,0,0-.71.71l2.08,2.08a.513.513,0,0,0,.71,0Z"></path>
                                                <path d="M12,21.934A9.934,9.934,0,1,1,21.933,12,9.945,9.945,0,0,1,12,21.934ZM12,3.067A8.934,8.934,0,1,0,20.933,12,8.944,8.944,0,0,0,12,3.067Z"></path>
                                            </g>
                                        </g>
                                    </svg>
                                </span>
                                <p>Dedicated Team Support</p>
                                <h3>Our highly skilled professionals are committed to providing personalized service and impactful solutions on every engagement.</h3>
                            </div>
                            <div className="feature-item2">
                                <span>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 352 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"></path>
                                    </svg>
                                </span>
                                <p>Dedicated Team Support</p>
                                <h3>Our highly skilled professionals are committed to providing personalized service and impactful solutions on every engagement.</h3>
                            </div>
                        </div>
                        <div className="services">Explore Our Services</div>
                    </div>
                </div>
                <div className="testominial-section">
                    <div className="testominial-section-inf">
                        <p>Our Clients Speak Highly</p>
                        <span>Hear directly from those who have experienced the impact of our partnership and achieved their strategic goals.</span>
                        <div className="swiper">
                            <div className="swiper-left">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M216.4 163.7c5.1 5 5.1 13.3.1 18.4L155.8 243h231.3c7.1 0 12.9 5.8 12.9 13s-5.8 13-12.9 13H155.8l60.8 60.9c5 5.1 4.9 13.3-.1 18.4-5.1 5-13.2 5-18.3-.1l-82.4-83c-1.1-1.2-2-2.5-2.7-4.1-.7-1.6-1-3.3-1-5 0-3.4 1.3-6.6 3.7-9.1l82.4-83c4.9-5.2 13.1-5.3 18.2-.3z"></path>
                                </svg>
                            </div>
                            <div className="swiper-right">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="testominial-section-card">
                        <div className="testominial-section-card1">
                            <span>★★★★★</span>
                            <p>"Their strategic vision and unwavering commitment to results provided exceptional value. Our operational efficiency has signficantly improved."</p>
                            <div className="card">
                                <div className="card-image">
                                    <img src={Person1} alt="" />
                                </div>
                                <div className="card-inf">
                                    <p>David Kim</p>
                                    <span>Product Lead</span>
                                </div>
                            </div>
                        </div>
                        <div className="testominial-section-card2">
                            <span>★★★★☆</span>
                            <p>"Their strategic vision and unwavering commitment to results provided exceptional value. Our operational efficiency has signficantly improved."</p>
                            <div className="card">
                                <div className="card-image">
                                    <img src={Person2} alt="" />
                                </div>
                                <div className="card-inf">
                                    <p>Rahma Adel</p>
                                    <span>Frontend </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default HeroSection;
