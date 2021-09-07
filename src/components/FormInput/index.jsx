import { useField } from 'formik';
import { Wrapper, Label, FormikFieldStyled, FormikErrorMessageStyled } from './StyledComponents';

export const FormInput = (props) => {
 const [field, meta] = useField(props.name);
 let error;

 if (meta.touched && meta.error) {
  error = meta.error;
 }

 return (
  <Wrapper occupytwocolumns={props.occupytwocolumns}>
   <Label htmlFor={props.id} error={error}>
    {props.label}
   </Label>
   <FormikFieldStyled error={error} {...field} {...props} />
   <FormikErrorMessageStyled name={props.name} component="div" />
  </Wrapper>
 );
};
