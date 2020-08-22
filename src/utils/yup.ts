import * as yup from 'yup';

const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required(),
  lastName: yup 
    .string()
    .required(),
  age: yup 
    .number()
    .required(),
  schooling: yup
    .string()
    .required(),
})

export { registerSchema }