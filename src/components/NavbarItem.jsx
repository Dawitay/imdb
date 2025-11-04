"use client"
import Link  from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';

export default function NavbarItem({title, param}) {
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre');
  return (
    <div className={`mx-4 hover:text-amber-600 font-semibold p-2 ${
        genre && genre === param && "underline underline-offset-8 decoration-4 decoration-amber-500 round-lg"
    }`}>
      <Link href={`/?genre=${param}`}>{title}</Link>
    </div>
  )
}