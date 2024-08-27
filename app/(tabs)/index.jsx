import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from 'expo-router';
import styles from "./HomeStyles";
import PopularJobsByIndustry from "../../components/PopularJobsByIndustry/PopularJobsByIndustry.jsx";

export default function Home() {
    const router = useRouter();

    return (    
        <View style={{flex: 1}}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.bigTitle}>Job Finder</Text>

                <TouchableOpacity style={styles.touchableOpacity} onPress={() => { router.push("/search") }}>
                    <Text style={styles.touchableText}>
                        Go search for your dream job!
                    </Text>
                </TouchableOpacity>

                <PopularJobsByIndustry industry="business"/>
                <PopularJobsByIndustry industry="copywriting"/>
                <PopularJobsByIndustry industry="supporting"/>
                <PopularJobsByIndustry industry="data-science"/>
                
                {/* <PopularJobsByIndustry industry="design-multimedia"/>
                <PopularJobsByIndustry industry="admin"/>
                <PopularJobsByIndustry industry="seller"/> */}
            </ScrollView>
        </View>
    );
}
