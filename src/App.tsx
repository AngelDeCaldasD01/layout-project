import './App.css';
import { TextField } from 'decal-components';
import { DivStyled, LayoutCustom } from './layout.styled';

function App() {

  const columnConfig1 = [
    { position: 1, col: '1 / 2' },
    { position: 2, col: { start: 1, end: 3 } },
    { position: 3, col: { start: 5, end: 6 } },
    { position: 4, col: { start: 1, end: 6 } }
  ];

  return (
    <div className="App">
      <h1>Layout 1</h1>
      <LayoutCustom display="grid" rowSpacing={"12px"} maxColumns={8}>
        <DivStyled className='MuiFormControl-root' name={''}>Prueba 1</DivStyled>
        <DivStyled className='MuiFormControl-root' name={''}>Prueba 1</DivStyled>
        <DivStyled className='MuiFormControl-root' name={''}>Prueba 1</DivStyled>
        <DivStyled className='MuiFormControl-root' name={''}>Prueba 1</DivStyled>
        <DivStyled className='MuiFormControl-root' name={''}>Prueba 1</DivStyled>
        <DivStyled className='MuiFormControl-root' name={''}>Prueba 1</DivStyled>
        <DivStyled className='MuiFormControl-root' name={''}>Prueba 1</DivStyled>
        <DivStyled className='MuiFormControl-root' name={''}>Prueba 1</DivStyled>
        <DivStyled className='MuiFormControl-root' name={''}>Prueba 1</DivStyled>
        <DivStyled className='MuiFormControl-root' name={''}>Prueba 1</DivStyled>
      </LayoutCustom>
    </div>
  );
}

export default App;
