import css from "./Error.module.css"

export const Error = ({ children }) => {
    return (
        <div className={css.error}>{children}</div>
    )
}