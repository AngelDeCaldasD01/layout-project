
# Layout project

Para poder iniciar el proyecto se tienen que seguir los siguientes pasos:

```bash
  git clone 
```

```bash
  npm --force install
```

```bash
  npm start
```
### Consejos

- _Se recomienda utilizar el proyecto con una resolución mayor a 768 px; en caso contrario, el layout no se verá correctamente y los span no funcionarán._

- _Para tener claro el funcionamiento de gridColumns, tienes que tener en cuenta una cuadrícula, en este caso una con 3 columnas. Para poder aprender cómo funciona, lo normal es imaginar que hay 4 líneas imaginarias. En el caso de que un div quisieramos que comenzara en la columna 2 y terminara en la última, el valor sería: grid-columns: "2 / 4"._

[![Esta es una imagen de ejemplo](https://www.seekpng.com/png/detail/100-1006006_grid-png-transparent.png)]()

En cuanto el funcionamiento del componente Layout, solo hay una única prop obligatoria, display={"grid"}. Además verás que hay más props:

#### Tabla:
| Propiedad| Valores| Explicación |
| ----- | ---- |---- |
| display* | "grid" | Tipo de layout |
| maxColumns | number | Número máximo de columnas visibles |
| columnConfig | { position: number, col: { start: number, end: number } } | Es la configuración de columnas en un objeto. |
| rowSpacing | string | Esta propiedad es el gap entre columnas y filas |

#### Componente:
| Propiedad| Valores| Explicación |
| ----- | ---- |---- |
| className* | string | Su valor tiene que ser 'MuiFormControl-root' para que funcione|
| col | string \| { start: number, end: number }| Número o string de donde empieza y termina una columna |

_*El asterisco hace referencia a una propiedad obligatoria_

