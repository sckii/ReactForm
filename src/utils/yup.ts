import * as yup from 'yup';

const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required(),
  lastName: yup 
    .string()
    .required(),
  age: yup 
    .string()
    .required(),
  schooling: yup
    .string()
    .required(),
  skills: yup
    .string()
    .required()
})

export { registerSchema }