import "./NavBar.css";

interface Props {
  searchText: string;
  handleSearchText: (searchText: string) => void;
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
    </nav>
  );
}
