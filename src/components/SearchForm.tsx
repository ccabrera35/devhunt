import { useSearchTextContext } from "../lib/hooks";

export default function SearchForm() {
  const { searchText, handleSearchTextChange } = useSearchTextContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;
    handleSearchTextChange(newText);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form action="#" className="search" onSubmit={handleSubmit}>
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      <input
        value={searchText}
        onChange={handleChange}
        spellCheck="false"
        type="text"
        required
        placeholder="Find remote developer jobs..."
      />
    </form>
  );
}
