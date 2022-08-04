import React from 'react';
import { MedicalInformation as MedicalInformationType } from '../../types';
import { has } from 'lodash';

export interface MedicalInformationProps {
  medicalInformation: MedicalInformationType
}

const MedicalInformation = (props: MedicalInformationProps) => {
    const { medicalInformation } = props;

    const displayMesures = () => {
        const hasWeight = has(medicalInformation, 'weight')
        const hasHeight = has(medicalInformation, 'height')

        if(hasWeight || hasHeight) {
            return <div>
                {hasHeight && medicalInformation.height}
                {hasWeight && medicalInformation.weight}
            </div>
        }
    }

    const displayBlood = () => {
        const hasRH= has(medicalInformation, 'bloodRH')
        const hasType = has(medicalInformation, 'bloodType')
        if(hasRH || hasType) {
            return <div>
                {hasType && medicalInformation.bloodType}
                {hasRH && medicalInformation.bloodRH}
            </div>
        }
    }

    const displayAllergies = () => {
        if(has(medicalInformation, 'allergies')) {
            return <div>
                {medicalInformation.allergies}
            </div>
        }
    }

    const displayMedications = () => {
        if(has(medicalInformation, 'medications')) {
            return <div>
                {medicalInformation.medications}
            </div>
        }
    }

    const displayMedicalHistory = () => {
        if(has(medicalInformation, 'medicalHistory')) {
            return <div>
                {medicalInformation.medicalHistory}
            </div>
        }
    }

    const displayNotes = () => {
        if(has(medicalInformation, 'notes')) {
            return <div>
                {medicalInformation.notes}
            </div>
        }
    }
    return (
        <>
          {displayMesures()}
          {displayBlood()}
          {displayAllergies()}
          {displayMedications()}
          {displayMedicalHistory()}
          {displayNotes()}
        </>
    )
}

export default MedicalInformation
