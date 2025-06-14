import './ErrorRoute.css';
import { Link } from 'react-router-dom';

export const ErrorRoute = () => {
  return (
    <div className='error_container'>
        <h1>Oops...the page you're looking for doesn't seem to exist</h1>
        <img id='img404' src="src/assets/404-error.png" alt="404 error image" />
        <Link to='/quiz-lab/' className='back_link'>Click here to go back to home page</Link>
    </div>
  )
}
