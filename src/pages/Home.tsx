import { Search } from "@/components/search";
import logo from "/logo.png";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { stateOpen } from "@/utils/utils";

export function Home() {
  const [search, setSearch] = useState(false);
  return (
    <div className="min-h-screen bg-zinc-700 flex flex-col justify-center items-center">
      <img src={logo} className="h-12" />
      <h1>Made for you.</h1>
      <h2>Free access to Movies and TV shows you love.</h2>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {search && (
        <div className="w-56">
          <Search />
        </div>
      )}
      <div className="flex gap-5">
        <Button onClick={() => stateOpen(search, setSearch)}>Search</Button>
        <Button variant="secondary">Explore</Button>
      </div>
    </div>
  );
}

export default Home;
