import { Input } from "../ui/input";

interface SearchProps {
  setKeyword: (keyword: string) => void;
}

export const Search: React.FC<SearchProps> = ({ setKeyword }) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return <Input onChange={handleSearchChange} />;
};

export default Search;
