import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, Button, StatusBar, Image } from 'react-native';

function Auth(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>Authenticate!</Text>
            <Button
            title="Continue"
            onPress={() => props.navigation.replace("Home")}/>
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
export default Auth;