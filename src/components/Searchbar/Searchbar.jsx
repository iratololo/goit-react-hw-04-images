import { Component } from 'react';

import css from "./Searchbar.module.css"

export class Searchbar extends Component {
    handleOnSubmit = (e) => {
        e.preventDefault();
        const keyWord = e.currentTarget.elements.search.value;
        this.props.handleOnSearch(keyWord)
    }
    render() {
        return (
            <header className={css.searchbar}>
                <form onSubmit={this.handleOnSubmit} className={css.form}>
                    <button type="submit" className={css.button}>
                        <span>Search</span>
                    </button>

                    <input
                    className={css.input}
                    name='search'
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}
