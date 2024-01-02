import { nanoid } from 'nanoid'

import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import css from "./ImageGallery.module.css"

export const ImageGallery = ({images,showModal}) => {
    return (
        <ul className={css.gallery}>
            {images.map((item) => {
                return <ImageGalleryItem key={nanoid()} data={item} showModal={showModal} />
            })}
        </ul>
    )
}