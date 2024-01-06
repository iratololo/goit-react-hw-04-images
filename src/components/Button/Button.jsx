import { useContext } from 'react';

import { MyContext } from 'App';
import css from "./Button.module.css"

export const Button = () => {
    const context = useContext(MyContext);
    return (
        <button className={css.button} onClick={context.handleOnClick} type="button">Load more</button>
    )
}