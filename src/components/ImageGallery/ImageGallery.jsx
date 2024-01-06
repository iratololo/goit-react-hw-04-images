import { nanoid } from 'nanoid'
import { useContext} from 'react';

import { MyContext } from 'App';
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import css from "./ImageGallery.module.css"

export const ImageGallery = () => {
    const context = useContext(MyContext);
    return (
        <ul className={css.gallery}>
            {context.images.map((item) => {
                return <ImageGalleryItem key={nanoid()} data={item}/>
            })}
        </ul>
    )
}