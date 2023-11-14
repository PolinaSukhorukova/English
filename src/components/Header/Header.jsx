import { NavLink } from 'react-router-dom';
import cn from 'classnames';

export const Header = () => {
    return (
        <header className="header">
            <div className="header__content">
                <div className="wrapper">
                    <div className="header__buttons">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                cn('header__button', { 'is-active': isActive })
                            }
                        >
                            HOME
                        </NavLink>
                        <NavLink
                            to="/books"
                            className={({ isActive }) =>
                                cn('header__button', { 'is-active': isActive })
                            }
                        >
                            BOOKS
                        </NavLink>
                    </div>
                </div>
            </div>
        </header>
    )
}