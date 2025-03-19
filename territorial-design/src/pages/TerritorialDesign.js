
import React, { useState, useEffect} from "react";
import "./TerritorialDesign.css";
import { useNavigate } from "react-router-dom";

function TerritorialDesign() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Array of fake image URLs (using Lorem Picsum for placeholder images)
    const images = [
        "/PrimaryBathroom.jpg",
        "/PrimaryBedroomA.jpg",
        "/GuestBedroomB.jpg",
        "/GuestBedroomA.jpg",
        "/GuestBathroom.jpg",
    ];

    // Auto-slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 3000); // Change slide every 3 seconds

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, [images.length]);

    // Handle manual navigation
    const goToSlide = (index) => {
        setCurrentSlide(index);
    };
    const navigate = useNavigate();
    const Privacy = () => navigate("/Privacy");

    return (
        <div className="container">
            <div className="text-section">
                <h1>Welcome to TerritorialDesign.com</h1>
                <p>
                    Welcome to TerritorialDesign.com, a website dedicated to inspiring and reviving the cultural architectural design of Native Spanish and early Southwestern American settler communities. The Southwest style draws its roots from Spanish colonial architecture that emerged after the Spanish arrived in the 16th century. This style is characterized by thick adobe walls, flat roofs, and construction techniques that provide insulation against both heat and cold. Native Pueblo and Navajo influences contributed vibrant colors and handcrafted pottery and baskets, adding unique cultural touches to the design.
                </p>
            </div>
            <div className="image-section">
                <div className="slideshow">
                    <img
                        src={images[currentSlide]}
                        alt={`Southwest Design ${currentSlide + 1}`}
                        className="slideshow-image"
                    />
                    <div className="dots">
                        {images.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${index === currentSlide ? "active" : ""}`}
                                onClick={() => goToSlide(index)}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
            <button onClick={Privacy}>click</button>
        </div>
    );
}

export default TerritorialDesign;
