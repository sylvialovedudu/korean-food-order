'use client';

import { KoreanFood } from '../data/foods';

interface FoodCardProps {
  food: KoreanFood;
}

export default function FoodCard({ food }: FoodCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ko-KR').format(price);
  };

  return (
    <article className="food-card">
      <div className="food-image-wrapper">
        <img
          src={food.image}
          alt={food.name}
          className="food-image"
          loading="lazy"
        />
        <div className="food-tags">
          {food.tags.map((tag) => (
            <span key={tag} className="food-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="food-content">
        <div className="food-header">
          <h3 className="food-name">{food.name}</h3>
          <p className="food-name-en">{food.nameEn}</p>
        </div>

        <p className="food-description">{food.description}</p>

        <div className="food-rating">
          <svg
            className="star-icon"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span className="rating-score">{food.rating}</span>
          <span className="rating-count">({food.reviewCount.toLocaleString()})</span>
        </div>

        <div className="food-footer">
          <span className="food-price">{formatPrice(food.price)}원</span>
          <button className="add-button" aria-label="장바구니에 추가">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .food-card {
          display: flex;
          flex-direction: column;
          background-color: var(--color-white);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          transition: box-shadow 0.2s, transform 0.2s;
          cursor: pointer;
        }

        .food-card:active {
          box-shadow: var(--shadow-md);
          transform: scale(0.98);
        }

        .food-image-wrapper {
          position: relative;
          width: 100%;
          padding-top: 66.67%; /* 3:2 aspect ratio */
          background-color: var(--color-gray-100);
        }

        .food-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .food-tags {
          position: absolute;
          top: var(--spacing-md);
          left: var(--spacing-md);
          display: flex;
          flex-wrap: wrap;
          gap: var(--spacing-xs);
        }

        .food-tag {
          background-color: rgba(0, 0, 0, 0.7);
          color: var(--color-white);
          font-size: 11px;
          font-weight: 600;
          padding: 4px 8px;
          border-radius: var(--radius-sm);
        }

        .food-content {
          padding: var(--spacing-md);
        }

        .food-header {
          margin-bottom: var(--spacing-sm);
        }

        .food-name {
          font-size: 18px;
          font-weight: 700;
          color: var(--color-gray-900);
          margin-bottom: 2px;
        }

        .food-name-en {
          font-size: 13px;
          color: var(--color-gray-500);
          font-weight: 400;
        }

        .food-description {
          font-size: 13px;
          color: var(--color-gray-600);
          line-height: 1.4;
          margin-bottom: var(--spacing-md);
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .food-rating {
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
          margin-bottom: var(--spacing-md);
        }

        .star-icon {
          color: var(--color-accent);
          flex-shrink: 0;
        }

        .rating-score {
          font-size: 14px;
          font-weight: 600;
          color: var(--color-gray-900);
        }

        .rating-count {
          font-size: 12px;
          color: var(--color-gray-500);
        }

        .food-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .food-price {
          font-size: 18px;
          font-weight: 700;
          color: var(--color-primary);
        }

        .add-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background-color: var(--color-primary);
          border: none;
          border-radius: var(--radius-full);
          color: var(--color-white);
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .add-button:hover {
          background-color: var(--color-primary-dark);
        }

        .add-button:active {
          transform: scale(0.95);
        }
      `}</style>
    </article>
  );
}
