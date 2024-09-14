import { useEffect, useState } from "react";
import "./App.css";
import Cell from "./Cell";

function App() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("cross");
  const [win, setWin] = useState("");

  const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 5, 8],
    [2, 4, 6],
  ];

  useEffect(() => {
    winCombos.forEach((combo) => {
      let circleWins = combo.every((c) => cells[c] === "circle");
      let crossWins = combo.every((c) => cells[c] === "cross");

      if (circleWins) {
        setWin("circle wins");
      } else if (crossWins) {
        setWin("cross wins");
      } else if (cells.every((cell) => cell !== "") && win === "") {
        setWin("draw!");
      }
    });
  }, [cells]);

  return (
    <div className="container">
      <button onClick={() => window.location.reload()}>restart</button>
      <div className="tic-tac-toe">
        {cells.map((cell, i) => {
          return (
            <Cell
              key={i}
              id={i}
              cells={cells}
              setCells={setCells}
              go={go}
              setGo={setGo}
              cell={cell}
              win={win}
            />
          );
        })}
      </div>
      <div className="turn">{win === "" ? `${go} turn` : ""} </div>
      <div className="win">{win}</div>
    </div>
  );
}

export default App;
