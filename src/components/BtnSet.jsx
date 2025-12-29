import { Link } from "react-router-dom";

import './BtnSet.css';

export function BtnSet({name,id}){
    return <li className="list-set__item">
        <Link className="list-set__btn-Link" to={`/set/${id}`} state={{set:name}}>
            <button className="list-set__btn">{name}</button>
        </Link>
    </li>
}