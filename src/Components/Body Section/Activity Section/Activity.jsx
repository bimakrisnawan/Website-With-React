import React from 'react'
import './activity.css'

// import icon
import { BsArrowRightShort } from 'react-icons/bs'

// import image
import img from '../../../Assets/profil.jpg'


const Activity = () => {
    return (
        <div className='activitySection'>
            <div className="heading flex">
                <h2>Recent Activity</h2>
                <button className='btn flex'>
                    See All
                    <BsArrowRightShort className='icon' />
                </button>
            </div>

            <div className="secContainer grid">

                <div className="singleCustomer flex">
                    <img src={img} alt="Customer Image" />
                    <div className="customerDetails">
                        <span className="name">Krisnawan</span>
                        <small>
                            Ordered something from you!
                        </small>
                    </div>
                    <div className="duration">
                        12 min ago
                    </div>
                </div>

                <div className="singleCustomer flex">
                    <img src={img} alt="Customer Image" />
                    <div className="customerDetails">
                        <span className="name">Krisnawan</span>
                        <small>
                            Ordered something from you!
                        </small>
                    </div>
                    <div className="duration">
                        12 min ago
                    </div>
                </div>

                <div className="singleCustomer flex">
                    <img src={img} alt="Customer Image" />
                    <div className="customerDetails">
                        <span className="name">Krisnawan</span>
                        <small>
                            Ordered something from you!
                        </small>
                    </div>
                    <div className="duration">
                        12 min ago
                    </div>
                </div>

                <div className="singleCustomer flex">
                    <img src={img} alt="Customer Image" />
                    <div className="customerDetails">
                        <span className="name">Krisnawan</span>
                        <small>
                            Ordered something from you!
                        </small>
                    </div>
                    <div className="duration">
                        12 min ago
                    </div>
                </div>

                <div className="singleCustomer flex">
                    <img src={img} alt="Customer Image" />
                    <div className="customerDetails">
                        <span className="name">Krisnawan</span>
                        <small>
                            Ordered something from you!
                        </small>
                    </div>
                    <div className="duration">
                        12 min ago
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Activity