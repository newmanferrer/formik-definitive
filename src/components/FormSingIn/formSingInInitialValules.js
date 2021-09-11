import { normalizeDateFormat } from '../../helpers';

export const formSingInInitialValues = {
 createdOn: normalizeDateFormat(),
 firstName: '',
 lastName: '',
 dateOfBirth: '',
 age: 18,
 email: '',
 confirmEmail: '',
 password: '',
 confirmPassword: '',
 language: '',
 databases: [],
 frameworkJavaScript: '',
 css: false,
 sass: false,
 styledComponents: false,
 favoriteColor: '#000000',
 comments: '',
 terms: false
};
