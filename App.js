import CategoriesScreen from './src/screen/CategoriesScreen';
import Categories from './src/screen/CategoriesScreen'
import ProductsByCategorieScreen from './src/screen/ProductsByCategorieScreen';
import { useState } from 'react';


export default function App() {

  const [categorySelected, setCategorySelected] = useState('')

  const onSelectCategory = (category) =>{
    setCategorySelected(category)
  }

  return (
    <>{
      categorySelected
       ?
      <ProductsByCategorieScreen category={categorySelected}/>
      :
      <CategoriesScreen onSelectCategoryEvent={onSelectCategory}/>
    }
    </>

  );
}

