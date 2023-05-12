import React from 'react'
import './top.css'

// import icon
import { BiSearchAlt } from 'react-icons/bi';
import { TbMessageCircle } from 'react-icons/tb';
import { MdNotificationsNone } from 'react-icons/md';

// import image
import img from '../../../Assets/profil.jpg'
import video from '../../../Assets/video_dsh/video.mp4'

const Top = () => {
    return (
        <div className='topSection'>
            <div className="headerSection flex">
                <div className="title">
                    <h1>Welcome To My Website!</h1>
                    <p>I am a student majoring in Informatics Engineering and this is my second web development</p>
                </div>

                <div className="searchBar flex">
                    <input type="text" placeholder='Search Dashboard' />
                    <BiSearchAlt className="icon" />
                </div>

                <div className="adminDiv flex">
                    <TbMessageCircle className="icon" />
                    <MdNotificationsNone className="icon" />
                    <div className="adminImage">
                        <img src={img} alt="Admin Image" />
                    </div>
                </div>
            </div>

            <div className="cardSection flex">

                <div className="rightCard flex">

                    <h1>Lorem ipsum dolor sit amet.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, molestias!</p>

                    <div className="buttons flex">
                        <button className='btn'>Explore More</button>
                        <button className='btn transparent'>Top Sellers</button>
                    </div>

                    <div className="videoDiv">
                        <video src={video} autoPlay loop muted></video>
                    </div>

                </div>

                <div className="leftCard flex">
                    <div className="main flex">
                        <div className="textDiv">
                            <h1>My Stat</h1>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Top