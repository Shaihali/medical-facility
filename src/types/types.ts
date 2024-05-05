export interface Employee {
  id: number;
  first_name: string;
  last_name: string;
  patronymic: string;
  job_title: string;
  department: string;
}

export interface Doctor extends Employee { }
export interface Nurse extends Employee { }
