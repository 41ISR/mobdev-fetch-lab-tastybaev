import './SearchBar.css';

function SearchBar({qeury , onQueryChange, onSubmit}) {
  return (
    <form className="search-bar" onSubmit={onSubmit}>
      <span className="search-bar__eyebrow">Найти фильм или сериал</span>
      <div className="search-bar__row">
        <input
          type="text"
          className="search-bar__input"
          placeholder="Например: Joker, Interstellar, Dune…"
          value = {qeury}
          onChange={(e) => onQueryChange(e.target.value)}
        />
        <button type="button" className="search-bar__button">Искать</button>
      </div>
    </form>
  );
}

export default SearchBar;
