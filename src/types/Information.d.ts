import { Individu } from "./Individu"
import { EmergencyContact } from "./EmergencyContact"

export type Information = {
    individu?: Individu;
    emergencyContacts?: EmergencyContact[]
}