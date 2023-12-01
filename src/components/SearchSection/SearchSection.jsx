import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './SearchSection.scss';

const images = [
	'https://images.pexels.com/photos/5699177/pexels-photo-5699177.jpeg?auto=compress&cs=tinysrgb&w=1600&dpr=1',
	'https://images.pexels.com/photos/5710137/pexels-photo-5710137.jpeg?auto=compress&cs=tinysrgb&w=1600&dpr=1',
	'https://images.pexels.com/photos/6069546/pexels-photo-6069546.jpeg?auto=compress&cs=tinysrgb&w=1600&dpr=1',
	'https://images.pexels.com/photos/373289/pexels-photo-373289.jpeg?auto=compress&cs=tinysrgb&w=1600&dpr=1',
	'https://images.pexels.com/photos/5705102/pexels-photo-5705102.jpeg?auto=compress&cs=tinysrgb&w=1600&dpr=1'
];

const SearchSection = () => {
    const [searchQuery, setSearchQuery] = useState(undefined);
    const [currentSlide, setCurrentSlide] = useState(0);
    const nightmode = useSelector((state) => state.navigation.nightmode);
    const navigate = useNavigate();

    // Navigate user to search page after submittin input
    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (typeof searchQuery !== 'string') {
            return;
        }

        const encodedSearch = encodeURI(searchQuery);
        navigate(`/search?search=${encodedSearch}`);
    };

    	// Function to slide the images
	const prevSlide = () => {
		setCurrentSlide(currentSlide === 0 ? 4 : (prev) => prev - 1);
	};
	const nextSlide = () => {
		setCurrentSlide(currentSlide === 4 ? 0 : (prev) => prev + 1);
	};

    return (
        <div className='search-section'>
                <div className='top'>
                    <h2>Discover Your Style, Effortlessly.</h2>
                    <p>Embark on a journey of style exploration with our powerful search feature. Find the latest fashion trends, timeless classics, and everything in between. Your perfect look is just a search away. Unleash the possibilities, and let your unique style shine through effortlessly. Start your fashion adventure now.</p>
                </div>
                <div className='bottom'>
                    <form autoComplete='off' onSubmit={handleSubmit}>
                        <label htmlFor='search'>Your fashion dream:</label>
                        <input 
                            style={{'backgroundColor' : !nightmode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'}}
                            id='search'
                            name='search'
                            type='text' 
                            defaultValue={searchQuery}
                            placeholder='e.g: Shirt'
                            onChange={(event) => setSearchQuery(event.target.value)}    
                            />
                    </form>
                </div>
                <div className='search-container' style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                    <img src={images[0]} alt='slider0' />
                    <img src={images[1]} alt='slider1' />
                    <img src={images[2]} alt='slider2' />
                    <img src={images[3]} alt='slider3' />
                    <img src={images[4]} alt='slider4' />
                </div>
                <div className='search-buttons'>
                    <div aria-label='prev-image' className='search-button' onClick={prevSlide} style={{'backgroundColor' : !nightmode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)'}}>
                        <KeyboardArrowLeftIcon />
                    </div>
                    <div aria-label='next-image' className='search-button' onClick={nextSlide} style={{'backgroundColor' : !nightmode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)'}}>
                        <KeyboardArrowRightIcon />
                    </div>
                </div>
        </div>
    );
}

export default SearchSection;