import css from "./Button.module.css"

export const Button = ({ handleOnClick }) => {
    return (
        <button className={css.button} onClick={handleOnClick} type="button">Load more</button>
    )
}