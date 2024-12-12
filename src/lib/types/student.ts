import { User } from "./";

export interface T_Student extends User {
    id: string;
    name: string;
    student_roll: string;
}