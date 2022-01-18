import React from "react";

import "../stylesheet/Tile.scss";

export default function TileOpp({ value, click }) {
  // const [length, getShipLength] = useState("");
  return (
    <>
      <div className="tileOpp" onClick={click}>
        <span>{value}</span>
      </div>
    </>
  );
}
