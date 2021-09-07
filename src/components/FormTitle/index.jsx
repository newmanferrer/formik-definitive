import { TitleWrapper, Title } from './StyledComponents';

export const FormTitle = ({ title, occupytwocolumns }) => {
 return (
  <TitleWrapper occupytwocolumns={occupytwocolumns}>
   <Title>{title}</Title>
  </TitleWrapper>
 );
};
