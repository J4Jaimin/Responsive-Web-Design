import React from 'react'

import '../styles/footer.scss';

const Footer = () => {
    return (
        <footer>
            <div>
                <h1>TechyStar</h1>
                <p>@all rights reserved!</p>
            </div>

            <div>
                <h5>Follow Us</h5>
                <div>
                    <a href="https://youtube.com" target={'blank'}>Youtube</a>
                    <a href="https://linkedin.com/jaiminrana" target={'blank'}>LinkedIn</a>
                    <a href="https://instagram.com/the_jaimin_1102" target={'blank'}>Instagram</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer