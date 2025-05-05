
import './home.css';
import { Link } from 'react-router-dom';
function Cards(props) {
    return (
        <div className="props-card a">
            <div className="card-header">
                <h3 className="job-title">{props.title}</h3>
                <p className="company">{props.company}</p>
                <span className="tag">{props.timeLine || 'props'}</span>
            </div>
            <p className="location">📍{props.location}</p>
            <p className="target-className">👨‍🎓 {props.targetclassName}</p>
            <p className="educationRequirement">{props.educationRequirement}</p>

            <Link to={props.applyUrl} target='_blank'>
            <a className="apply-button">Apply Now</a></Link>
        </div>
    );
}

export default Cards;