import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Card from "./card";



const CategoryItem = ({category, onSelectCategoryEvent}) => {
    return (
        <TouchableOpacity onPress={()=>onSelectCategoryEvent(category)}> 
            <Card style={styles.cardContainer}>
                <Text style={styles.text}>{category}</Text>
            </Card>    
       </TouchableOpacity>      

        
    )
}

export default CategoryItem

const styles =StyleSheet.create ({
    cardContainer: {
        margin: 20,
        padding: 15,
        textAlign:'center',
        alignItems:'center',
    },
    text: {
        fontSize: 20

    }
})