import { Label, FormikFieldStyled, Figure } from './StyledComponents';

export const FormInputRadChe = (props) => {
 return (
  <Label htmlFor={props.id}>
   {props.label}
   <FormikFieldStyled {...props} />
   <Figure figuretype={props.type ? props.type : 'radio'} />
  </Label>
 );
};
