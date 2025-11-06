import React from 'react';
import Results from '../../../components/Results';

export default async function SearchPage({ params }) {
  // Unwrap the params promise
  const { searchTerm } = await params;

  // Use the destructured searchTerm in fetch
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${encodeURIComponent(searchTerm)}&language=en-US&include_adult=false`,
    { cache: 'no-store' } // always fetch fresh data
  );

  if (!res.ok) {
    throw new Error('Error fetching data');
  }

  const data = await res.json();
  const results = data.results;

  return (
    <div>
      {results?.length === 0 && (
        <h1 className="text-center pt-6">No Results found.</h1>
      )}
      {results && <Results results={results} />}
    </div>
  );
}
