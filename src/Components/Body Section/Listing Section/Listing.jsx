import React from 'react'
import './listing.css'

// image
import img from '../../../Assets/bima.png'


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
                    <h3>Anual Vince</h3>
                </div>
            </div>
        </div>
    )
}

export default Listing