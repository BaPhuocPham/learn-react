import React, { useState } from "react";
import "./Players.css";
import { PlayerList } from "../../shared/ListOfPlayers";
import { Icon, CardTitle, Row, Col, Card, Container } from "react-materialize";
import { Link } from "react-router-dom";

function Players() {
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [player, setPlayer] = useState({});

  const toogleOpenPlayerDetail = (player) => {
    setIsOpenDetail(!isOpenDetail);
    setPlayer(player);
  };

  return (
    <Container className="container">
      <Row>
        {PlayerList.map((player, index) => (
          <Col className="colPlayer" m={4} s={12}>
            <Card
              closeIcon={<Icon>close</Icon>}
              header={<CardTitle image={player.img} reveal waves="light" />}
              reveal={<p>{player.info}</p>}
              revealIcon={<Icon>more_vert</Icon>}
              title={player.name}
            >
              <p>
                <Link to={`detail/${player.id}`}>
                  <a href="#">Detail</a>
                </Link>
              </p>
            </Card>
          </Col>
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
      </Row>
    </Container>
  );
}

export default Players;
