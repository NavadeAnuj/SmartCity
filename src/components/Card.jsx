import React from 'react'
import { Link } from 'react-router-dom'

const Card = () => {
    return (
        <div style={{ display: 'flex', }}>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '50px' }}>
                {/* <Link to='transport'>
                    <div class="card1">
                        <div class="content">
                            <p className='title'>Transport</p>
                        </div>
                    </div>
                </Link> */}
                 {/* <Link to="tourism">
                    <div class="card3">
                        <div class="content">
                            <p className='title'>Tourism</p>
                        </div>
                    </div>
                </Link> */}
                <Link to='login'>
                    <div class="card2">
                        <div class="content">
                            <p className='title'>No Parking</p>
                        </div>
                    </div>
                </Link>

                <Link to='login'>
                    <div class="card4">
                        <div class="content">
                            <p className='title'>Admin Dashbaord</p>
                        </div>
                    </div>
                </Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', gap: '50px' }}>
              

               
            </div>
        </div>
    )
}

export default Card