import "./NavBar.css";

interface Props {
  searchText: string;
  handleSearchText: (searchText: string) => void;
  genderSelected: string;
  handleGenderSelected: (gender: string) => void;
}

export default function NavBar(props: Props): JSX.Element {
  return (
    <nav className="NavBar">
      <div className="SearchBar">
        <input
          type="text"
          placeholder="Search baby names"
          name="search"
          autoComplete="off"
          value={props.searchText}
          onChange={(e) => props.handleSearchText(e.target.value)}
        />
      </div>
      <div className="GenderButtons">
        <button
          type="button"
          id="all"
          onClick={() => props.handleGenderSelected("")}
        >
          ⚤
        </button>
        <button
          type="button"
          id="m"
          onClick={() => props.handleGenderSelected("m")}
        >
          ♂︎
        </button>
        <button
          type="button"
          id="f"
          onClick={() => props.handleGenderSelected("f")}
        >
          ♀︎
        </button>
      </div>
    </nav>
  );
}
