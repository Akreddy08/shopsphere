import { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import useFetch from "../hooks/useFetch";
import { PRODUCTS_API } from "../services/api";

function AllProducts() {

  const {
    data: products,
    loading,
    error
  } = useFetch(PRODUCTS_API);

  const [searchParams, setSearchParams] = useSearchParams();

  const [searchText, setSearchText] = useState(
    searchParams.get("search") || ""
  );
  

  const searchInputRef = useRef(null);

  // Search input change
  const handleSearch = (event) => {

    const value = event.target.value;

    setSearchText(value);

    if (value) {
      setSearchParams({ search: value });
    } else {
      setSearchParams({});
    }
  };

  // Focus search input
  const focusSearch = () => {
    searchInputRef.current.focus();
  };

  // Filter products
  const filteredProducts = products.filter((product) =>
    product.title
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  if (loading) {
    return (
      <div className="status-message">
        <h2>Loading products...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="status-message error">
        <h2>Something went wrong</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>

      <h2>All Products</h2>

      <p className="section-description">
        Search and explore our products.
      </p>

      {/* Search Section */}

      <div className="search-section">

        <input
          ref={searchInputRef}
          type="text"
          placeholder="Search products..."
          value={searchText}
          onChange={handleSearch}
        />

        <button onClick={focusSearch}>
          🔍 Search
        </button>

      </div>

      {/* Results */}

      {filteredProducts.length === 0 ? (

        <div className="empty-message">
          <h3>No products found</h3>
          <p>Try searching for another product.</p>
        </div>

      ) : (

        <>

          <p className="result-count">
            Showing {filteredProducts.length} products
          </p>

          <div className="products-grid">

            {filteredProducts.map((product) => (

              <ProductCard
                key={product.id}
                product={product}
              />

            ))}

          </div>

        </>

      )}

    </div>
  );
}

export default AllProducts;