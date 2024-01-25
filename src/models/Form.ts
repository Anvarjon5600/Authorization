// Form validator model with npm yup package 
import { object,string,ref } from 'yup';

export const authFormSchema = object({
    email: string().email("Please provide a valid email address").required("email address is required"),
    password: string().min(6, " Password should be minimum length of 6").max(12, "Maximum allowed input for password is 12").required("Password is required"),
    confirmPassword: string().oneOf([ref("password")], "Password dont't match").required("Confirmed Password is required")
});

export interface AuthForm{
    email:string;
    password:string;
    confirmPassword:string;
}