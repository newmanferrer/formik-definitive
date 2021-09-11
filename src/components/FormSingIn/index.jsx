import { Formik } from 'formik';
import { formSingInInitialValues } from './formSingInInitialValules';
import { formSingInValidationSchema } from '../../schemas';
import { FormikFormStyled } from './StyledComponents';
import {
 FormTitle,
 FormInput,
 FormInputRadCheWrapper,
 FormInputRadChe,
 FormMessage,
 FormButton
} from '../';

export const FormSingIn = () => {
 return (
  <Formik
   initialValues={formSingInInitialValues}
   validationSchema={formSingInValidationSchema}
   onSubmit={(values, { setSubmitting, resetForm }) => {
    alert(JSON.stringify(values, null, 1));
    resetForm();
    setSubmitting(true);

    setTimeout(() => {
     setSubmitting(false);
    }, 5000);
   }}>
   {({ handleSubmit, isSubmitting, isValid }) => (
    <FormikFormStyled onSubmit={handleSubmit}>
     <FormTitle title="SingIn" occupytwocolumns="true" />

     <FormInput
      label="Created on"
      type="date"
      id="createdOn"
      name="createdOn"
      readOnly
      title="read only"
      occupytwocolumns="true"
     />

     <FormInput
      label="Firs Name"
      type="text"
      id="firstName"
      name="firstName"
      autoComplete="off"
      placeholder="jhon"
     />

     <FormInput
      label="Last Name"
      type="text"
      id="lastName"
      name="lastName"
      autoComplete="off"
      placeholder="doe"
     />

     <FormInput label="Date of birth" type="date" id="dateOfBirth" name="dateOfBirth" />

     <FormInput label="Age" type="number" id="age" name="age" min="18" max="90" />

     <FormInput
      label="Email"
      type="email"
      id="email"
      name="email"
      autoComplete="off"
      placeholder="email@email.com"
     />

     <FormInput
      label="Confirm Email"
      type="email"
      id="confirmEmail"
      name="confirmEmail"
      autoComplete="off"
      placeholder="email@email.com"
     />

     <FormInput
      label="Password"
      type="password"
      id="password"
      name="password"
      autoComplete="off"
      placeholder="enter your password"
     />

     <FormInput
      label="Confirm Password"
      type="password"
      id="confirmPassword"
      name="confirmPassword"
      autoComplete="off"
      placeholder="confirm your password"
     />

     <FormInput
      label="Select the best frontend language"
      as="select"
      id="language"
      name="language"
      occupytwocolumns>
      <option value="">-- select --</option>
      <option value="html">HTML</option>
      <option value="css">CSS</option>
      <option value="javascript">JavaScript</option>
      <option value="typescript">TypeScript</option>
     </FormInput>

     <FormInput
      label="Select the databases you know"
      as="select"
      multiple
      id="databases"
      name="databases"
      occupytwocolumns>
      <option value="sql">SQL</option>
      <option value="mysql">MySql</option>
      <option value="mongo">Mongo</option>
      <option value="postgres">Postgres</option>
     </FormInput>

     <FormInputRadCheWrapper
      id="react"
      name="frameworkJavaScript"
      title="Select the best framework JavaScript"
      border
      occupytwocolumns>
      <FormInputRadChe
       label="React"
       type="radio"
       id="react"
       name="frameworkJavaScript"
       value="react"
      />
      <FormInputRadChe label="Vue" type="radio" id="vue" name="frameworkJavaScript" value="vue" />
      <FormInputRadChe
       label="Angular"
       type="radio"
       id="angular"
       name="frameworkJavaScript"
       value="angular"
      />
     </FormInputRadCheWrapper>

     <FormInputRadCheWrapper
      id="css"
      name="frameworkCss"
      title="Select the css frameworks you use"
      border
      occupytwocolumns>
      <FormInputRadChe label="Css" type="checkbox" id="css" name="css" />
      <FormInputRadChe label="Sass" type="checkbox" id="sass" name="sass" />
      <FormInputRadChe
       label="Styled Com"
       type="checkbox"
       id="styledComponents"
       name="styledComponents"
      />
     </FormInputRadCheWrapper>

     <FormInput
      label="Your favorite color"
      type="color"
      id="favoriteColor"
      name="favoriteColor"
      occupytwocolumns="true"
     />

     <FormInput
      label="Comments"
      as="textarea"
      id="comments"
      name="comments"
      autoComplete="off"
      placeholder="your comments"
      occupytwocolumns
     />

     <FormInputRadCheWrapper
      id="terms"
      name="terms"
      title="Terms and conditions"
      border
      occupytwocolumns>
      <FormInputRadChe
       label="I accept the terms and conditions"
       type="checkbox"
       id="terms"
       name="terms"
      />
     </FormInputRadCheWrapper>

     {isSubmitting && (
      <FormMessage messagetype="success" message="Form sent successfully" occupytwocolumns />
     )}

     <FormButton
      type="submit"
      name="formbutton"
      disabled={!isValid}
      title="SEND"
      width="50%"
      occupytwocolumns
     />
    </FormikFormStyled>
   )}
  </Formik>
 );
};
