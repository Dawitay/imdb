import Link from "next/link";

// src/app/not-found.jsx
export default function NotFound() {
  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-5xl font-bold mb-4 text-amber-500">404 - Page Not Found</h1>
      <p className="text-gray-500 text-lg mb-6">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="px-6 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600"
      >
        Go Home
      </Link>
    </div>
    </>
  );
}
