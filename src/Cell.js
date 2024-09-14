export default function Cell({ id, cell, cells, setCells, go, setGo, win }) {
  function clicked(e) {
    if (cell === "" && win === "") {
      if (go === "circle") {
        let copyCells = [...cells];
        copyCells[id] = go;
        setCells(copyCells);
        setGo("cross");
      } else if (go === "cross") {
        let copyCells = [...cells];
        copyCells[id] = go;
        setCells(copyCells);
        setGo("circle");
      }
    }
  }

  return (
    <div className="cell" onClick={clicked}>
      <div className={cell}>
        {cell === "" ? "" : cell === "circle" ? "O" : "X"}
      </div>
    </div>
  );
}
