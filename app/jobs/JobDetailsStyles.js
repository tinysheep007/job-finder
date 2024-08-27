import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
    },
    centered: {
        alignItems: 'center',
        marginBottom: 5,
    },
    goBackText: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        backgroundColor: '#dbe9f4', 
        padding: 10,
        marginBottom: 20,
        borderRadius: 8, 
        alignSelf: 'flex-start',
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.2, 
        shadowRadius: 4,
        elevation: 2, 
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    companyName: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 1,
    },
    jobDetails: {
        fontSize: 16,
        marginBottom: 15,
        textAlign: 'center',
    },
    pubDate: {
        fontSize: 14,
        marginBottom: 10,
        color: '#555',
    },
    bold: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    jobDescription: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 15,
    },
    salary: {
        fontSize: 16,
        marginBottom: 10,
    },
    url: {
        fontSize: 14,
        color: '#007BFF',
        marginBottom: 25,
    },
});
