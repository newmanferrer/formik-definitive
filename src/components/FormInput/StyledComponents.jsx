//* ///////////////////////////////////////////////////////////////////////////
//* FormInput
//* ///////////////////////////////////////////////////////////////////////////
//* ===========================================================================
//* 1.- Imports
//* ===========================================================================
import styled, { css } from 'styled-components';
import { COLORS } from '../../colors';
import { Field, ErrorMessage } from 'formik';
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
//* 3.1.- Label Input Wrapper
//* ---------------------------------------------------------------------------
const Wrapper = styled(Container)`
 width: 100%;
 margin-bottom: 0.5rem;

 @media screen and (min-width: 768px) {
  grid-column: ${({ occupytwocolumns }) => (occupytwocolumns ? '1/3' : '')};
 }
`;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 3.2.- Label
//* ---------------------------------------------------------------------------
const Label = styled.label`
 width: 100%;
 margin-bottom: 0.2rem;

 text-align: left;
 font-family: Arial, Helvetica, sans-serif;
 font-size: 1.2rem;
 color: ${({ error }) => (error ? `${COLORS.error}` : `${COLORS.white}`)};

 &:hover {
  cursor: pointer;
 }
`;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 3.3.- Formik Field Styled (Formik Field component styled)
//* ---------------------------------------------------------------------------
const FormikFieldStyled = styled(Field)`
 width: 100%;
 padding: 0.5rem;

 font-family: Arial, Helvetica, sans-serif;
 font-size: 1.2rem;
 outline: none;

 resize: none;

 border: ${({ error }) => (error ? `1px solid ${COLORS.error}` : '1px solid transparent')};
 border-radius: 3px;

 &:focus {
  border: ${({ error }) => (error ? `1px solid ${COLORS.error}` : `1px solid ${COLORS.hover}`)};
  box-shadow: 0 0 3px 3px ${COLORS.white};
 }

 ${({ as }) =>
  as !== 'select'
   ? css`
      &:read-only {
       cursor: not-allowed;
       color: ${COLORS.white};
       border: 1px solid ${COLORS.white};
       background-color: ${COLORS.background};
      }
     `
   : ''}
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
export { Wrapper, Label, FormikFieldStyled, FormikErrorMessageStyled };
//* ===========================================================================
//* ///////////////////////////////////////////////////////////////////////////
