import { User } from "./";

export interface T_Teacher extends User {
    id: string;
    teacher_name: string;
    teacher_email: string;
    teacher_dept: string;
}