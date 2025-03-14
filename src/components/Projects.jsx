import '../styles/Projects.css';
import reactLogo from '../assets/react.svg';
import javascriptLogo from '../assets/javascript.svg';
import firebaseLogo from '../assets/firebase.svg';
import stripeLogo from '../assets/stripe.svg';
function Projects(){
    return(
        <div className="container d-flex flex-column mx-auto align-items-center justify-content-center gap-4 mt-2">
            <a href='https://clone-c2959.web.app/' className="card bg-black text-white box-shadow p-3 w-75 pointer rounded" style={{ border: '1px solid #fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
                <h4>amazon-clone</h4>
                <div className="details mt-2">
                    <h5><b>Technologies:</b></h5>
                    <a href="https://react.dev/" target="_blank" title='React' rel="noopener noreferrer">
                    <img src={reactLogo} alt="React Logo" className="tech-icon" />
                    </a>
                    <a href="http://" target="_blank" title='Javascript' rel="noopener noreferrer">
                    <img src={javascriptLogo} alt="JavaScript Logo" className="tech-icon" />
                    </a>
                    <a href="https://firebase.google.com/" title='Firebase' target="_blank" rel="noopener noreferrer">
                    <img src={firebaseLogo} alt="Firebase Logo" className="tech-icon" />
                    </a>
                    <a href="https://stripe.com/en-ca" title='Stripe' target="_blank" rel="noopener noreferrer">
                    <img src={stripeLogo} alt="Stripe Logo" className="tech-icon" />
                    </a>
                </div>
                <ul className='list mt-3'>
                    <li>Integrated Stripe API for secure payment processing, Firebase functions for user authentication, and database.</li>
                    <li>A fully functional e-commerce website that has features like user accounts, simulating the whole shopping experience with checkout via stripe payments API.</li>
                </ul>
            </a>
            
        </div>
    )
}

export default Projects