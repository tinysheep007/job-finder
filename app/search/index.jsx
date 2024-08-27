import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import axios from 'axios';
import JobCard from "../../components/JobCard/JobCard";
import Search from "../../components/Search/Search";
import AdvancedSearchModal from "../../components/AdvanceSearch/AdvanceSearchModal"; 
import styles from "./SearchStyles";
import handleCompanyLink from "../../utils/handleCompanyLogoLink";
import PopularJobsByIndustry from "../../components/PopularJobsByIndustry/PopularJobsByIndustry.jsx";
import { useRouter } from 'expo-router';

export default function HomeScreen() {
    const router = useRouter();
    const [jobs, setJobs] = useState([]);
    const [input, setInput] = useState("");
    const [searchCt, setSearchCt] = useState(10);
    const [searchGeo, setSearchGeo] = useState("");
    const [searchIndustry, setSearchIndustry] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchJob = async (searchObj) => {
        setLoading(true);
        console.log("Searching with parameters:", searchObj);
    
        let { tag, count, geo, industry } = searchObj;
    
        let getLink = "https://jobicy.com/api/v2/remote-jobs?";

        if (tag) {
            getLink += `tag=${tag.toLowerCase()}&`;
        }
        if (count) {
            getLink += `count=${count}&`;
        }
        if (geo) {
            getLink += `geo=${geo.toLowerCase()}&`;
        }
        if (industry) {
            getLink += `industry=${industry.toLowerCase()}&`;
        }
    
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
                    id,url,jobTitle, companyName, companyLogo,
                    jobIndustry,jobType,jobGeo,jobLevel,jobExcerpt,
                    jobDescription,pubDate,annualSalaryMin,
                    annualSalaryMax,salaryCurrency,
                 } = job;
                return {
                    id,url,jobTitle, companyName, 
                    companyLogo: handleCompanyLink(companyLogo),
                    jobIndustry,jobType,jobGeo,jobLevel,jobExcerpt,
                    jobDescription,pubDate,annualSalaryMin,
                    annualSalaryMax,salaryCurrency,
                };
            });
    
            setJobs(newJobs);
        } catch (error) {
            console.log("Error fetching jobs:", error);
            setJobs([]); 
        } finally{
            setLoading(false);
        }
    };
    

    useEffect(() => {
        fetchJob({
            count: searchCt,
            tag: input,
            geo: searchGeo,
            industry: searchIndustry,
        });
    }, []);

    const handleChangeInput = (text) => {
        setInput(text);
    };

    const handleSearch = () => {
        fetchJob({ 
            count: searchCt,
            tag: input,
            geo: searchGeo,
            industry: searchIndustry
        });
    };

    const handleAdvancedSearch = ({ geo, industry, count }) => {
        setSearchGeo(geo);
        setSearchIndustry(industry);
        setSearchCt(count);
        fetchJob({ geo, industry, count, tag: input });
    };

    const handleJobPress = (job) => {
        // console.log("job is")
        // console.log(job)
        router.push({pathname:`/jobs/${job.id}`, params: job}); 
    };

    return (
        <View style={styles.container}>
             
            <TouchableOpacity style={styles.backButton} onPress={()=>router.push("/")}>
                <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
            
            <Text style={styles.bigTitle}>Job Finder</Text>

            <Search
                input={input}
                handleChangeInput={handleChangeInput}
                handleSearch={handleSearch}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.buttonText}>Advanced Search</Text>
            </TouchableOpacity>
            {
                loading ?  <View style={styles.activityIndicatorContainer}>
                        <Text style={styles.activityIndicatorText}>Loading ...</Text>
                        <ActivityIndicator style={styles.activityIndicator} size="large" color="#0000ff" />
                    </View> : (
                    <>
                        <JobCard jobs={jobs} onPressJob={handleJobPress} />
                        <AdvancedSearchModal
                            visible={modalVisible}
                            onClose={() => setModalVisible(false)}
                            handleAdvancedSearch={handleAdvancedSearch}
                        />
                        {/* <PopularJobsByIndustry /> */}
                    </>
                )
            }
            
        </View>
    );
}
