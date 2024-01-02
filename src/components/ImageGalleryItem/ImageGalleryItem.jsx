import { Component } from 'react';

import css from "./ImageGalleryItem.module.css"

export class ImageGalleryItem extends Component {
    handlerOnClick = () => {
        const { data: { largeImageURL }, showModal } = this.props;
        showModal(largeImageURL)
    }
    render() {
        const { data: { id, webformatURL } } = this.props;
        return (
        <li id={id} className={css.item}>
            <img className={css.img} src={webformatURL} alt="something" />
            <div className={css.plug}>
                <button onClick={this.handlerOnClick} className={css.button} type="button">Zoom in</button>
            </div>
        </li>
    )
    }
}