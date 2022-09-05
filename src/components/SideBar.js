import React from 'react';
import image from '../assets/images/logo-DH.png';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';
import ContentRowMovies from './ContentRowMovies';
import ContentWrapper from './ContentWrapper'; 
import {Link, Route, Routes} from 'react-router-dom';
import Error404 from './Error404';

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - DH movies</span></a>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="/">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Pages</span>
                    </a>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span></a>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tables</span></a>
                </li>

                <li className="nav-item">
                    <Link to="GenresInDb" className="nav-link" >
                        <i className="fas fa-fw fa-table"></i>
                        <span>GenresInDb</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="LastMovieInDb" className="nav-link" >
                        <i className="fas fa-fw fa-table"></i>
                        <span>LastMovieInDb</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="ContenRowMovies" className="nav-link" >
                        <i className="fas fa-fw fa-table"></i>
                        <span>ContentRowMovies</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="ContentWrapper" className="nav-link" >
                        <i className="fas fa-fw fa-table"></i>
                        <span>ContentWrapper</span>
                    </Link>
                </li>
                <Routes>
                    <Route path="/GenresInDb"  element={<GenresInDb/>} />
                    <Route path="/LastMovieInDb" element={<LastMovieInDb/>} />
                    <Route path="/ContentRowMovies" element={<ContentRowMovies/>} />
                    <Route path="/ContentWrapper" element={<ContentWrapper/>} />
                    <Route path="*" element={<Error404/>} />

                </Routes>


                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
            
        </React.Fragment>
    )
}
export default SideBar;