import React, { useState, useEffect } from 'react';
import './banner.css';
import image1 from '../../assets/banner.png';
import image2 from '../../assets/image2.png';

const images = [
    image1,
    image2,
    // Add more images as needed
];

const ImageSlider = ({showButtons,width,margin}) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const moveSlide = (direction) => {
        setCurrentSlide((prev) => {
            const newIndex = prev + direction;
            if (newIndex < 0) return images.length - 1;
            if (newIndex >= images.length) return 0;
            return newIndex;
        });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            moveSlide(1);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="slider" style={{maxWidth: `${width}`,margin:`${margin}`}}>
            <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {images.map((image, index) => (
                    <div className="slide" key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
            {showButtons  && (
                <button className="prev" onClick={() => moveSlide(-1)}>&#10094;</button>
            )}
            {showButtons  && (
                <button className="next" onClick={() => moveSlide(1)}>&#10095;</button>
            )}
        </div>
    );
};

export default ImageSlider;
