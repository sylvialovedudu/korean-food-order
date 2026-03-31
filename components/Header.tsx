'use client';

import { useState } from 'react';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount] = useState(3);

  return (
    <header className="header">
      <div className="header-container">
        {/* Search Bar */}
        <div className="search-bar">
          <svg
            className="search-icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="음식 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Cart Button */}
        <button className="cart-button" aria-label="장바구니">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </button>
      </div>

      <style jsx>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 100;
          background-color: var(--color-white);
          border-bottom: 1px solid var(--color-gray-200);
          padding: var(--spacing-md) var(--spacing-lg);
        }

        .header-container {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
        }

        .search-bar {
          flex: 1;
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          background-color: var(--color-gray-100);
          border-radius: var(--radius-full);
          padding: var(--spacing-sm) var(--spacing-md);
        }

        .search-icon {
          color: var(--color-gray-500);
          flex-shrink: 0;
        }

        .search-input {
          flex: 1;
          border: none;
          background: transparent;
          outline: none;
          font-size: 14px;
          color: var(--color-gray-900);
        }

        .search-input::placeholder {
          color: var(--color-gray-500);
        }

        .cart-button {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background-color: var(--color-gray-100);
          border: none;
          border-radius: var(--radius-full);
          cursor: pointer;
          color: var(--color-gray-700);
          transition: background-color 0.2s;
        }

        .cart-button:hover {
          background-color: var(--color-gray-200);
        }

        .cart-button:active {
          background-color: var(--color-gray-300);
        }

        .cart-badge {
          position: absolute;
          top: -4px;
          right: -4px;
          background-color: var(--color-secondary);
          color: var(--color-white);
          font-size: 11px;
          font-weight: 600;
          min-width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-full);
          padding: 0 5px;
        }
      `}</style>
    </header>
  );
}
