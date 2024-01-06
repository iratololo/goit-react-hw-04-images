import { useContext} from 'react';

import { MyContext } from 'App';
import css from "./Searchbar.module.css"


export const Searchbar = () => {
    const context = useContext(MyContext);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const keyWord = e.currentTarget.elements.search.value;
        context.handleOnSearch(keyWord)
    }
  return (
            <header className={css.searchbar}>
                <form onSubmit={handleOnSubmit} className={css.form}>
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
