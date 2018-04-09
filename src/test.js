export const something = ({ stuff } = {}) => {
  const test = { lol: 'hey' }
  
  return {
    ...test,
    stuff,
  }
}