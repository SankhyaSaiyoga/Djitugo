import React from 'react'
import HeroImage from '../assets/images/banner.jpg'

export default function About() {
  return (
    <div>
        <section className='about'>
            <div className='container my-5 py-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={HeroImage} alt='About'
                        style={{ width: 520  }} />
                    </div>
                    <div className='col-md-6'>
                        <h3 className='fs-5 mb-0'>About Us</h3>
                        <h1 className='display-6 mb-2 pt-1'>Help Every Phase Of Your Business Growth</h1>
                        <hr className='w-50'/>
                        <p className='lead mb-4'>Vitae quam minus atque quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque non animi consequatur recusandae dolore obcaecati eaque, quam, tempora provident, sint aperiam dicta nemo mollitia dolorem? Vitae quam minus atque quod.</p>
                        <button className='btn btn-primary rounded-pill px-4 py-2'>View More</button>
                        <button className='btn btn-outline-primary rounded-pill px-4 py-2 ms-2'>Contact Us</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
