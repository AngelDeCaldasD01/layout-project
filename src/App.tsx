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
      <LayoutCustom display="grid" rowSpacing={"12px"} maxColumns={4}>
        <TextField label='Prueba 1' name={''} col={" 1 / 3"}/>
        <TextField label='Prueba 2' name={''}/>
        <TextField label='Prueba 3' name={''} col={{start: 1, end: 4}}/>
        <TextField label='Prueba 4' name={''}/>
        <TextField label='Prueba 5' name={''}/>
        <TextField label='Prueba 6' name={''}/>
        <TextField label='Prueba 7' name={''}/>
        <TextField label='Prueba 8' name={''}/>
      </LayoutCustom>
      <h1>Layout 2</h1>
      <LayoutCustom display="grid" rowSpacing={"12px"} maxColumns={5}>
        <DivStyled className='MuiFormControl-root' col={" 1 / 3"}>Prueba 1</DivStyled>
        <DivStyled className='MuiFormControl-root'>Prueba 2</DivStyled>
        <DivStyled className='MuiFormControl-root'>Prueba 3</DivStyled>
        <DivStyled className='MuiFormControl-root'>Prueba 4</DivStyled>
        <DivStyled className='MuiFormControl-root'>Prueba 5</DivStyled>
        <DivStyled className='MuiFormControl-root'>Prueba 6</DivStyled>
        <DivStyled className='MuiFormControl-root'>Prueba 7</DivStyled>
        <DivStyled className='MuiFormControl-root'>Prueba 8</DivStyled>
      </LayoutCustom>
    </div>
  );
}

export default App;
