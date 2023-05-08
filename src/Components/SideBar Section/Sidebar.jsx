import React from 'react'
import './sidebar.css'

// import image
import logo from '../../Assets/bima.png'

// import icon
import { IoMdSpeedometer } from 'react-icons/io'

const Sidebar = () => {
    return (
        <div className='sideBar grid'>

            <div className="logoDiv flex">
                {/* <img src={logo} alt="Image Name" /> */}
                <h2>bima.Krisnawan</h2>
            </div>

            <div className="menuDiv">
                <h3 className="divTitle">
                    Quick Menu
                </h3>
                <ul className="menuLists grid">

                    <li className="listItem">
                        <a href="#" className='menuLink flex'>
                            <IoMdSpeedometer className="icon" />
                            <span className="smallText">
                                Dashboard
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className='menuLink flex'>
                            <IoMdSpeedometer className="icon" />
                            <span className="smallText">
                                Dashboard
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className='menuLink flex'>
                            <IoMdSpeedometer className="icon" />
                            <span className="smallText">
                                Dashboard
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className='menuLink flex'>
                            <IoMdSpeedometer className="icon" />
                            <span className="smallText">
                                Dashboard
                            </span>
                        </a>
                    </li>



                </ul>
            </div>

        </div>

    )
}

export default Sidebar