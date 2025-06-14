import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return(
        <>
            <hr />
            <div className='footer_container'>
                <span>© 2025</span>
                <div>
                    <Link to='/quiz-lab/'>Home</Link>
                    <Link to='/quiz-lab/faqs'>FAQs</Link>
                </div>
            </div>
        </>
    );
}
export default Footer;