import React from 'react'
import "./Team.css"
import { IoLogoFacebook, IoLogoLinkedin } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import person7 from "../assets/person-m-7.webp";
import person8 from "../assets/person-f-8.webp";
import person6 from "../assets/person-m-6.webp";
import person4 from "../assets/person-f-4.webp";
import person12 from "../assets/person-m-12.webp";
import person9 from "../assets/person-m-9.webp";
export default function Team() {
    return (
        <section className="Team">
            <div className="container">
                <div className="team-inf">
                    <p>TEAM</p>
                    <span>Check Our Team</span>
                </div>
                <div className="team-card">
                    <div className="team-card-1">
                        <div className="team-card-1-image">
                            <img src={person7} alt="" />
                        </div>
                        <div className="team-card-1-inf">
                            <h4>Walter White</h4>
                            <span>Chief Executive Officer</span>
                            <p>Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow</p>
                            <div className="social-media">
                                <a href="">
                                    <IoLogoFacebook />
                                </a>
                                <a href="">
                                    <RiTwitterXFill />
                                </a>
                                <a href="">
                                    <IoLogoLinkedin />
                                </a>
                                <a href="">
                                    <FaYoutube />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="team-card-1">
                        <div className="team-card-1-image">
                            <img src={person8} alt="" />
                        </div>
                        <div className="team-card-1-inf">
                            <h4>Sarah Jhonson</h4>
                            <span>Product Manager</span>
                            <p>Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores exercitationem ut</p>
                            <div className="social-media">
                                <a href="">
                                    <IoLogoFacebook />
                                </a>
                                <a href="">
                                    <RiTwitterXFill />
                                </a>
                                <a href="">
                                    <IoLogoLinkedin />
                                </a>
                                <a href="">
                                    <FaYoutube />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="team-card-1">
                        <div className="team-card-1-image">
                            <img src={person6} alt="" />
                        </div>
                        <div className="team-card-1-inf">
                            <h4>William Anderson</h4>
                            <span>CTO</span>
                            <p>Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut praesentium vel tque sed facilis at qui</p>
                            <div className="social-media">
                                <a href="">
                                    <IoLogoFacebook />
                                </a>
                                <a href="">
                                    <RiTwitterXFill />
                                </a>
                                <a href="">
                                    <IoLogoLinkedin />
                                </a>
                                <a href="">
                                    <FaYoutube />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="team-card-1">
                        <div className="team-card-1-image">
                            <img src={person4} alt="" />
                        </div>
                        <div className="team-card-1-inf">
                            <h4>Amanda Jepson</h4>
                            <span>Accountant</span>
                            <p>Magni voluptatem accusamus assumenda cum nisi aut qui dolorem voluptate sed et veniam quasi quam consectetur</p>
                            <div className="social-media">
                                <a href="">
                                    <IoLogoFacebook />
                                </a>
                                <a href="">
                                    <RiTwitterXFill />
                                </a>
                                <a href="">
                                    <IoLogoLinkedin />
                                </a>
                                <a href="">
                                    <FaYoutube />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="team-card-1">
                        <div className="team-card-1-image">
                            <img src={person12} alt="" />
                        </div>
                        <div className="team-card-1-inf">
                            <h4>Brian Doe</h4>
                            <span>Brian Doe Marketing</span>
                            <p>Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit</p>
                            <div className="social-media">
                                <a href="">
                                    <IoLogoFacebook />
                                </a>
                                <a href="">
                                    <RiTwitterXFill />
                                </a>
                                <a href="">
                                    <IoLogoLinkedin />
                                </a>
                                <a href="">
                                    <FaYoutube />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="team-card-1">
                        <div className="team-card-1-image">
                            <img src={person9} alt="" />
                        </div>
                        <div className="team-card-1-inf">
                            <h4>Josepha Palas</h4>
                            <span>Operation</span>
                            <p>Sint sint eveniet explicabo amet consequatur nesciunt error enim rerum earum et omnis fugit eligendi cupiditate ve</p>
                            <div className="social-media">
                                <a href="">
                                    <IoLogoFacebook />
                                </a>
                                <a href="">
                                    <RiTwitterXFill />
                                </a>
                                <a href="">
                                    <IoLogoLinkedin />
                                </a>
                                <a href="">
                                    <FaYoutube />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
