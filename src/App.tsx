import './App.css';
import { DivStyled, LayoutCustom } from './layout.styled';

function App() {

  const columnConfig1 = [
    { position: 1, col: { start: 1, end: 2 } },
    { position: 2, col: { start: 3, end: 4 } },
    { position: 3, col: { start: 5, end: 6 } },
    { position: 4, col: { start: 7, end: 8 } },

    { position: 5, col: { start: 2, end: 3 } },
    { position: 6, col: { start: 4, end: 5 } },
    { position: 7, col: { start: 6, end: 7 } },
    { position: 8, col: { start: 8, end: 9 } },

    { position: 9, col: { start: 1, end: 2 } },
    { position: 10, col: { start: 3, end: 4 } },
    { position: 11, col: { start: 5, end: 6 } },
    { position: 12, col: { start: 7, end: 8 } },

    { position: 13, col: { start: 2, end: 3 } },
    { position: 14, col: { start: 4, end: 5 } },
    { position: 15, col: { start: 6, end: 7 } },
    { position: 16, col: { start: 8, end: 9 } },

    { position: 17, col: { start: 1, end: 2 } },
    { position: 18, col: { start: 3, end: 4 } },
    { position: 19, col: { start: 5, end: 6 } },
    { position: 20, col: { start: 7, end: 8 } },

    { position: 21, col: { start: 2, end: 3 } },
    { position: 22, col: { start: 4, end: 5 } },
    { position: 23, col: { start: 6, end: 7 } },
    { position: 24, col: { start: 8, end: 9 } },

    { position: 25, col: { start: 1, end: 2 } },
    { position: 26, col: { start: 3, end: 4 } },
    { position: 27, col: { start: 5, end: 6 } },
    { position: 28, col: { start: 7, end: 8 } },

    { position: 29, col: { start: 2, end: 3 } },
    { position: 30, col: { start: 4, end: 5 } },
    { position: 31, col: { start: 6, end: 7 } },
    { position: 32, col: { start: 8, end: 9 } },
  ];

  // const columnConfig2 = [];

  // for (let i = 1; i <= 32; i++) {
  //   const colStart = 1;
  //   const colEnd = i % 2 === 0 ? 4 : 2;

  //   columnConfig1.push({
  //     position: i,
  //     col: { start: colStart, end: colEnd }
  //   });
  // }

  const divs = Array.from({ length: 32 }, (_, index) => (
    <DivStyled key={index} className='MuiFormControl-root'>
      Prueba {index + 1}
    </DivStyled>
  ));

  return (
    <div className="App">
      <h1>Layout 1</h1>
      <LayoutCustom display="grid" rowSpacing={"12px"} maxColumns={5}>
        <DivStyled className='MuiFormControl-root' col={{start: 1, end: 4}}>Prueba 1</DivStyled>
        <DivStyled className='MuiFormControl-root' col={{start: 4, end: 6}}>Prueba 2</DivStyled>
        <DivStyled className='MuiFormControl-root'>Prueba 3</DivStyled>
        <DivStyled className='MuiFormControl-root' col={{start: 3, end: 5}}>Prueba 4</DivStyled>
        <DivStyled className='MuiFormControl-root' col={{start: 2, end: 4}}>Prueba 5</DivStyled>
        <DivStyled className='MuiFormControl-root' col={{start: 1, end: 3}}>Prueba 6</DivStyled>
        <DivStyled className='MuiFormControl-root' col={{start: 4, end: 6}}>Prueba 7</DivStyled>
        <DivStyled className='MuiFormControl-root'col={{start: 1, end: 6}}>Prueba 8</DivStyled>
        <DivStyled className='MuiFormControl-root'>Prueba 9</DivStyled>
        <DivStyled className='MuiFormControl-root'>Prueba 10</DivStyled>
      </LayoutCustom>
      <h1>Layout 3</h1>
      <LayoutCustom display="grid" rowSpacing={"0px"} maxColumns={8} columnConfig={columnConfig1}>
        {divs}
      </LayoutCustom>
    </div>
  );
}

export default App;
