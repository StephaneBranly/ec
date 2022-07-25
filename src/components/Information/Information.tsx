import './Information.scss'
import logo from '../../logo.svg';
import { Information as InformationType } from '../../types';
import { isEmpty, has } from 'lodash';
import Moment from 'moment';
import Flag from 'react-world-flags'
import iso3311a2 from 'iso-3166-1-alpha-2'

export interface InformationProps {
    information: InformationType
}
const Information = (props: InformationProps) => {
    const { information } = props;

    const displayInformation = () => {
        if(has(information, 'individu.identity')) {
            return <div className='information-identity'>
                {displayName()}
                {displayDateOfBirth()}
                {displayAddress()}
                {displayNationality()}
            </div>
        }
        return <div>Empty Emergency Card. If it's an emergency, don't waste your time and find an other solution to identify the victim.</div>
    }

    const displayName = () => {
        return <div>{`${information.individu?.identity?.lastName || ''} ${information.individu?.identity?.firstName || ''}`}</div>;
    }
    const displayAddress = () => {
        return  <div>{`${information.individu?.identity?.address || ''}`}</div>;
    }
    const displayNationality = () => {
        const code = information.individu?.identity?.nationality
        const country = iso3311a2.getCountry(code)
        return  <div><Flag code={code} height="16" />{country}</div>
    }
    const displayDateOfBirth = () => {
        if(has(information, 'individu.identity.dateOfBirth'))
        {
            const timeDiff = Math.abs(Date.now() - information.individu!.identity!.dateOfBirth!.getTime());
            const age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
            const moment = Moment(information.individu!.identity!.dateOfBirth!);
            return  <div>{`${`${moment.format('MMM Do YYYY')} (${age} years old)`}`}</div>;
        }
        return ''
    }

    return (
        <div className="Information-fragment">
            { isEmpty(information) ? <><img src={logo} className="App-logo" alt="logo" />
            <p>
                Emergency Card. Work In Progress. Contact me if you are interested by this project.
            </p></>  : displayInformation() }
           
        </div>
    )
}

export default Information
