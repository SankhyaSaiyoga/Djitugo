import React from 'react'
import Logo from '../assets/images/logo.png'

export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark shadow">
                <div class="container">
                    <img src={Logo} alt="#" 
                        style={{ width: 105, height: 95 }}
                    />
                    {/* <a class="navbar-brand fw-bolder fs-4" href="#"></a> */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse px-5" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
                            <li class="nav-item ms-5">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Service</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Contact</a>
                            </li>
                        </ul>
                        <button className='btn btn-outline-light ms-auto px-4 rounded-pill'><i className='fa fa-sign-in me-2'></i>Login</button>
                        <button className='btn btn-outline-light ms-2 px-4 rounded-pill'><i className='fa fa-user-plus me-2'></i>Register</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}
