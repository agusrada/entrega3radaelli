import { StyleSheet, Text, View, FlatList } from "react-native";
import products_data from "../data/products_data.json";
import ProductItem from "../components/productItem";
import Header from "../components/header";
import { useState, useEffect } from "react";
import Search from "../components/search";

const ProductsByCategorieScreen = ({ category }) => {
  const [ProductsByCategory, setProductsByCategory] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const productsFilteredByCategory = products_data.filter(
      (product) => product.category === category
    );
    const productsFiltered = productsFilteredByCategory.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
    );
    setProductsByCategory(productsFiltered);
  }, [category]);

  const renderProductItem = ({ item }) => (
    <ProductItem style={styles.container} product={item} />
  )
  const onSearch = (search)=> {
    setSearch(search)

  }

  return (
    <>
      <Header title="Productos" />
      <Search />
      <FlatList
        data={ProductsByCategory}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </>
  );
};

export default ProductsByCategorieScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
  },
});
