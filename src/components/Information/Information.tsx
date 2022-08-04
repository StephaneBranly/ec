import './Information.scss'
import logo from '../../logo.svg';
import { Information as InformationType } from '../../types';
import { isEmpty, has } from 'lodash';
import Section from '../Section/Section';
import Identity from '../Identity/Identity';
import MedicalInformation from '../MedicalInformation/MedicalInformation';

export interface InformationProps {
    information: InformationType
}
const Information = (props: InformationProps) => {
    const { information } = props;

    const displayInformation = () => {
        const hasIdentity = has(information, 'individu.identity')
        const hasMedicalInformation = has(information, 'individu.medicalInformation')
        if(hasIdentity || hasMedicalInformation) {
            return <>
            {hasIdentity && <Section title='Identity'>
               <Identity identity={information.individu!.identity!} />
            </Section>}
            {hasMedicalInformation && <Section title='Medical Information'>
               <MedicalInformation medicalInformation={information.individu!.medicalInformation!} />
            </Section>}
            </>
        }
        return <div>Empty Emergency Card. If it's an emergency, don't waste your time and find an other solution to identify the victim.</div>
    }

    return (
        <section className="information-fragment">
            { isEmpty(information) ? <><img src={logo} className="App-logo" alt="logo" />
            <p>
                Emergency Card. Work In Progress. Contact me if you are interested by this project.
            </p></>  : displayInformation() }
           
        </section>
    )
}

export default Information
