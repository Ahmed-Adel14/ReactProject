import React from "react";
import "./Portofolio.css";
import portfolio1 from "../assets/portfolio-1.webp"
import portfolio10 from "../assets/portfolio-10.webp"
import portfolio2 from "../assets/portfolio-2.webp"
import portfolio4 from "../assets/portfolio-4.webp"
import portfolio11 from "../assets/portfolio-11.webp"
import portfolio5 from "../assets/portfolio-5.webp"
import portfolio7 from "../assets/portfolio-7.webp"
import portfolio8 from "../assets/portfolio-8.webp"
import { BsGrid3X3, BsArrowsAngleExpand } from "react-icons/bs";
import { GiSmartphone } from "react-icons/gi";
import { RiCodeSSlashFill } from "react-icons/ri";
import { IoCameraOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { GoGraph } from "react-icons/go";
export default function Portofolio() {
    return (
        <section id="portfolio">
            <div className="text">
                <p>Portfolio</p>
                <span>Check Our Portfolio</span>
            </div>
            <ul className="menu">
                <li className="active">
                    <span className="icon">
                        <BsGrid3X3 />
                    </span>
                    <span className="label">All Projects</span>
                </li>
                <li>
                    <span className="icon">
                        <GiSmartphone />
                    </span>
                    <span className="label">UI/UX</span>
                </li>
                <li>
                    <span className="icon">
                        <RiCodeSSlashFill />
                    </span>
                    <span className="label">Development</span>
                </li>
                <li>
                    <span className="icon">
                        <IoCameraOutline />
                    </span>
                    <span className="label">Photography</span>
                </li>
                <li>
                    <span className="icon">
                        <GoGraph />
                    </span>
                    <span className="label">Marketing</span>
                </li>
            </ul>
            <div className="products-cards">
                <div className="products-cards-1">
                    <img src={portfolio1} alt="" />
                    <div className="overlay"></div>
                    <div className="products-cards-inf">
                        <p>UI/UX Design</p>
                        <h3>Mobile Banking App</h3>
                        <div className="links">
                            <span>
                                <BsArrowsAngleExpand />
                            </span>
                            <span>
                                <IoIosArrowRoundForward />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="products-cards-1">
                    <img src={portfolio11} alt="" />
                    <div className="overlay"></div>
                    <div className="products-cards-inf">
                        <p>Development</p>
                        <h3>Cloud Management System</h3>
                        <div className="links">
                            <span>
                                <BsArrowsAngleExpand />
                            </span>
                            <span>
                                <IoIosArrowRoundForward />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="products-cards-1">
                    <img src={portfolio10} alt="" />
                    <div className="overlay"></div>
                    <div className="products-cards-inf">
                        <p>Development</p>
                        <h3>E-Learning Platform</h3>
                        <div className="links">
                            <span>
                                <BsArrowsAngleExpand />
                            </span>
                            <span>
                                <IoIosArrowRoundForward />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="products-cards-1">
                    <img src={portfolio2} alt="" />
                    <div className="overlay"></div>
                    <div className="products-cards-inf">
                        <p>Development</p>
                        <h3>Smart Home Interface</h3>
                        <div className="links">
                            <span>
                                <BsArrowsAngleExpand />
                            </span>
                            <span>
                                <IoIosArrowRoundForward />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="products-cards-1">
                    <img src={portfolio4} alt="" />
                    <div className="overlay"></div>
                    <div className="products-cards-inf">
                        <p>Marketing</p>
                        <h3>Marketing</h3>
                        <div className="links">
                            <span>
                                <BsArrowsAngleExpand />
                            </span>
                            <span>
                                <IoIosArrowRoundForward />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="products-cards-1">
                    <img src={portfolio5} alt="" />
                    <div className="overlay"></div>
                    <div className="products-cards-inf">
                        <p>Marketing</p>
                        <h3>Brand Strategy</h3>
                        <div className="links">
                            <span>
                                <BsArrowsAngleExpand />
                            </span>
                            <span>
                                <IoIosArrowRoundForward />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="products-cards-1">
                    <img src={portfolio7} alt="" />
                    <div className="overlay"></div>
                    <div className="products-cards-inf">
                        <p>Photography</p>
                        <h3>Urban Architecture</h3>
                        <div className="links">
                            <span>
                                <BsArrowsAngleExpand />
                            </span>
                            <span>
                                <IoIosArrowRoundForward />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="products-cards-1">
                    <img src={portfolio8} alt="" />
                    <div className="overlay"></div>
                    <div className="products-cards-inf">
                        <p>Photography</p>
                        <h3>Photography</h3>
                        <div className="links">
                            <span>
                                <BsArrowsAngleExpand />
                            </span>
                            <span>
                                <IoIosArrowRoundForward />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
