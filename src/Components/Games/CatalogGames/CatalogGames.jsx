import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, Row, Col } from "react-bootstrap";
import "./CatalogGames.scss";

function GameList() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        axios
            .get("http://192.168.1.12:3000/jeux")
            .then((response) => {
                setGames(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="main_container">
            <div className="container">
                <h1>Tous nos jeux </h1>
                <Row xs={1} md={2} className="card-deck">
                    {games.map((game) => (
                        <Col key={game.id_jeu}>
                            <Card className="h-100 border-0">
                                <Card.Img
                                    className="img_card"
                                    variant="center"
                                    src={game.cover}
                                />
                                <Card.Body>
                                    <Card.Title>{game.titre}</Card.Title>
                                    <Card.Text>{game.resume}</Card.Text>
                                    <Button
                                        variant="primary"
                                        href={game.lien_affiliation}
                                        target="_blank"
                                    >
                                        Acheter sur Amazon
                                    </Button>
                                    <Button
                                        variant="secondary"
                                        href={`/jeux/${game.id_jeu}`}
                                        target="_blank"
                                    >
                                        En savoir plus
                                    </Button>
                                    <Button
                                        variant="secondary"
                                        href={`/jeux/${game.id_jeu}`}
                                        target="_blank"
                                    >
                                        En savoir plus
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}

export default GameList;
