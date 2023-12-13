import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import Header from '../components/header'
import categories_data from '../data/categories_data.json'
import CategoryItem from '../components/categoryItem'



const CategoriesScreen = ({onSelectCategoryEvent}) => {
    
   const renderCategoryItem =({item}) =>(
    <CategoryItem category={item} onSelectCategoryEvent={onSelectCategoryEvent} />
   )


  return (
    <>
    <Header title="LA VACA LOLA" />
    <FlatList
      data={categories_data}
      renderItem={renderCategoryItem}
      kexExtractor={item=>item}
    />
    </>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
  
    
})