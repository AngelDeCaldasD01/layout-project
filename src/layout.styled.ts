import { ITextField } from 'decal-components';
import styled from 'styled-components';

type TDisplay = 'flex' | 'grid';

interface IColumn {
  start: number;
  end: number;
}

interface IColumnConfig {
  position: number;
  col: IColumn | string;
}

interface ILayout {
  display: "grid";
  maxColumns?: number;
  columnConfig?: IColumnConfig[];
  rowSpacing: string;
  col?: IColumn | string;
}

const createGridStyles = (rowSpacing: string) => `
  display: grid;
  gap: ${rowSpacing};
  grid-auto-flow: row;
  grid-auto-columns: auto;
  grid-auto-rows: max-content;
`;

const gridTemplateStyles = (maxColumns: number) => `
  grid-template-columns: repeat(${maxColumns}, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(min(100%/1, max(18em, 100%/${maxColumns})), 1fr));
  }
`;

const gridTemplateStyles2 = (columnConfigWidth: string, columnConfigPosition: string) => `
  grid-template-columns: ${columnConfigWidth};
  grid-template-areas: ${columnConfigPosition};
`;

const gridTemplateStyles3 = (position: number, weight?: string) => `
.MuiFormControl-root:nth-child(${position}) {
  grid-column: ${weight} !important;
  @media (max-width: 768px) {
    grid-column: inherit !important;
  }
}
`;

export const LayoutCustom = styled.div<ILayout>`
  ${(props) => createGridStyles(props.rowSpacing)};
  ${(props) => gridTemplateStyles(props.maxColumns ? props.maxColumns : 4)};
  ${(props) =>
    props.columnConfig &&
    props.columnConfig.map(({ position, col }) =>
      gridTemplateStyles3(position, typeof col == 'string' ? col : `${col.start} / ${col.end}`)
    )}
  grid-column: ${(props) => typeof props.col == 'string' ? props.col : props.col ? `${props.col?.start} / ${props.col?.end}` : "inherit"};
  @media (max-width: 768px) {
    grid-column: inherit;
  }
  .marginTop {
    place-self: end;
  }
`;

interface IDivStyled {
  className: 'MuiFormControl-root';
  col?: IColumn | string;
}

export const DivStyled = styled.div<IDivStyled>`
  width: 100%;
  height: 55px;
  background-color: #c1e6dd;
  border-radius: 10px;
  place-content: center;
  font-weight: 500;
  color: black;
  grid-column: ${(props) => typeof props.col == 'string' ? props.col : props.col ? `${props.col?.start} / ${props.col?.end}` : "inherit"};
  @media (max-width: 768px) {
    grid-column: inherit;
  }
`;

