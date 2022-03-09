import grid from "./grid.module.css";
export function Grid({ children }: any) {
  return <div className={grid.container}>{children}</div>;
}
