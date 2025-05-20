import { Suspense } from 'react';
import SearchResults from './SearchResults';

export default function ResultsPage() {
  return (
    <Suspense fallback={<div className="text-center mt-20">Loading search results...</div>}>
      <SearchResults />
    </Suspense>
  );
}
