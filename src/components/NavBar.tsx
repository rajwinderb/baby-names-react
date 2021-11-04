export default function NavBar(): JSX.Element {
  return (
    <nav className="NavBar">
      <div className="SearchBar">
        <input
          type="text"
          placeholder="Search baby names"
          name="search"
          autoComplete="off"
        />
      </div>
    </nav>
  );
}
