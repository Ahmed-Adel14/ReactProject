import React from "react";
import "./Pricing.css";
import { BsBox } from "react-icons/bs";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { GoXCircle } from "react-icons/go";
import { FaBriefcase, FaRegBuilding } from "react-icons/fa";
export default function Pricing() {
    return (
        <section>
            <div className="container">
                <div className="Pricing-inf">
                    <p>Pricing</p>
                    <span>Check Our Pricing</span>
                </div>
                <div className="Pricing-card">
                    <div className="Pricing-card-1">
                        <div className="plan">
                            <div className="paln-square">
                                <h5>
                                    <BsBox />
                                </h5>
                            </div>
                            <h3>Starter</h3>
                            <p>For individuals just getting started</p>
                        </div>
                        <div className="plan-price">
                            <span>$</span>
                            <p>12</p>
                            <h4>/month</h4>
                        </div>
                        <div className="plan-features">
                            <ul>
                                <li>
                                    <span className="icon">
                                        <IoCheckmarkCircleOutline />
                                    </span>
                                    <span className="label">Nullam accumsan lorem</span>
                                </li>
                                <li>
                                    <span className="icon">
                                        <IoCheckmarkCircleOutline />
                                    </span>
                                    <span className="label">Vestibulum auctor dapibus</span>
                                </li>
                                <li>
                                    <span className="icon">
                                        <IoCheckmarkCircleOutline />
                                    </span>
                                    <span className="label">Nulla consequat massa</span>
                                </li>
                                <li className="disable">
                                    <span className="icon">
                                        <GoXCircle />
                                    </span>
                                    <span className="label">In enim justo rhoncus ut</span>
                                </li>
                                <li className="disable">
                                    <span className="icon">
                                        <GoXCircle />
                                    </span>
                                    <span className="label">Curabitur ullamcorper ultricies</span>
                                </li>
                            </ul>
                        </div>
                        <div className="plan-button">
                            <p>Choose Plan</p>
                        </div>
                    </div>
                    <div className="Pricing-card-1">
                        <div className="plan">
                            <div className="paln-square">
                                <h5>
                                    <FaBriefcase />
                                </h5>
                            </div>
                            <h3>Professional</h3>
                            <p>For small teams and growing businesses</p>
                        </div>
                        <div className="plan-price">
                            <span>$</span>
                            <p>39</p>
                            <h4>/month</h4>
                        </div>
                        <div className="plan-features">
                            <ul>
                                <li>
                                    <span className="icon">
                                        <IoCheckmarkCircleOutline />
                                    </span>
                                    <span className="label">Donec quam felis ultricies</span>
                                </li>
                                <li>
                                    <span className="icon">
                                        <IoCheckmarkCircleOutline />
                                    </span>
                                    <span className="label">Nam eget dui etiam rhoncus</span>
                                </li>
                                <li>
                                    <span className="icon">
                                        <IoCheckmarkCircleOutline />
                                    </span>
                                    <span className="label">Maecenas tempus tellus</span>
                                </li>
                                <li className="disable">
                                    <span className="icon">
                                        <GoXCircle />
                                    </span>
                                    <span className="label">Donec pede justo fringilla</span>
                                </li>
                                <li className="disable">
                                    <span className="icon">
                                        <GoXCircle />
                                    </span>
                                    <span className="label">Cras dapibus vivamus</span>
                                </li>
                            </ul>
                        </div>
                        <div className="plan-button active">
                            <p>Choose Plan</p>
                        </div>
                    </div>
                    <div className="Pricing-card-1">
                        <div className="plan">
                            <div className="paln-square">
                                <h5>
                                    <FaRegBuilding />
                                </h5>
                            </div>
                            <h3>Enterprise</h3>
                            <p>For large organizations and corporations</p>
                        </div>
                        <div className="plan-price">
                            <span>$</span>
                            <p>79</p>
                            <h4>/month</h4>
                        </div>
                        <div className="plan-features">
                            <ul>
                                <li>
                                    <span className="icon">
                                        <IoCheckmarkCircleOutline />
                                    </span>
                                    <span className="label">NEtiam sit amet orci eget</span>
                                </li>
                                <li>
                                    <span className="icon">
                                        <IoCheckmarkCircleOutline />
                                    </span>
                                    <span className="label">Pellentesque posuere vulputate</span>
                                </li>
                                <li>
                                    <span className="icon">
                                        <IoCheckmarkCircleOutline />
                                    </span>
                                    <span className="label">Nulla consequat massa</span>
                                </li>
                                <li >
                                    <span className="icon">
                                        <IoCheckmarkCircleOutline />
                                    </span>
                                    <span className="label">Quisque rutrum aenean</span>
                                </li>
                                <li >
                                    <span className="icon">
                                        <IoCheckmarkCircleOutline />
                                    </span>
                                    <span className="label">Fusce vulputate eleifend</span>
                                </li>
                            </ul>
                        </div>
                        <div className="plan-button">
                            <p>Choose Plan</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
