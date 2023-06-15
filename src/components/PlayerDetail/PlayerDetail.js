import React from "react";
import { useParams } from "react-router-dom";
import { PlayerList } from "../../shared/ListOfPlayers";
import "./PlayerDetail.css";

export const PlayerDetail = () => {
  const { id } = useParams();
  const player = PlayerList.find((obj) => {
    return obj.id === parseInt(id);
  });
  let cost = player.cost.toLocaleString();
  return (
    <div className="playerDetailContainer">
      <div className="playerCard">
        <div className="badge">{player.name}</div>
        <div className="playerTumb">
          <div className="imageWrapper">
            <img src={`../${player.img}`} alt="" />
          </div>
        </div>
        <div className="playerDetails">
          <h4>{player.club}</h4>
          <div className="playerPrice">Market value: € {cost}</div>
          <p className="playerInfo">{player.info}</p>
          <div className="playerBottomDetails"></div>
        </div>
      </div>
    </div>
  );
};
