import { Pressable } from "react-native";
import { StyleSheet,View,Text } from "react-native";

export default function ProductLIstItem({title,onPress,bgColor}){

    return(
        <View style={styles.productOutItemContainer}>
            <Pressable style={styles.pressableView}>
                <View style={styles.productItemInnerContainer}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles=StyleSheet.create({
 productOutItemContainer:{
    flex:1,
    margin:16,
    borderRadius:8
 },
 pressableView:{
    flex:1,

 },
 productItemInnerContainer:{
    flex:1,
    padding:15,
    justifyContent:'center',
    alignItem:'center'

 },
 title:{
    fontWeight:600,
    fontSize:20,
    color:'#000000'
 }
})