import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

function Splash(props) {
    console.log(props);
    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>Welcome to COVID-19 Tracker Application!</Text>
            <Button 
            title="Tap to proceed to the application"
            onPress={() => props.navigation.replace("Authenticate")} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    padding: 24,
    backgroundColor: "#ffdfd9"
    },
    headerTitle: {
        alignSelf: "center",
        marginBottom: "70%",
        color: '#ffa796',
        fontSize: 28,
        borderColor: '#fff',
        borderWidth: 2,
        padding: 20,
        paddingLeft: "35",
        paddingRight: 40,
        backgroundColor: 'rgba(255,255,255,0.1)'
    },
});
export default Splash;