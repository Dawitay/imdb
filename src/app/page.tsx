// src/app/page.tsx
import React from "react";
import Results from "../components/Results";

const API_KEY = process.env.API_KEY;

interface HomeProps {
  searchParams:
    | Record<string, string | undefined>
    | Promise<Record<string, string | undefined>>;
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const genre = params.genre || "fetchTrending";

  let url = "";

  if (genre === "fetchTrending") {
    url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=en-US`;
  } else if (genre === "fetchTopRated") {
    url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`;
  } else {
    url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${encodeURIComponent(genre)}&language=en-US`;
  }


  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    console.error("TMDB API error:", res.status, res.statusText);
    throw new Error("Failed to fetch movies");
  }

  const data = await res.json();
  const results = data.results || [];

  return (
    <main className="p-4">
      {results.length === 0 ? (
        <h1 className="text-center pt-6">No results found.</h1>
      ) : (
        <Results results={results} />
      )}
    </main>
  );
}
