'use client';

import Header from '../components/Header';
import FoodList from '../components/FoodList';
import { koreanFoods } from '../data/foods';

export default function Home() {
  return (
    <main className="container">
      <Header />
      <FoodList foods={koreanFoods} />
    </main>
  );
}
