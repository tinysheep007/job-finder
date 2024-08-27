import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './AdvanceSearchStyles'; // Ensure this import path is correct

const AdvanceSearchModal = ({ visible, onClose, handleAdvancedSearch }) => {

    const [geo, setGeo] = useState("");
    const [industry, setIndustry] = useState("");
    const [count, setCount] = useState(5);

    const handleSave = () => {
        handleAdvancedSearch({ geo, industry, count });
        onClose();
    };

    return (
        <Modal
            transparent={true}
            animationType="slide"
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.title}>Advanced Search</Text>
                    
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Geo:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter geo"
                            value={geo}
                            onChangeText={(e)=>setGeo(e)}
                        />
                    </View>
                    
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Industry:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter industry"
                            value={industry}
                            onChangeText={(e)=>setIndustry(e)}
                        />
                    </View>
                    
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Count:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Search count"
                            keyboardType="numeric"
                            value={count}
                            onChangeText={(e)=>setCount(e)}
                        />
                    </View>
                    
                    <TouchableOpacity style={styles.button} onPress={handleSave}>
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

export default AdvanceSearchModal;
