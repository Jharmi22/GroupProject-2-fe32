import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSignIn, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import img1 from '../../assets/images/img1.jpg';
import './HeaderStyle.css'


const Header = () => {

    const state = useSelector((state) => state.HandleCart);

  return (
    <div className='header'>
        <div className="container">
            <div className="middle row">
                <div className="col">
                    <Link to="/"><img src={img1} className="logo" alt="logo" /></Link>
                </div>
                <div className="col">
                    <div className="nav">
                        <ul>
                            <li>
                                <Link to='/'>Beranda</Link>
                            </li>
                            <li>
                                <Link to='/products'>Daftar Obat</Link>
                            </li>
                            <li>
                                <Link to='/about'>Tentang Kami </Link>
                            </li>
                            <li>
                                <Link to='/service'>Pelayanan</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col">
                    <div className="buttons">
                        <Link to="/login"><FontAwesomeIcon icon={faSignIn}/> Masuk</Link>
                        <Link to="/register"><FontAwesomeIcon icon={faUserPlus}/> Daftar</Link>
                        <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart}/> Keranjang({state.length})</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header