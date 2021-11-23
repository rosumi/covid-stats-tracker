import React, { Component, useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, Button, StatusBar, Image, ImageBackground, FlatList } from 'react-native';
import 'react-native-gesture-handler';
import CountryRows from '../src/components/CountryRows';


function CovidHome(props) {


    const url = "https://api.covid19api.com/summary";
    const [data, setData] = useState();
    const [isLoading, setIsloading] = useState(false);
    const [error,setError] = useState();
    useEffect(() => {
        const fetchCovidData = async () => {
            setIsloading(true);
            try {
                const result = await fetch(url);
                const response = await result.json();
                setData(response)
                setIsloading(false);
            }
            catch (e) {
                console.log(e)
            }
        }
        fetchCovidData();
    }, []);

    return (
        <SafeAreaView style = {styles.container}>
            <Text style={styles.title}>
            <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/2785/2785819.png'}} 
            style={styles.dashIcon}></Image>COVID-19 DASHBOARD</Text>
            <View style={styles.cards}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 170 }}
                >
                    
                    <View style={{
                flex: 1,
                backgroundColor: "#D93B4A"
            }}>
                <View style={styles.col}>
                    <Image style={styles.dashIcon} source={{uri: 'http://cdn.onlinewebfonts.com/svg/img_490454.png'}} ></Image>
                </View>
                <Text style={styles.title}>Total Cases</Text>
                <Text style={{
                    fontWeight: "bold",
                    fontSize: 22,
                    color: "#D93B4A" == "#D93B4A" ? "#FFF" : "#000",
                    borderRadius: 30,
                    padding: 15,
                    marginLeft: 20,
                    
                }}>
                    {data ? data.Global.TotalConfirmed : 0}
                </Text>
            </View>
            
            

            <View style={{
                ...styles.container,
                backgroundColor: "#D93B4A"
            }}>
                <View style={styles.col}>
                    <Image style={styles.dashIcon} source={{uri: 'https://cdn.iconscout.com/icon/free/png-256/medical-recovery-2070543-1750357.png'}} ></Image>
                </View>
                <Text style={styles.title}>Total Recovery</Text>
                <Text style={{
                    fontWeight: "bold",
                    fontSize: 22,
                    color: "#D93B4A" == "#D93B4A" ? "#FFF" : "#000" ,
                    borderRadius: 30,
                    padding: 15,
                    marginLeft: 20,
                    
                }}>
                    {data ? data.Global.TotalRecovered : 0}
                </Text>
            </View>

            

            <View style={{
                ...styles.container,
                backgroundColor: "#D93B4A"
            }}>
                <View style={styles.col}>
                    <Image style={styles.dashIcon} source={{uri: 'https://s3.amazonaws.com/user-media.venngage.com/307607-91ed2ea19ba2fe6508b1e472ec714c48.png'}} ></Image>
                </View>
                <Text style={styles.title}>Total Death</Text>
                <Text style={{
                    fontWeight: "bold",
                    fontSize: 22,
                    color: "#D93B4A" == "#D93B4A" ? "#FFF" : "#000",
                    borderRadius: 30,
                    padding: 15,
                    marginLeft: 20,
                    
                }}>
                    {data ? data.Global.TotalDeaths : 0}
                </Text>
            </View>
                </ScrollView>
            </View>

            <View>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <Text style={styles.casesHeading}>Covid Cases by region</Text>
                </View>
            </View>
            <View style={styles.flatList}>
                <FlatList 
                    data={data && data.Countries ?  data.Countries : 0}
                    renderItem={({item})=> <CountryRows item={item}/>} 
                />
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: "#1c2732",
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        
        marginTop: 8,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: "#61dafb",
        color: "#ffffff",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
      },
      casesHeading:{
        color: '#ffffff',
        fontSize: 15,
        alignSelf: 'center',
        fontWeight: 'bold',
        marginTop: 30
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
    },
    dashIcon: {
        width: 30,
        height: 28,
        borderRadius: 5,
        marginLeft: 70,
        marginTop: 20
    },
    cards: {
        marginTop: -90,
    },
    col: {
        flexDirection: "row"
        
    },
    title: {
        color: '#ffffff',
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: 'bold',
        marginTop: 30
    },
    number: {
        fontWeight: "bold",
        fontSize: 22
    },
    flatList:{
        marginTop:10
    }
    

});
export default CovidHome;