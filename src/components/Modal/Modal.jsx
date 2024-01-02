import { Component } from 'react';

import css from "./Modal.module.css"

export class Modal extends Component {
    handleEsc = (e) => {
        if (e.code === "Escape") {
        this.props.closeModal()
       }
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleEsc)
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleEsc)
    }
    render() {
        return (
            <div onClick={this.props.closeModal} className={css.modal}>
            <img className={css.img} src={this.props.largeImg} alt="something" />
        </div>
    )
    }
}