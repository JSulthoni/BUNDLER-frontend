import React from 'react';
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import InterestsIcon from '@mui/icons-material/Interests';
import './Contacts.scss';

const Contacts = () => {
    return (
        <div className='contacts' id='contacts'>
            <div className='wrapper'>
                <span>FALL IN LOVE WITH <b>SVANE</b></span>
                <form action='javascript:void(0)' className='mail'>
                    <input type='email' placeholder='example@email.com' />
                    <button>SUBSCRIBE</button>
                </form>
                <div className='icons'>
                    <InstagramIcon />
                    <TwitterIcon />
                    <GoogleIcon />
                    <InterestsIcon />
                </div>
            </div>
        </div>
    )
};

export default Contacts;
