import React from 'react'
import Service from '../Service/Service';
import image from '../../assets/images/image.jpg';
import "./BerandaStyle.css"
import { Link } from 'react-router-dom';

const Beranda = () => {
    return (
        <div className='beranda'>
            <div className="hero">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img src={image} className="hero" alt="hero" />
                            <div className="content">
                                <h3 className="title">ApoSkill</h3>
                                <p className="subtitle">Apotek yang menjual obat-obatan secara online</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Beranda