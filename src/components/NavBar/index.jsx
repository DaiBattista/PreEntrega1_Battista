import React from 'react';
import { CartWidget } from '../CartWidget';

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Tienda Nintendo</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="#">Consolas</a>
                        <a class="nav-link active" aria-current="page" href="#">Videojuegos</a>
                        <a class="nav-link active" aria-current="page" href="#">Accesorios</a>
                        <a class="nav-link active" aria-current="page" href="#">Remeras</a>
                        <a class="nav-link active" aria-current="page" href="#">Buzos</a>
                        <a class="nav-link" href="#"><CartWidget/></a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
