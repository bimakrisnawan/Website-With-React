import React from 'react'
import './listing.css'

// image
import img from '../../../Assets/bima.png'
import img2 from '../../../Assets/profil.jpg'


// icon
import { BsArrowRightShort } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';

const Listing = () => {
    return (
        <div className='listingSection'>

            <div className="heading flex">
                <h1>My Listings</h1>
                <button className='btn flex'>
                    See All
                    <BsArrowRightShort className="icon" />
                </button>
            </div>

            <div className="secContainer flex">


                <div className="singleItem">
                    <AiFillHeart className="icon" />
                    <img src={img} alt="Image Name" />
                    <h3>Anual Vince 1</h3>
                </div>

                <div className="singleItem">
                    <AiFillHeart className="icon" />
                    <img src={img} alt="Image Name" />
                    <h3>Anual Vince 2</h3>
                </div>

                <div className="singleItem">
                    <AiFillHeart className="icon" />
                    <img src={img} alt="Image Name" />
                    <h3>Anual Vince 3</h3>
                </div>

                <div className="singleItem">
                    <AiFillHeart className="icon" />
                    <img src={img} alt="Image Name" />
                    <h3>Anual Vince 4</h3>
                </div>


            </div>

            <div className="sellers flex">

                <div className="topSellers">
                    <div className="heading flex">
                        <h3>Top Sellers</h3>
                        <button className='btn flex'>
                            See All
                            <BsArrowRightShort className="icon" />
                        </button>
                    </div>

                    <div className="card flex">
                        <div className="users">
                            <img src={img2} alt="User Image" />
                            <img src={img2} alt="User Image" />
                            <img src={img2} alt="User Image" />
                            <img src={img2} alt="User Image" />
                        </div>
                        <div className="cardText">
                            <span>
                                123 Stalker Checked <br />
                                <small>
                                    32 Sellers <span className="date">7 Days</span>
                                </small>
                            </span>
                        </div>
                    </div>

                </div>

                <div className="featuredSeller">
                    <div className="heading flex">
                        <h3>Featured Sellers</h3>
                        <button className='btn flex'>
                            See All
                            <BsArrowRightShort className="icon" />
                        </button>
                    </div>

                    <div className="card flex">
                        <div className="users">
                            <img src={img2} alt="User Image" />
                            <img src={img2} alt="User Image" />
                            <img src={img2} alt="User Image" />
                            <img src={img2} alt="User Image" />
                        </div>
                        <div className="cardText">
                            <span>
                                144 Stalker Checked <br />
                                <small>
                                    234 Sellers <span className="date">7 Days</span>
                                </small>
                            </span>
                        </div>
                    </div>

                </div>


            </div>



        </div>
    )
}

export default Listing