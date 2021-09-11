import * as yup from 'yup';
import { REGEXP } from '../../regexp';
import { listOfEmailAddressTaken } from '../../listOfEmailAddressTaken';
import { listOfLanguages } from '../../listOfLanguages';
import { listOfDatabases } from '../../listOfDatabases';
import { listOfFrameworksJavaScript } from '../../listOfFrameworksJavaScript';

export const formSingInValidationSchema = yup.object().shape({
 createdOn: yup.date().required('created on is a required field'),
 firstName: yup
  .string()
  .trim()
  .lowercase()
  .min(2, 'minimum two characters')
  .max(15, 'maximum fifteen characters')
  .matches(REGEXP.onlyLetters, 'only lowercase and uppercase letters with no blanks')
  .matches(REGEXP.firstName, 'first name invalid')
  .required('first name is a required field'),
 lastName: yup
  .string()
  .trim()
  .lowercase()
  .min(2, 'minimum two characters')
  .max(20, 'maximum twenty characters')
  .matches(REGEXP.onlyLetters, 'only lowercase and uppercase letters with no blanks')
  .matches(REGEXP.lastName, 'last name invalid')
  .required('last name is a required field'),
 dateOfBirth: yup
  .date()
  .min('2021-08-01', 'must be later than 2021-08-01')
  .max(new Date(), 'max day today')
  .required('date of birth is a required field'),
 age: yup
  .number()
  .truncate()
  .integer('age must be integer')
  .positive('age must be positive')
  .min(18, 'min age 18')
  .max(90, 'max age 90')
  .required('age is a required field'),
 email: yup
  .string()
  .trim()
  .lowercase()
  .notOneOf(listOfEmailAddressTaken, 'this email address was taken')
  .email('email address is invalid')
  .required('email address is a required field'),
 confirmEmail: yup
  .string()
  .oneOf([yup.ref('email')], 'email and confirm email must be the same')
  .required('confirm email address is a required field'),
 password: yup
  .string()
  .trim()
  .matches(REGEXP.atLeastOneLowerCase, 'at least one lowercase letter is required')
  .matches(REGEXP.atLeastOneUpperCase, 'at least one uppercase letter is required')
  .matches(REGEXP.atLeastOneNumber, 'at least one number is required')
  .matches(REGEXP.alLeastOneSpecialCharacter, 'at least one special character is required')
  .min(8, 'minimum 8 characters')
  .max(12, 'maximum 12 characters')
  .matches(REGEXP.password, 'password invalid')
  .required('password is a required field'),
 confirmPassword: yup
  .string()
  .oneOf([yup.ref('password')], 'password and confirm password must be the same')
  .required('confirm password is a required field'),
 language: yup
  .string()
  .trim()
  .oneOf(listOfLanguages, `valid values: ${listOfLanguages}`)
  .required('one lenguage is a required field'),
 databases: yup
  .array()
  .of(yup.string().oneOf(listOfDatabases, `valid values: ${listOfDatabases}`))
  .min(1, 'minimum one database')
  .max(4, 'maximum four database')
  .required('at least one database is required'),
 frameworkJavaScript: yup
  .string()
  .oneOf(listOfFrameworksJavaScript, `valid values: ${listOfFrameworksJavaScript}`)
  .required('one framework is required'),
 css: yup.boolean().oneOf([true, false], 'only true or false is valid'),
 sass: yup.boolean().oneOf([true, false], 'only true or false is valid'),
 styledComponents: yup.boolean().oneOf([true, false], 'only true or false is valid'),
 comments: yup.string().trim().max(255, 'maximum 255 characters'),
 terms: yup.boolean().required('terms and conditions is required')
});

/* const schema = yup.object().shape({
 createdOn: yup.date().required()
});

schema
 .validate({
  createdOn: new Date()
 })
 .then((result) => console.log(result))
 .catch((error) => console.log(error)); */
