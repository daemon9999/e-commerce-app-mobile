import Yup from "./validate";

const passwordError = "Please enter valid password"
export const registerSchema = Yup.object().shape({
    fullName: Yup.string().required(/(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/, "Please enter valid full name"),
    email: Yup.string().required('Please enter your email').email("Please enter valid email"),
    password: Yup.string().required(passwordError).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/, passwordError) 
}) 