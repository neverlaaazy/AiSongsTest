import {Card} from "./Card";
import cards from '../data.json';
import cardsAI from '../dataAi.json'
import React from "react";
import './Set.css';
import { useLocation} from "react-router-dom";



export function Set(){
    const location = useLocation()
    const {set} = location.state;

    let filterCards = cards.filter((item)=>(item.setName === set));
    let filterCardsAi = cardsAI.filter((item)=>(item.setName === set));
    const [step, setStep] = React.useState(0);

    const handleNext = () => {
        if (step < filterCards.length - 1) {
            setStep(step + 1);
        }
    };

    const handlePrev = () => {
        if (step > 0) {
            setStep(step - 1);
        }
    };

    const isFirstStep = step === 0;
    const isLastStep = step === filterCards.length - 1;

    return (
        <div>
            <div className="main-div-set">
                <div className="main_cards_div">
                <div className="main_div_cards">
                    <div className="div_cards">
                        <h2>ПОДСКАЗКА</h2>
                        <Card 
                            key={`ai-${step}`}
                            front={filterCardsAi[step].front} 
                            back={filterCardsAi[step].back}
                        />
                    </div>
                    <audio src={`audio_ai/${step+1}.mp3`} controls></audio>
                </div>
                <div className="main_div_cards">
                    <div className="div_cards">
                        <h2>ОТВЕТ</h2>
                        <Card 
                            key={`orig-${step}`}
                            front={filterCards[step].front} 
                            back={filterCards[step].back}
                        />
                    </div>
                    <audio src={`audio_orig/${step+1}.mp3`} controls></audio>
                </div>
            </div>
            <div className="cards_manipulator">
                <button 
                    className={`cards_mani_button cards_mani_button_left ${isFirstStep ? 'button_disabled' : ''}`}
                    onClick={handlePrev}
                    disabled={isFirstStep}
                >
                    ←
                </button>
                <p className="cards_mani_list">{step+1}/{filterCards.length}</p>
                <button 
                    className={`cards_mani_button cards_mani_button_right ${isLastStep ? 'button_disabled' : ''}`}
                    onClick={handleNext}
                    disabled={isLastStep}
                >
                    →
                </button>
            </div>
            </div>
        </div>
    );
}