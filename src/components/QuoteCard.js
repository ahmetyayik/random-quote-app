import { Button } from "@/components/typography/Button";
import { H3 } from "@/components/typography/H3";

export default function QuoteCard({ quote, author, likeCount, onLikeClick }) {
  return (
    <div className="flex flex-col gap-4">
      <H3 element="p">{quote}</H3>

      <span className="text-md font-semibold text-slate-900 self-end">
        -{author}
      </span>

      <div>
        <Button
          variant={"secondary"}
          onClick={onLikeClick}
          className="flex items-center gap-2 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-red-600"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.5 3c1.743 0 3.23.89 4.125 2.232C12.52 3.89 14.007 3 15.75 3 18.536 3 21 5.322 21 8.25c0 3.924-2.438 7.11-4.739 9.272a25.178 25.178 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
          <span>Like ({likeCount})</span>
        </Button>
      </div>
    </div>
  );
}
