import { useState } from 'react';
import "./Card.css";
export function Card({front,back}) {
    const [checkCard, setCheckCard] = useState(false);

    const handleClick = () => {
        setCheckCard(!checkCard);
    };

    return (
        <div
            className={`card ${checkCard ? 'card-check' : ''}`}
            onClick={handleClick}
            data-back={back}>{front}
        </div>
    );
}