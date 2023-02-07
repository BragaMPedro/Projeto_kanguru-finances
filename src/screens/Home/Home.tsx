import { Text, View } from "react-native"
import { styles } from "./styles"

export const Home = () => {
    return(
        <View style={styles.container}>
            <Text style={{ color: "#fff", textAlign: "center", fontSize: 14, fontWeight: "bold" }}>
                Página Home maneirissima aqui
            </Text>
        </View>
    )
}