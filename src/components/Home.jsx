import React from 'react'
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from 'react-icons/ai'
import '../styles/home.scss';
import vg from '../assets/2.webp';

const Home = () => {

    return (
        <>
            <div className='home' id='home'>
                <main>
                    <h1>TechyStar</h1>
                    <p>Solution to all your problems.</p>
                </main>
            </div>

            <div className='home2'>
                <img src={vg} alt='Graphics' />

                <div>
                    <p>
                        Product Based companies are the ones that produce high-end products in order to satisfy their customers’ requirements. These companies are focused on introducing or producing products that have a high market value. These are the companies that keep on improving their products and upgrading their technologies in order or be in the market. Some of the popular product-based companies are Amazon, HP, Microsoft, Facebook, Adobe, Intel, Informatica, Amdocs, CISCO, etc.
                    </p>
                </div>
            </div>

            <div className='home3' id='about'>
                <div>
                    <h1>Who we are?</h1>
                    <p>
                        Service-based companies are the ones that do not have a particular product but their primary business is to provide services. If we talk more clearly then they work for other organizations or have client-based products. The services they provide are intangible and can be provided in the terms of expertise, amenities, or skills. These companies generally provide less salary compared to product-based companies. Some of the popular service-based companies are TCS, Infosys, Wipro, Tech Mahindra, etc.
                    </p>
                </div>
            </div>

            <div className='home4' id='brands'>
                <div>
                    <h1>Brands</h1>

                    <article>
                        <div style={{
                            animationDelay: "0.7s"
                        }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>

                        <div style={{
                            animationDelay: "0.5s"
                        }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>

                        <div style={{
                            animationDelay: "0.7s"
                        }}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>

                        <div style={{
                            animationDelay: "0.5s"
                        }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>

            </div>
        </>
    )
}

export default Home