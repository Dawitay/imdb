
import Results from '../components/Results';

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const { genre } = await searchParams; // ✅ unwrap the Promise

  const selectedGenre = genre || "fetchTrending";

  const endpoint =
    selectedGenre === "fetchTopRated"
      ? "movie/top_rated"
      : "trending/all/week";

  const res = await fetch(
    `https://api.themoviedb.org/3/${endpoint}?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) throw new Error("Failed to fetch data");

  const data = await res.json();

  return (
    <div>
      <Results results={data.results} />
    </div>
  );
}
