import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f8f8f8',
    },
    jobItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        marginVertical: 8,
        borderRadius: 8,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    companyLogo: {
        width: 50,
        height: 50,
        borderRadius: 25, // Rounded image
        marginRight: 15, // Space between image and text
    },
    companyName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    jobTitle: {
        fontSize: 16,
        color: '#555',
        marginBottom: 5,
    },
    jobGeo: {
        fontSize: 14,
        color: '#777',
    },
});
