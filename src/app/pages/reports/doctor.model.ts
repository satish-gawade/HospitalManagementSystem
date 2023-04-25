export interface Doctor {
    id?: number;
    name: string;
    gender: string;
    dateOfBirth: Date | null;
    phoneNumber: number | null;
    address: string;
    specialization: string;
    fees: number | null;
  }