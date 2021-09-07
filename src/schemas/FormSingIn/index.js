import * as Yup from 'yup';
import { REGEXP } from '../../regexp';
import { listOfEmailAddressTaken } from '../../listOfEmailAddressTaken';
import { listOfLenguages } from '../../listOfLenguages';

export const formSingInValidationSchema = Yup.object().shape({
 firstName: Yup.string()
  .min(2, 'minimum two characters')
  .max(15, 'maximum fifteen characters')
  .matches(REGEXP.onlyLetters, 'only lowercase and uppercase letters with no blanks')
  .matches(REGEXP.firstName, 'first name invalid')
  .required('first name is required'),
 lastName: Yup.string()
  .min(2, 'minimum two characters')
  .max(20, 'maximum twenty characters')
  .matches(REGEXP.onlyLetters, 'only lowercase and uppercase letters with no blanks')
  .matches(REGEXP.lastName, 'last name invalid')
  .required('last name is required'),
 dateOfBirth: Yup.string().required('date of birth is required'),
 email: Yup.string()
  .lowercase()
  .notOneOf(listOfEmailAddressTaken, 'this email address was taken')
  .email('email address is invalid')
  .required('email address is required'),
 confirmEmail: Yup.string()
  .oneOf([Yup.ref('email')], 'email and confirm email must be the same')
  .required('confirm email address is required'),
 password: Yup.string()
  .matches(REGEXP.atLeastOneLowerCase, 'at least one lowercase letter is required')
  .matches(REGEXP.atLeastOneUpperCase, 'at least one uppercase letter is required')
  .matches(REGEXP.atLeastOneNumber, 'at least one number is required')
  .matches(REGEXP.alLeastOneSpecialCharacter, 'at least one special character is required')
  .min(8, 'minimum 8 characters')
  .max(12, 'maximum 12 characters')
  .matches(REGEXP.password, 'password invalid')
  .required('password is required'),
 confirmPassword: Yup.string()
  .oneOf([Yup.ref('password')], 'password and confirm password must be the same')
  .required('confirm password is required'),
 language: Yup.string()
  .oneOf(listOfLenguages, 'your selection does not exist in the valid options')
  .required('one lenguage is required'),
 databases: Yup.array()
  .min(1, 'minimum one database')
  .max(4, 'maximum four database')
  .required('at least one database is required'),
 framework: Yup.string().required('one framework is required'),
 comments: Yup.string().max(255, 'maximum 255 characters'),
 terms: Yup.boolean().required('terms and conditions is required')
});
