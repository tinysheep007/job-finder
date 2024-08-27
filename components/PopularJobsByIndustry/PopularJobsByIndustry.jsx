import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import axios from 'axios';
import handleCompanyLink from '@/utils/handleCompanyLogoLink';
import styles from "./PopularJobsByIndustryStyles";
import { useRouter } from 'expo-router';

export default function PopularJobsByIndustry({ industry = 'dev' }) { // Default to 'dev'
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const fetchJob = async () => {
        setLoading(true);
    
        let getLink = `https://jobicy.com/api/v2/remote-jobs?industry=${industry}`;

        try {
            const res = await axios.get(getLink);
            
            if (res.data.success === false) {
                console.log("API error:", res.data.error); 
                setJobs([]); 
                return;
            }
    
            let jobsArr = res.data.jobs;
    
            if (jobsArr.length < 1) {
                // Handle no results found
                console.log("No jobs found.");
                setJobs([]); // Clear jobs or set empty state
                return;
            }
    
            const newJobs = jobsArr.map((job) => {
                let { 
                    id, url, jobTitle, companyName, companyLogo,
                    jobIndustry, jobType, jobGeo, jobLevel, jobExcerpt,
                    jobDescription, pubDate, annualSalaryMin,
                    annualSalaryMax, salaryCurrency,
                 } = job;
                return {
                    id, url, jobTitle, companyName, 
                    companyLogo: handleCompanyLink(companyLogo),
                    jobIndustry, jobType, jobGeo, jobLevel, jobExcerpt,
                    jobDescription, pubDate, annualSalaryMin,
                    annualSalaryMax, salaryCurrency,
                };
            });
    
            setJobs(newJobs);
        } catch (error) {
            console.log("Error fetching jobs:", error);
            setJobs([]); 
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJob();
    }, [industry]); // Add industry as a dependency

    const handleJobPress = (job) => {
        // console.log("job is")
        // console.log(job)
        router.push({pathname:`/jobs/${job.id}`, params: job}); 
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Popular Jobs in {industry.charAt(0).toUpperCase() + industry.slice(1)}</Text>
            {loading ? (
                <View style={styles.loadingContainer}>
                    
                    <ActivityIndicator size="large" color="#0000ff" />
                    <Text style={styles.loadingText}>Loading...</Text>
                </View>
            ) : (
                <FlatList 
                    data={jobs}
                    renderItem={({ item }) => (
                        <View style={styles.jobItem}>
                            <TouchableOpacity onPress={()=>handleJobPress(item)}>
                                <Image 
                                    source={{ uri: item.companyLogo }} 
                                    style={styles.companyLogo}
                                />
                                <View style={styles.jobInfo}>
                                    <Text style={styles.jobTitle}>{item.jobTitle}</Text>
                                    <Text style={styles.jobCompany}>{item.companyName}</Text>
                                    <Text style={styles.jobLocation}>{item.jobGeo}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    contentContainerStyle={styles.jobList}
                />
            )}
        </View>
    );
}
