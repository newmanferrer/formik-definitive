import { Formik } from 'formik';
import { formLoginInitialValues } from './formLoginInitialValues';
import { formLoginValidationSchema } from '../../schemas';
import { FormikFormStyled } from './StyledComponents';
import { FormTitle, FormInput, FormButton } from '../';

export const FormLogin = () => {
 return (
  <Formik
   initialValues={formLoginInitialValues}
   validationSchema={formLoginValidationSchema}
   onSubmit={(values, { setSubmitting, resetForm }) => {
    alert(JSON.stringify(values, null, 1));
    resetForm();
    setSubmitting(true);

    setTimeout(() => {
     setSubmitting(false);
    }, 5000);
   }}>
   {({ handleSubmit, isValid }) => (
    <FormikFormStyled onSubmit={handleSubmit}>
     <FormTitle title="Login" />

     <FormInput
      label="User Name"
      type="text"
      id="userName"
      name="userName"
      autoComplete="off"
      placeholder="jhon.doe"
     />

     <FormInput
      label="Password"
      type="password"
      id="password"
      name="password"
      autoComplete="off"
      placeholder="enter your password"
     />

     <FormButton type="submit" disabled={!isValid} title="SEND" width="50%" />
    </FormikFormStyled>
   )}
  </Formik>
 );
};
