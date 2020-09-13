import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Thunderstorm: {
        iconName: "",
        gradient: []
    },
    Drizzle: {
        iconName: "",
        gradient: []
    },
    Rain: {
        iconName: "",
        gradient: []
    },
    Snow: {
        iconName: "",
        gradient: []
    },
    Atmosphere: {
        iconName: "",
        gradient: []
    },
    Clear: {
        iconName: "",
        gradient: []
    },
    Clouds: {
        iconName: "",
        gradient: []
    },
    Dust: {
        iconName: "",
        gradient: []
    },
    Mist: {
        iconName: "",
        gradient: []
    }
};

export default function Weather({temp, condition}){
    return (
        <LinearGradient
                colors={weatherOptions[condition].gradient}
                style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
            <MaterialCommunityIcons size={96} color="white" name={weatherOptions[condition].iconName}/>
            <Text style={styles.temp}>{temp}o</Text>
            </View>
            <View style={styles.halfContainer}>

            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm","Drizzle","Rain","Snow","Atmosphere","Clear","Clouds","Haze","Dust","Mist"]).isRequired
};

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp:{
        fontSize:42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});