import React from 'react'
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Lottie from "react-lottie";
import animationData from "../assets/lottie/bg.json"

function LandingPage() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <div className="landing-div">
            <div>
                <Lottie
                    options={defaultOptions}
                    className="lottie"
                    height={500}
                    width={600}
                />
            </div>
            <div className="landing-title">
                <h1>Open Journal</h1>
                <p>Write - Share - Earn</p>
                <Link to = "/signin">
                <Button style={{ backgroundColor: "#6246ea", color: "white" }}>
                    Explore
                </Button>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage
