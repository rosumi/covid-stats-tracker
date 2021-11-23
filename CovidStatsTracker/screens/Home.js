import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, Button, StatusBar, Image, ImageBackground } from 'react-native';
import 'react-native-gesture-handler';
import Hyperlink from 'react-native-hyperlink';


function Home(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
            <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/25/25694.png'}} 
            style={{
                width: 30,
                height: 28,
                borderRadius: 5,
            }}></Image>Home</Text>

            <Text style={styles.headerTitle}>
                LATEST NEWS AND GUIDELINES
            </Text>
            <Hyperlink
            linkDefault = {true}
                linkStyle={{color:'#cf3e23', fontSize: 20}}
                linkText={(url) => url === 'https://www.cdc.gov/coronavirus/2019-ncov/vaccines/fully-vaccinated.html' ? 'When You’ve Been Fully Vaccinated' : url}>
                    <Text style={styles.textBody}>https://www.cdc.gov/coronavirus/2019-ncov/vaccines/fully-vaccinated.html</Text>
            </Hyperlink>
            <Text> </Text>
            <Text> </Text>
            <Hyperlink
            linkDefault = {true}
                linkStyle={{color:'#cf3e23', fontSize: 20}}
                linkText={(url) => url === 'https://www.cdc.gov/coronavirus/2019-ncov/testing/index.html' ? 'Testing for COVID-19' : url}>
                    <Text style={styles.textBody}>https://www.cdc.gov/coronavirus/2019-ncov/testing/index.html</Text>
            </Hyperlink>
            <Text> </Text>
            <Text> </Text>
            <Hyperlink
            linkDefault = {true}
                linkStyle={{color:'#cf3e23', fontSize: 20}}
                linkText={(url) => url === 'https://www.cdc.gov/coronavirus/2019-ncov/your-health/quarantine-isolation.html' ? 'Quarantine and Isolation' : url}>
                    <Text style={styles.textBody}>https://www.cdc.gov/coronavirus/2019-ncov/your-health/quarantine-isolation.html</Text>
            </Hyperlink>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    padding: 24,
    backgroundColor: "#ffdfd9"
    },
    title: {
        alignSelf: "center",
        color: '#ffa796',
        fontSize: 28,
        borderColor: '#fff',
        borderWidth: 2,
        padding: 20,
        paddingLeft: "15%",
        paddingRight: 40,
        backgroundColor: 'rgba(255,255,255,0.1)'
      },
      headerTitle: {
        alignSelf: "center",
        color: '#ffa796',
        fontSize: 28,
        borderColor: '#fff',
        borderWidth: 2,
        padding: 20,
        paddingLeft: "35",
        paddingRight: 40,
        backgroundColor: 'rgba(255,255,255,0.1)'
    },
    iBody:{
        marginTop: '45%',
        fontSize: 32,
        textAlign: "center",
        fontWeight: "bold"
    },
    textBody: {
        marginTop: 10,
        fontSize: 24,
        textAlign: "center",
    }
    

});
export default Home;