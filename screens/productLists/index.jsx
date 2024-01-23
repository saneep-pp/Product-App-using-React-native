import { useContext } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  FlatList,
} from "react-native";
import { Context } from "../../context";
import ProductLIstItem from "../../components/productListItem";

export default function ProductLists() {

    function createRandomColor(){
        let letters="0123456789ABCDEF";
        let color="#";
        for(let i=0;i<6;i++){
            color+=letters[Math.floor(Math.random()*16)];
        }
        return color;
    }
  const { products, loading } = useContext(Context);
  if (loading) {
    <ActivityIndicator style={styles.loader} color={"red"} size={"large"} />;
  }
  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(itemData1)=>itemData1.id}

        renderItem={(itemData) => <ProductLIstItem title={itemData.item.title} /> }
      
      />
      <Text>ProductLists</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
