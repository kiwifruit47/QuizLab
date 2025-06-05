import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return(
        <>
            <hr />
            <div className='footer_container'>
                <span>© 2025</span>
                <div>
                    <Link to='/'>Home</Link>
                    <Link to='/faqs'>FAQs</Link>
                    <Link to='/about'>About</Link>
                </div>
            </div>
        </>
    );
}
export default Footer;