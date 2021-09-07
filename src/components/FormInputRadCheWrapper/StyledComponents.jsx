//* ///////////////////////////////////////////////////////////////////////////
//* FormInputRadCheWrapper
//* ///////////////////////////////////////////////////////////////////////////
//* ===========================================================================
//* 1.- Imports
//* ===========================================================================
import styled from 'styled-components';
import { COLORS } from '../../colors';
import { ErrorMessage } from 'formik';
//* ===========================================================================

//* ===========================================================================
//* 2.- Reusable Components
//* ===========================================================================
//* 2.1.- Container
//* ---------------------------------------------------------------------------
const Container = styled.div`
 display: flex;
 flex-direction: column;
 flex-wrap: nowrap;
 justify-content: center;
 align-items: center;
`;
//* ---------------------------------------------------------------------------
//* ===========================================================================

//* ===========================================================================
//* 3.- Used components
//* ===========================================================================
//* ---------------------------------------------------------------------------
//* 3.2.- InputRadCheTitle
//* ---------------------------------------------------------------------------
const InputRadCheTitle = styled.label`
 width: 100%;
 margin-bottom: 0.2rem;

 text-align: left;
 font-family: Arial, Helvetica, sans-serif;
 font-size: 1.2rem;
 color: ${({ error }) => (error ? `${COLORS.error}` : `${COLORS.white}`)};

 &:hover {
  cursor: pointer;
 }

 @media screen and (min-width: 768px) {
  grid-column: ${({ occupytwocolumns }) => (occupytwocolumns ? '1/3' : '')};
 }
`;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 3.3.- Formik Form Styled (Formik Form component styled)
//* ---------------------------------------------------------------------------
const InputRadCheWrapper = styled(Container)`
 width: 100%;
 padding: 0.5rem;
 margin-bottom: 0.5rem;

 flex-direction: row;
 justify-content: space-evenly;

 border-radius: 3px;
 border: ${({ border }) => (border ? `1px solid ${COLORS.white}` : '1px solid transparent')};

 @media screen and (min-width: 768px) {
  grid-column: ${({ occupytwocolumns }) => (occupytwocolumns ? '1/3' : '')};
 }
`;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 3.4.- Formik ErrorMessage Styled (Formik ErrorMessage component styled)
//* ---------------------------------------------------------------------------
const FormikErrorMessageStyled = styled(ErrorMessage)`
 width: 100%;
 margin-top: 0.25rem;

 font-family: Arial, Helvetica, sans-serif;
 font-size: 1rem;
 color: ${COLORS.error};
`;
//* ---------------------------------------------------------------------------
//* ===========================================================================

//* ===========================================================================
//* 4.- Exported components
//* ===========================================================================
export { InputRadCheTitle, InputRadCheWrapper, FormikErrorMessageStyled };
//* ===========================================================================
//* ///////////////////////////////////////////////////////////////////////////
