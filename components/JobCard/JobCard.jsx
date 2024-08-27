import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import styles from './JobCardStyles.js'; 

export default function JobCard({ jobs, onPressJob }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={jobs}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.jobItem} onPress={()=>onPressJob(item)}>
                        <Image
                            style={styles.companyLogo}
                            source={{ uri: item.companyLogo }}
                        />
                        <View style={styles.textContainer}>
                            <Text style={styles.companyName}>
                                {item.companyName}
                            </Text>
                            <Text style={styles.jobTitle}>
                                {item.jobTitle}
                            </Text>
                            <Text style={styles.jobGeo}>
                                {item.jobGeo}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}
