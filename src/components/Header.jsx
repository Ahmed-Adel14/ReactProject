import "./Header.css";
import myimage from "../assets/abstract-1.webp"
function Header() {
    return (
        <div className="hero">
            <header className="navbar">
                <div className="container">
                    <div className="header">
                        <h1 className="logo">Strategy</h1>
                        <nav className="nav">
                            <ul>
                                <li>
                                    <a href="#hero">Home</a>
                                </li>
                                <li>
                                    <a href="#about">About</a>
                                </li>
                                <li>
                                    <a href="#services">Services</a>
                                </li>
                                <li>
                                    <a href="#portfolio">portfolio</a>
                                </li>
                                <li className="dropdown">
                                    <a href="#">Dropdown ▾</a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a href="#">Dropdown1</a>
                                        </li>
                                        <li>
                                            <a href="#">Dropdown2</a>
                                        </li>
                                        <li>
                                            <a href="#">Dropdown3</a>
                                        </li>
                                        <li>
                                            <a href="#">Dropdown4</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#team">Team</a>
                                </li>
                                <li>
                                    <a href="#contact">Contact</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="button">
                            <p>Get Started</p>
                        </div>
                    </div>
                </div>
            </header>
            <section>
                <div className="container">
                    <div className="content">
                        <div className="content-inf">
                            <h4>OUR AGENCY</h4>
                            <h1>
                                CREATIVE
                                <br />
                                DESIGN
                            </h1>
                            <div className="divider"></div>
                            <span>
                                Discover innovative strategies for impactful visual communication. We transform ideas into compelling realities, ensuring your brand stands out in a crowded
                                marketplace. Our dedicated team leverages cutting-edge techniques to deliver exceptional results that resonate with your audience.
                            </span>
                            <div className="explore">
                                <p>EXPLORE SERVICES</p>
                                <span>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div className="content-image">
                            <img src={myimage} />

                            <div className="box">
                                <div className="box-number">
                                    <p>5k</p>
                                </div>
                                <div className="box-arrow">
                                    <span>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.25 15.5a.75.75 0 0 1-.75-.75V7.56L7.28 17.78a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L16.44 6.5H9.25a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75Z"></path>
                                        </svg>
                                    </span>
                                </div>
                                <div className="box-inf">
                                    <p>Successful Campaigns</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Header;
