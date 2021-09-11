//* ///////////////////////////////////////////////////////////////////////////
//* normalizeDateFormat
//* Description: normalizes current system date to "yyyy-mm-dd" format
//* ///////////////////////////////////////////////////////////////////////////
//* ===========================================================================
export const normalizeDateFormat = () => {
 const addZero = (value) => value.toString().padStart(2, '00');
 const [year, month, day] = new Date().toLocaleDateString().split('/').reverse();
 const date = `${year}-${addZero(month)}-${addZero(day)}`;

 return date;
};
//* ===========================================================================
