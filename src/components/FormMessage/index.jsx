import { Wrapper, Message } from './StyledComponents';

export const FormMessage = ({ messagetype, message, occupytwocolumns }) => {
 return (
  <Wrapper messagetype={messagetype} occupytwocolumns={occupytwocolumns}>
   <Message messagetype={messagetype}>{message}</Message>
  </Wrapper>
 );
};
