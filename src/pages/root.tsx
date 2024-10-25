import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Root() {
  return (
    <div
      className="min-h-screen bg-zinc-700 flex flex-col justify-center items-center"
    >
      <Link to={"/home"} className={buttonVariants({ variant: "default" })}>
        Explore TV or Movies
      </Link>
    </div>
  );
}

export default Root;
