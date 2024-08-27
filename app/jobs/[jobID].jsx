import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import styles from './JobDetailsStyles';

const JobDetailsScreen = () => {
    const router = useRouter();
    const {
        id,
        url,
        jobTitle, 
        companyName, 
        companyLogo,
        jobIndustry,
        jobType,
        jobGeo,
        jobLevel,
        jobExcerpt,
        jobDescription,
        pubDate,
        annualSalaryMin,
        annualSalaryMax,
        salaryCurrency,
    } = useLocalSearchParams();

    const formatJobDescription = (description) => {
      return description
          .replace(/<div>/g, '\n')
          .replace(/<\/div>/g, '\n')
          .replace(/<[^>]*>/g, '') // Remove any other HTML tags
          .trim();
  };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Text style={styles.goBackText}>Go back home</Text>
                </TouchableOpacity>
                <View style={styles.centered}>
                    <Image style={styles.logo} source={{ uri: companyLogo }} />
                    <Text style={styles.title}>{jobTitle}</Text>
                    <Text style={styles.companyName}>{companyName}</Text>
                </View>
                <Text style={styles.jobDetails}>
                    {jobGeo} | {jobType} | {jobLevel} | {jobIndustry}
                </Text>
                <Text style={styles.pubDate}>Posted on: {new Date(pubDate).toLocaleDateString()}</Text>
                <Text style={styles.bold}>Job Excerpt: </Text>
                <Text style={styles.jobDescription}>{jobExcerpt}</Text>
                <Text style={styles.bold}>Salary: </Text>
                <Text style={styles.salary}>
                    {annualSalaryMin} - {annualSalaryMax} {salaryCurrency}
                </Text>
                <Text style={styles.bold}>URL: </Text>
                <Text style={styles.url}>{url}</Text>
                <Text style={styles.bold}>Job Description: </Text>
                <Text style={styles.jobDescription}>{formatJobDescription(jobDescription)}</Text>
                
                
            </View>
        </ScrollView>
    );
};

export default JobDetailsScreen;
