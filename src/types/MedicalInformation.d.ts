export type MedicalInformation = {
    bloodType?: 'A' | 'B' | 'AB' | 'O';
    bloodRH?: '+' | '-';
    allergies?: string;
    medications?: string;
    medicalHistory?: string;
    surgeries?: string;
    notes?: string;
}