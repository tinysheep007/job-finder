import { TextInput, View, TouchableOpacity, Image, Text } from "react-native";
import styles from './SearchStyles'; // Import the styles

export default function Search({ input, handleChangeInput, handleSearch }) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Find your dream job now"
                value={input}
                onChangeText={(e)=>handleChangeInput(e)}
            />
            
            <TouchableOpacity style={styles.button} onPress={handleSearch}>
                <Image 
                    style={styles.buttonImage}
                    source={{ uri: "https://www.iconpacks.net/icons/2/free-search-icon-2911-thumb.png" }}
                />
            </TouchableOpacity>
        </View>
    );
}
