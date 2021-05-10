import React from 'react'
import SearchIcon from '@material-ui/icons/Search'

function MainNav() {
    return (
        <>
        <section className="main_nav bg-white">
                <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light pb-3 pt-3">
                <div className="container-fluid">
                    <a className="navbar-brand" href="./"><img src="/img/Chain.Gallery.png"/></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto float-right text-right">
                        <li className="nav-item" >
                            <a className="nav-link me-3" href="#" style={{color:'black' }}><SearchIcon/> Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-3" href="#" style={{color:'black'}}>Market</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-3" href="#" style={{color:'black'}}>Sell your artwork</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-3" href="#" style={{color:'black'}}>Activity</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-3" href="#" style={{color:'black'}}>Login</a>
                        </li>
        
                    </ul>
            </div>
    </div>
</nav>
                {/* <nav className="navbar navbar-expand-lg navbar-light mt-3">
                    <a className="navbar-brand" href="#"><img src="/img/Chain.Gallery.png"/></a>
                    * <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <img src="/img/menu_icon.png"/>
                    </button> 

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#"><SearchIcon/></a>
                            </li>
                        </ul>   
                    </div>
                </nav> */}
                </div>
        </section> 
        </>
    )
}

export default MainNav
