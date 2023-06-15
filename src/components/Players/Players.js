import React, { useState } from "react";
import "./Players.css";
import { PlayerList } from "../../shared/ListOfPlayers";
import { Link } from "react-router-dom";

function Players() {
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [player, setPlayer] = useState({});

  const toogleOpenPlayerDetail = (player) => {
    setIsOpenDetail(!isOpenDetail);
    setPlayer(player);
  };

  return (
    <div className="container">
      {PlayerList.map((player) => (
        <div key={player.id} className="column">
          <div className="card">
            <img src={player.img} alt="the player"></img>
            <h3>{player.name}</h3>
            <p className="title">{player.club}</p>
            <Link to={`detail/${player.id}`}>
              <p>
                <button>Detail</button>
              </p>
            </Link>
            {/* <p>
              <button onClick={() => toogleOpenPlayerDetail(player)}>
                Detail
              </button>
            </p> */}
          </div>
        </div>
      ))}
      {isOpenDetail ? (
        <div id="popup" className="overlay">
          <div className="popup">
            <img src={player.img} alt="player" />
            <h2>{player.name}</h2>
            <a className="close" href="#" onClick={toogleOpenPlayerDetail}>
              &times;
            </a>
            <div className="content">{player.info}</div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Players;
