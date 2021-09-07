import { Wrapper, Button } from './StyledComponents';

export const FormButton = ({ title, width, ...props }) => {
 return (
  <Wrapper occupytwocolumns={props.occupytwocolumns}>
   <Button width={width} {...props}>
    {title}
   </Button>
  </Wrapper>
 );
};
