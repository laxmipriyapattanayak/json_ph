import "./search.css";

const Search = ({
  handleInputChange,
}: {
  handleInputChange: (text: string) => void;
}) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    handleInputChange(e.target.value);
  };
  return (
    <div>
      <input name="myInput" className="search-input" onChange={handleInput} />
    </div>
  );
};

export default Search;
