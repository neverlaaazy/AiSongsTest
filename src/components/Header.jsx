import { Link } from 'react-router-dom';

import './Header.css'

export function Header() {
    return (
        <div className="header">
            <h1>
                <Link className='flash__link' to="/">Флеш-карточки</Link>
            </h1>
            <nav className='main-menu'>
                <ul className='main-menu-ul'>
                    {/* <li>
                        <Link className='main-menu__link' to="/admin/createset">Создать сет</Link>
                    </li>
                    <li>
                        <Link className='main-menu__link' to="/admin/createcard">Создать карточку</Link>
                    </li> */}
                </ul>
            </nav>
        </div>
    );
}