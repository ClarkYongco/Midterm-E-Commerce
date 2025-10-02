import React from "react";

export default function Filters({ sort, setSort }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 my-4">
      {/* Sort filter only */}
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="border rounded p-2"
      >
        <option value="">Sort by</option>
        <option value="asc">Price: Low → High</option>
        <option value="desc">Price: High → Low</option>
      </select>
    </div>
  );
}

