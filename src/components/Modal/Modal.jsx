import { useContext, useEffect} from 'react';

import { MyContext } from 'App';
import css from "./Modal.module.css"

export const Modal = () => {
    const context = useContext(MyContext);

    useEffect(() => {  
        const handleEsc = (e) => {
        if (e.code === "Escape") {
        context.closeModal()
        }
        }
        document.addEventListener("keydown", handleEsc)
        return () => {
            document.removeEventListener("keydown",handleEsc)
        }
  }, [context])

    return (
            <div onClick={context.closeModal} className={css.modal}>
            <img className={css.img} src={context.largeImg} alt="something" />
        </div>
    )
}
