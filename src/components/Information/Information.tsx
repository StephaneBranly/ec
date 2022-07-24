import './Information.scss'
import logo from '../../logo.svg';
import { Information as InformationType } from '../../types';

export interface InformationProps {
    information: InformationType
}
const Information = (props: InformationProps) => {
    const { information } = props;
    
    return (
        <div className="Information-fragment">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Emergency Card. Work In Progress. Contact me if you are interested by this project.
            </p>
        </div>
    )
}

export default Information
