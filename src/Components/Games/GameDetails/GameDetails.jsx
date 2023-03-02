import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function GameDetail() {
    const { id_jeu } = useParams();
    const [game, setGame] = useState({});

    useEffect(() => {
        axios
            .get(`http://192.168.1.12:3000/jeux/${id_jeu}`)
            .then((response) => {
                setGame(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id_jeu]);

    if (!game) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{game.titre}</h1>
            <img src={game.cover} alt={game.titre} />
            <p>{game.difficulte}</p>
            <p>{game.description}</p>
            <a href={game.lien_affiliation} target="_blank" rel="noreferrer">
                Acheter sur Amazon
            </a>
        </div>
    );
}

export default GameDetail;
