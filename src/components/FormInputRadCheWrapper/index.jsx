import { useField } from 'formik';
import { InputRadCheTitle, InputRadCheWrapper, FormikErrorMessageStyled } from './StyledComponents';

export const FormInputRadCheWrapper = ({ id, name, title, border, occupytwocolumns, children }) => {
 const array = useField(name);
 const meta = array[1];
 let error;

 if (meta.touched && meta.error) {
  error = meta.error;
 }

 return (
  <>
   <InputRadCheTitle htmlFor={id} error={error} occupytwocolumns={occupytwocolumns}>
    {title}
   </InputRadCheTitle>
   <InputRadCheWrapper border={border} occupytwocolumns={occupytwocolumns}>
    {children}
   </InputRadCheWrapper>
   <FormikErrorMessageStyled name={name} component="div" />
  </>
 );
};
