export default function handleCompanyLink(link) {
    const defaultLink = 'https://www.searchenginejournal.com/wp-content/uploads/2017/06/shutterstock_268688447.jpg';

    // Regular expression to check if the link ends with common image file extensions
    const imageExtensions = /\.(jpg|jpeg|png|gif|bmp|webp|svg)$/i;

    // Check if the link is valid and ends with an image file extension
    if (link && imageExtensions.test(link)) {
        return link;
    } else {
        return defaultLink;
    }
}
