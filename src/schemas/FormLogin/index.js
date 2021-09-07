import * as Yup from 'yup';
import { REGEXP } from '../../regexp';

export const formLoginValidationSchema = Yup.object().shape({
 userName: Yup.string()
  .matches(REGEXP.userName, 'lowercase 1-15 dot lowercase 1-15')
  .required('user name is required'),
 password: Yup.string()
  .matches(REGEXP.atLeastOneLowerCase, 'at least one lowercase letter is required')
  .matches(REGEXP.atLeastOneUpperCase, 'at least one uppercase letter is required')
  .matches(REGEXP.atLeastOneNumber, 'at least one number is required')
  .matches(REGEXP.alLeastOneSpecialCharacter, 'at least one special character is required')
  .min(8, 'minimum 8 characters')
  .max(12, 'maximum 12 characters')
  .matches(REGEXP.password, 'password invalid')
  .required('password is required')
});
