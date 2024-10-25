import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandList,
} from "@/components/ui/command";
import { CommandItem } from "cmdk";
import { MediaItem } from "@/const/types/types";

export const ComboBox = ({
  filteredMedia,
  keyword,
  setKeyword,
}: {
  filteredMedia?: MediaItem[];
  keyword: string;
  setKeyword: (keyword: string) => void;
}) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <Command>
      <CommandInput
        placeholder="Search for movies or shows!"
        onChangeCapture={handleSearchChange}
      />
      <CommandList>
        {keyword.length > 0 && <CommandEmpty>No results found.</CommandEmpty>}
        {filteredMedia?.map((item) => (
          <CommandItem
            key={item.id}
            value={item.title || item.name || "Untitled"}
          >
            <div className="flex items-center gap-2">
              {item.backdrop_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w200${item.backdrop_path}`}
                  alt={item.title || item.name || "Backdrop image"}
                  className="w-10 h-10 rounded-md"
                />
              )}
              <div>
                <h3 className="text-sm font-medium">
                  {item.title || item.name || "Untitled"}
                </h3>
                <p className="text-xs text-gray-500">
                  {item.overview || "No description available."}
                </p>
              </div>
            </div>
          </CommandItem>
        ))}
      </CommandList>
    </Command>
  );
};
