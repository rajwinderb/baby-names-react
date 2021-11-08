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
        <button type="button" onClick={() => props.handleGenderSelected("")}>
          All
        </button>
        <button type="button" onClick={() => props.handleGenderSelected("m")}>
          Boy
        </button>
        <button type="button" onClick={() => props.handleGenderSelected("f")}>
          Girl
        </button>
      </div>
    </nav>
  );
}
