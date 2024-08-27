import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        padding: 15, 
        backgroundColor: 'white',
        borderRadius: 10, // Rounded corners for the entire container
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        marginVertical: 10, // Vertical margin for spacing between sections
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333', // Darker text color for better contrast
        marginBottom: 15,
    },
    jobItem: {
        flexDirection: 'row', // Ensure items are laid out horizontally
        alignItems: 'center', // Center items vertically
        padding: 12,
        marginHorizontal: 8, // Space between items
        backgroundColor: '#f1f1f1',
        borderRadius: 10, // Rounded corners for each job item
        borderWidth: 1,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    companyLogo: {
        width: 55, // Slightly larger size
        height: 55, // Slightly larger size
        borderRadius: 27.5, // To make the image circular
        marginRight: 15, // Space between image and text
    },
    jobInfo: {
        flex: 1, // Take up remaining space
    },
    jobTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333', // Darker text color for better contrast
    },
    jobCompany: {
        fontSize: 14,
        color: '#777', // Subtle text color
    },
    jobLocation: {
        fontSize: 12,
        color: '#999', // Even more subtle text color
    },
    loadingText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#000',
        marginTop: 10,
    },
    loadingContainer: {
        alignItems: 'center', // Center horizontally
        justifyContent: 'center', // Center vertically
        height: 200, // Fixed height for consistent size
        marginVertical: 5, // Match margin of other components if needed
    },
    jobList: {
        flexDirection: 'row', // Ensure horizontal layout
    }
});
