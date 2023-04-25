export interface Patient {
  id?: number;
  name: string;
  gender: string;
  dateOfBirth: Date | null;
  phoneNumber: number | null;
  address: string;
 
}