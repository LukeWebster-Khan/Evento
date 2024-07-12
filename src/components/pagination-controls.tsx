import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import next from "next";
import Link from "next/link";

type paginationProps = {
  previousPath: string;
  nextPath: string;
};

export default function PaginationControls({
  previousPath,
  nextPath,
}: paginationProps) {
  return (
    <section className="flex justify-between w-full">
      {previousPath !== "" ? (
        <Link className="pagination-button" href={previousPath}>
          {" "}
          <ArrowLeftIcon />
          Previous
        </Link>
      ) : (
        <div />
      )}
      {nextPath === "" ? (
        <div />
      ) : (
        <Link className="pagination-button" href={nextPath}>
          Next
          <ArrowRightIcon />
        </Link>
      )}
    </section>
  );
}
