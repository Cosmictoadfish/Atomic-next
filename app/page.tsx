"use client";

import MainLayout from "../components/layout/MainLayout";
import { SearchBar } from "../components/molecules";
import { CardGrid } from "../components/organisms";

export default function Home() {
  return (
    <MainLayout>
      <section className="flex flex-col items-center justify-center gap-8">
        <h1 className="text-3xl font-bold">Atomic Design Layout Practice</h1>
        <SearchBar
          placeholder="Search rentals..."
          onSearch={(value) => alert(`Searching for: ${value}`)}
        />
      </section>

      <CardGrid />
    </MainLayout>
  );
}



