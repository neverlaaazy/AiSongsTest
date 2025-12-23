import React from "react";
import {Header} from './Header';

import { Outlet } from "react-router-dom";

export function PageCreateSet(){
    return <div>
        <Header/>
        <h2>Создание сета карточке</h2>
        <Outlet/>
    </div>;
}