import './Card.scss'
import logo from '../../logo.svg';

const Card = () => {
    return (
        <div className="card-fragment">
             <img src={logo} className="App-logo" alt="logo" />
        <p>
          Emergency Card. Work In Progress. Contact me if you are interested by this project.
        </p>
        </div>
    )
}

export default Card
