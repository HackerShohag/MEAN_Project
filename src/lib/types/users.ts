export interface User {
    id: string;
    token: string;
    role: string;
}

export interface T_Admin extends User {
    admin_name: string;
    admin_email: string;
}