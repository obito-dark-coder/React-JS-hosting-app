import React from "react";
import {GrOverview,} from 'react-icons/gr'
import {GoInfo,} from 'react-icons/go'
import './Hero.css'

const Hero = () => {
    return (
        <div className="hero">
            <div className="logo-hero">
                <img src="https://cdn-icons-png.flaticon.com/512/3953/3953617.png"></img>
            </div>
            <div className="info-hero">
                LoremLoremLorem
            </div>
            <ul className='buttons-hero'>
                <li className="button-hero">
                        <GrOverview size={30} color=""/>
                </li>
                <li className="button-hero">
                        <GoInfo size={30}/>
                </li>
            </ul>
        </div>
    )
}

export default Hero