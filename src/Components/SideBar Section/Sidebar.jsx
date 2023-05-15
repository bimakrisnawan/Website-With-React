import React from 'react'
import './sidebar.css'

// import image
import logo from '../../Assets/bima.png'

// import icon
import { IoMdSpeedometer } from 'react-icons/io'
import { MdDeliveryDining } from 'react-icons/md'
import { MdOutlineExplore } from 'react-icons/md'
import { BsTrophy } from 'react-icons/bs'
import { AiOutlinePieChart } from 'react-icons/ai'
import { BiTrendingUp } from 'react-icons/bi'
import { MdOutlinePermContactCalendar } from 'react-icons/md'
import { BsCreditCard2Front } from 'react-icons/bs'
import { BsQuestionCircle } from 'react-icons/bs'

const Sidebar = () => {
    return (

        <div className='sideBar grid'>

            <div className="logoDiv flex">
                <img src={logo} alt="Image Name" />
                <h2>Bima Krisnawan.</h2>
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
                                Work
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className='menuLink flex'>
                            <MdDeliveryDining className="icon" />
                            <span className="smallText">
                                Project
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className='menuLink flex'>
                            <MdOutlineExplore className="icon" />
                            <span className="smallText">
                                Blog
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className='menuLink flex'>
                            <MdOutlineExplore className="icon" />
                            <span className="smallText">
                                Skill
                            </span>
                        </a>
                    </li>

                </ul>
            </div>

            <div className="settingsDiv">
                <h3 className="divTitle">
                    Other
                </h3>
                <ul className="menuLists grid">

                    <li className="listItem">
                        <a href="#" className='menuLink flex'>
                            <AiOutlinePieChart className="icon" />
                            <span className="smallText">
                                Achievement
                            </span>
                        </a>
                    </li>

                </ul>
            </div>

            <div className='sideBarCard'>
                <BsQuestionCircle className="icon" />
                <div className="cardContent">
                    <div className="circle1"></div>
                    <div className="circle2"></div>

                    <h3>Contact Me</h3>
                    <p>Please contact the email below</p>
                    <button className='btn'>Email Me!</button>
                </div>
            </div>

        </div>

    )
}

export default Sidebar