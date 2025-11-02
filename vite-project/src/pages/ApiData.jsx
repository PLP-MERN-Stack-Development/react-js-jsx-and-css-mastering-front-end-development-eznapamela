import React, { useState, useEffect } from 'react';
import Card from '../components/Card'; // ✅ use this instead of CardDemo
import Button from '../components/Button';

const ApiData = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  // Fetch posts from JSONPlaceholder API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
        );
        if (!res.ok) throw new Error('Failed to fetch data');
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  // Filter posts based on search term
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );
console.log("ApiData is rendering", { posts, loading, error });


  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">📡 Public API Data</h2>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full mb-4 dark:bg-gray-700 dark:text-white"
      />

      {/* Loading / Error States */}
      {loading && <p>Loading data...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {/* Data List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {!loading &&
          !error &&
          filteredPosts.map((post) => (
            <CardDemo key={post.id} title={post.title}>
              <p>{post.body}</p>
            </CardDemo>
          ))}
      </div>

      {/* Pagination buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <Button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          variant="secondary"
          disabled={page === 1}
        >
          Previous
        </Button>
        <span className="px-4 py-2">Page {page}</span>
        <Button onClick={() => setPage((prev) => prev + 1)} variant="primary">
          Next
        </Button>
      </div>
    </div>
  );
};

export default ApiData;
