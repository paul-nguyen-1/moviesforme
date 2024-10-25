import logo from "/logo.png";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useDebounce, useFetchData } from "@/utils/utils";
import { TMBD_API_KEY, TMBD_API_SEARCH_MULTI } from "@/const/const";
import { useState } from "react";
import { MediaItem } from "@/const/types/types";
import { ComboBox } from "@/components/common/combobox";

export function Home() {
  const [keyword, setKeyword] = useState<string>("");
  const debounceKeyword = useDebounce(keyword, 500);
  const { data } = useFetchData(
    `${TMBD_API_SEARCH_MULTI}api_key=${TMBD_API_KEY}query=${debounceKeyword}`
  );
  const filteredMedia = data?.results
    .filter(
      (item: MediaItem) =>
        item.media_type === "movie" || item.media_type === "tv"
    )
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-zinc-700 flex flex-col justify-center items-center">
      <img src={logo} className="h-12" />
      <h1 className="font-mono">Made for you.</h1>
      <h2 className="font-mono">
        Free access to Movies and TV shows you love.
      </h2>
      <div className="flex flex-row gap-5 items-end">
        <div className="w-56 mt-5">
          <ComboBox
            filteredMedia={filteredMedia}
            keyword={keyword}
            setKeyword={setKeyword}
          />
        </div>
        <Link to={"/"} className={buttonVariants({ variant: "default" })}>
          Explore TV or Movies
        </Link>
      </div>
    </div>
  );
}

export default Home;
