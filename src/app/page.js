"use client";

import { useState } from "react";
import { quotesWithLikes } from "@/quotes";
import { Button } from "@/components/typography/Button";
import QuoteCard from "@/components/QuoteCard";

export default function Home() {
  const [quotesList, setQuotesList] = useState(quotesWithLikes);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const currentQuote = quotesList[quoteIndex];

  function handleNextClick() {
    if (quoteIndex < quotesList.length - 1) {
      setQuoteIndex(quoteIndex + 1);
    } else {
      setQuoteIndex(0);
    }
  }

  function handleLikeClick() {
    const newQuotesList = [...quotesList];
    newQuotesList[quoteIndex].likeCount =
      newQuotesList[quoteIndex].likeCount + 1;
    setQuotesList(newQuotesList);
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-200">
      <section className="bg-slate-50/50 rounded-md p-10 flex flex-col gap-6 w-[500px]">
        <QuoteCard
          quote={currentQuote.quote}
          author={currentQuote.author}
          likeCount={currentQuote.likeCount}
          onLikeClick={handleLikeClick}
        />

        <div className="flex justify-end border-t border-slate-300 pt-4 mt-2">
          <Button variant={"primary"} onClick={handleNextClick}>
            Next Quote
          </Button>
        </div>
      </section>
    </main>
  );
}
