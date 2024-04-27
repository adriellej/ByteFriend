import { useState, useEffect } from 'react';

import '../css/home.css';

import Home_Image from '../img/h_bg1.png';

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showContent, setShowContent] = useState(true);

    const contents = [
        {
            declaration: 'Learn now!',
            title: 'Lorem ipsum dolor sit amet 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare, libero vitae bibendum ornare, sem ipsum euismod justo, vel dapibus ante risus id elit.',
        },
        {
            declaration: 'Another Title',
            title: 'Lorem ipsum dolor sit amet 2',
            description: 'Another content here.'
        },
        
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setShowContent(false); // Start fade out animation
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % contents.length);
                setShowContent(true);
            }, 500); 
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex, contents.length]);

    return (
        <div className="home_container">
            <div className="column_1">
                <div className={`titles ${showContent ? 'show' : 'hide'}`}>
                    <span>{contents[currentIndex].declaration}</span>
                    <h1>{contents[currentIndex].title}</h1>
                    <p>{contents[currentIndex].description}</p>
                </div>
                                
                <div className="buttons">
                    <button className="button_solid">Button 1</button>
                    <button className="button_outline">Button 2</button>
                </div>
            </div>

            <div className="column_2">
                <img src={Home_Image} alt="home_image" className="home_image" />
            </div>
        </div>
    );
};

export default Home;
