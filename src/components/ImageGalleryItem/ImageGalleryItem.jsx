import { useContext} from 'react';

import { MyContext } from 'App';
import css from "./ImageGalleryItem.module.css"

export const ImageGalleryItem = ({data: { largeImageURL, id,webformatURL, }}) => {
    const context = useContext(MyContext);
    const handlerOnClick = () => {
        context.showModal(largeImageURL);
    }
  return (
        <li id={id} className={css.item}>
            <img className={css.img} src={webformatURL} alt="something" />
            <div className={css.plug}>
                <button onClick={handlerOnClick} className={css.button} type="button">Zoom in</button>
            </div>
        </li>
    )
}
