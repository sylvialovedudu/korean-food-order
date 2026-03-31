'use client';

import { KoreanFood } from '../data/foods';
import FoodCard from './FoodCard';

interface FoodListProps {
  foods: KoreanFood[];
}

export default function FoodList({ foods }: FoodListProps) {
  return (
    <section className="food-list-section">
      <div className="section-header">
        <h2 className="section-title">한식 메뉴</h2>
        <span className="section-count">총 {foods.length}개</span>
      </div>

      <div className="food-grid">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>

      <style jsx>{`
        .food-list-section {
          padding: var(--spacing-lg);
        }

        .section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: var(--spacing-lg);
        }

        .section-title {
          font-size: 20px;
          font-weight: 700;
          color: var(--color-gray-900);
        }

        .section-count {
          font-size: 14px;
          color: var(--color-gray-500);
        }

        .food-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--spacing-md);
        }

        @media (max-width: 360px) {
          .food-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
