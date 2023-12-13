import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'
import { TextInput } from 'react-native'
import { MaterialIcons,Entypo } from '@expo/vector-icons'; 

const Search = (onSearchHandlerEvent) => {
    const [searchInput, setSearchInput] = useState('')
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.textInput}
        onChangeText={setSearchInput}
        placeholder='Buscar...'
        value={searchInput}
        ></TextInput>
        <TouchableOpacity onPress={()=>onSearchHandlerEvent(searchInput)}>
        <MaterialIcons name="youtube-searched-for" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={null}>
        <Entypo name="circle-with-cross" size={24} color="black" />
        </TouchableOpacity>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    searchContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding: 10

    },
    textInput:{
        width:'80%',
    }
})