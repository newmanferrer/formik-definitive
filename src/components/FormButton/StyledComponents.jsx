//* ///////////////////////////////////////////////////////////////////////////
//* FormButton
//* ///////////////////////////////////////////////////////////////////////////
//* ===========================================================================
//* 1.- Imports
//* ===========================================================================
import styled from 'styled-components';
import { COLORS } from '../../colors';
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
//* 3.1.- Title Wrapper
//* ---------------------------------------------------------------------------
const Wrapper = styled(Container)`
 width: 100%;
 margin: 1rem 0 0.5rem;

 @media screen and (min-width: 768px) {
  grid-column: ${({ occupytwocolumns }) => (occupytwocolumns ? '1/3' : '')};
 }
`;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 3.2.- Button
//* ---------------------------------------------------------------------------
const Button = styled.button`
 width: ${({ width }) => (width ? width : '100%')};
 padding: 0.5rem;

 text-align: center;
 font-family: serif, sans-serif;
 font-size: 1rem;
 color: ${COLORS.white};
 outline: none;
 cursor: pointer;
 transition: all 0.5s ease-in-out;

 border-radius: 3px;
 border: 1px solid ${COLORS.white};
 background-color: ${COLORS.background};

 &:hover {
  background-color: ${COLORS.hover};
 }

 &:focus {
  border: 1px solid ${COLORS.hover};
  box-shadow: 0 0 3px 3px ${COLORS.white};
 }

 &:disabled {
  opacity: 0.3;
  cursor: not-allowed;
  color: ${COLORS.error};
  border: 1px solid ${COLORS.error};
  background-color: grey;
 }
`;
//* ---------------------------------------------------------------------------
//* ===========================================================================

//* ===========================================================================
//* 4.- Exported components
//* ===========================================================================
export { Wrapper, Button };
//* ===========================================================================
//* ///////////////////////////////////////////////////////////////////////////
