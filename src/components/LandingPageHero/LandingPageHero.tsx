import './LandingPageHero.css';
import QuestionMark from '../../assets/vecteezy_3d-purple-and-asking-question-mark-icon-for-ui-ux-web-mobile_28754699.png';

function LandingPageHero() {
    return (
        <>
            <div className='flex_container'>
                <div className='headings'>
                    <h1>Test your knowledge</h1>
                    <p>Get ready to test your knowledge and challenge your brain with QuizLab, the ultimate quiz app designed for curious minds! QuizLab is your go-to destination for engaging and fun quizzes on a vast array of topics. Whether you're a trivia buff or just someone who loves learning something new every day, QuizLab has something for everyone.</p>
                </div>
                    <img id='landing_page_question_img' src={QuestionMark} alt="question mark image" />
            </div>
            
        </>
    );
}

export default LandingPageHero;