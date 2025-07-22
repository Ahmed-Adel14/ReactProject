import React from 'react'
import "./Testimonials.css"
import Person3 from "../assets/person-m-9.webp"
 function Testimonials() {
    return (
        <section className="testemonial">
            <div className="container">
                <div className="testemonial-p">
                    <p>Testimonials</p>
                    <span>Check Our Testimonials</span>
                </div>
                <div className="testomonials-card">
                    <div className="testonials-card-inf">
                        <h2>Impedit dolor facilis nulla</h2>
                        <span>
                            Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                        </span>
                        <p>
                            Dolorem excepturi esse qui amet maxime quibusdam aut repellendus voluptatum. Corrupti enim a repellat cumque est laborum fuga consequuntur. Dolorem nostrum deleniti quas
                            voluptatem iure dolorum rerum. Repudiandae doloribus ut repellat harum vero aut. Modi aut velit aperiam aspernatur odit ut vitae.
                        </p>
                        <div className="mini-card">
                            <div className="mini-card-img">
                                <img src={Person3} alt="" />
                            </div>
                            <div className="mini-card-inf">
                                <p>Matt Brandlon</p>
                                <span>Frelancer</span>
                            </div>
                        </div>
                    </div>
                    <div className="testonials-card-img">
                        <img src={Person3} alt="" />
                    </div>
                </div>
                
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
        </section>
    );
}
export default Testimonials
