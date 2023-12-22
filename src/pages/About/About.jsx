import React, { useEffect } from 'react';
import icon from '../../favicon.png'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountBoxSharpIcon from '@mui/icons-material/AccountBoxSharp';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import LightModeIcon from '@mui/icons-material/LightMode';
import './About.scss'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_BAG } from '../../utils/makeBagThunk';

const About = () => {
    const { user } = useSelector((state) => state.authentication);
    const { cart, wishlist } = useSelector(((state) => state.bag));
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('UPDATE BAG USEEFFECT CALLED')
        if (user) {
            dispatch(UPDATE_BAG({ cart, wishlist }))
        }
    }, []) // CHECKPOINT

    return (
        <section className='about'>
            <div className='about-wrapper'>
                <div className='about-title'>
                    <img src={icon} alt='icon' />
                </div>
                <article className='about-par'>
                    <p>
                        <span className='logo'>SVANE</span> 
                        began in 2023 as a portofolio project. The initial goal was to create Fullstack M.E.R.N online shop application designed for ease-of-use and high responsiveness, ensuring website's UI and functionality to various screen sizes.
                    </p>
                </article>
                <article className='about-par'>
                    <p>Here are quick guidelines about <span className='logo'>SVANE</span> :</p>
                    <ul>
                        <li><b>SVANE</b> is intended as an online shop for fashion products.</li>
                        <li>User can create account and sign by clicking<span><AccountBoxSharpIcon/></span>in to gain access to cart and checkout.</li>
                        <li><b>SVANE</b> uses Redux to simulate user wishlist<span><FavoriteBorderOutlinedIcon/></span>and cart <span><ShoppingCartOutlinedIcon/></span>.</li>
                        <li>User can search for product by clicking<span><SearchOutlinedIcon/></span> or go to Discover page.</li>
                        <li>User can close search, wishlist, and cart panel by double-clicking outside.</li>
                        <li>User can switch between daymode and nightmode by toggling between <span><BedtimeIcon/></span>and <span><LightModeIcon/></span>.</li>
                        <li>User make checkout session by clicking <span><LocalMallIcon /></span>or<b> PROCEED TO CHECKOUT</b>. Checkout session is provided by Stripe.</li>
                        <li>For checkout session, please enter <b>4242 4242 4242 4242</b> for Card Information, <b>04/02</b> for Card Expiry Date, and <b>424</b> for CVC as of Stripe test session. Any other information can be filled as wished.</li>
                    </ul>
                </article>
                <div className='about-button'>
                    <button><a href='https://github.com/JSulthoni' target='_blank'>Author's Profile</a></button>
                    <button><a href='https://github.com/JSulthoni/SVANE-frontend' target='_blank'>Github Code</a></button>
                </div>
            </div>
        </section>
    );
}

export default About;
