export type MedicalInformation = {
    weight?: number
    height?: number
    bloodType?: 'A' | 'B' | 'AB' | 'O';
    bloodRH?: '+' | '-';
    allergies?: string;
    medications?: string;
    medicalHistory?: string;
    notes?: string;
}