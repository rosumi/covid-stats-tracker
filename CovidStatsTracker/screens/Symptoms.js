import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, Button, StatusBar, Image, ImageBackground, Content } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Hyperlink from 'react-native-hyperlink';
const Stack = createNativeStackNavigator();

const Symptoms = () => {
    return (
        <SafeAreaView style = {styles.container}>
            <Text style={styles.headerTitle}>
            <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/2785/2785819.png'}}>
            </Image>CORONAVIRUS 
            SYMPTOMS</Text>
            <View style={styles.cards}>
                <ScrollView
                    Vertical
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 170 }}
                >
                    
                    <View style={styles.cardView}>
                <View style={styles.title}>
            <Image style={styles.dashIcon} source={{uri: 'https://cdn-icons-png.flaticon.com/512/1497/1497115.png'}} ></Image>
        </View>
        <Text style={styles.textBody}>Headache</Text>
            </View>
                    <View style={styles.cardView}>
                <View style={styles.title}>
            <Image style={styles.dashIcon} source={{uri: 'https://cdn-icons-png.flaticon.com/512/3781/3781945.png'}} ></Image>
        </View>
        <Text style={styles.textBody}>Cough</Text>
            </View>
                    <View style={{
                borderRadius: 6,
                elevation: 3,
                backgroundColor: '#ffc5ba',
                shadowOffset: {width: 1, height: 1},
                shadowColor: '#333',
                shadowOpacity: 0.5,
                shadowRadius: 3,
                marginHorizontal: 4,
                marginVertical: 6,
            }}>
                <View style={styles.title}>
            <Image style={styles.dashIcon} source={{uri: 'https://i.pinimg.com/originals/87/d3/bf/87d3bfe034bfdc3f11c8733e7dd769d8.png'}} ></Image>
        </View>
        <Text style={styles.textBody}>Fever</Text>
            </View>
                    <View style={styles.cardView}>
                <View style={styles.title}>
            <Image style={styles.dashIcon} source={{uri: 'https://cdn-icons-png.flaticon.com/512/2927/2927735.png'}} ></Image>
        </View>
        <Text style={styles.textBody}>Difficulty in breathing</Text>
            </View>
                    <View style={{
                borderRadius: 6,
                elevation: 3,
                backgroundColor: '#ffc5ba',
                shadowOffset: {width: 1, height: 1},
                shadowColor: '#333',
                shadowOpacity: 0.5,
                shadowRadius: 3,
                marginHorizontal: 4,
                marginVertical: 6,
            }}>
                <View style={styles.title}>
            <Image style={styles.dashIcon} source={{uri: 'https://cdn-icons-png.flaticon.com/512/2038/2038172.png'}} ></Image>
        </View>
        <Text style={styles.textBody}>Sore throat</Text>
            </View>
                    <View style={styles.cardView}>
                <View style={styles.title}>
            <Image style={styles.dashIcon} source={{uri: 'https://cdn-icons-png.flaticon.com/512/387/387630.png'}} ></Image>
        </View>
        <Text style={styles.textBody}>Muscle or body aches</Text>
            </View>
                    <View style={styles.cardView}>
                <View style={styles.title}>
            <Image style={styles.dashIcon} source={{uri: 'https://cdn-icons-png.flaticon.com/512/3782/3782048.png'}} ></Image>
        </View>
        <Text style={styles.textBody}>New loss of taste or smell</Text>
            </View>
                    <View style={styles.cardView}>
                <View style={styles.title}>
            <Image style={styles.dashIcon} source={{uri: 'https://cdn-icons-png.flaticon.com/512/2038/2038401.png'}} ></Image>
        </View>
        <Text style={styles.textBody}>Nausea or vomiting</Text>
            </View>
                    <View style={styles.cardView}>
                <View style={styles.title}>
            <Image style={styles.dashIcon} source={{uri: 'https://cdn-icons-png.flaticon.com/512/1497/1497117.png'}} ></Image>
        </View>
        <Text style={styles.textBody}>Congestion or runny nose</Text>
            </View>
                    <View style={styles.cardView}>
                <View style={styles.title}>
            <Image style={styles.dashIcon} source={{uri: 'https://cdn-icons-png.flaticon.com/512/2927/2927511.png'}} ></Image>
        </View>
        <Text style={styles.textBody}>Diarrhea</Text>
            </View>
                    <View style={styles.cardView}>
                <View style={styles.title}>
            <Image style={styles.dashIcon} source={{uri: 'https://i.pinimg.com/originals/9e/ee/47/9eee47fc08255068d1adfaf30883792d.png'}} ></Image>
        </View>
        <Text style={styles.textBody}>Fatigue</Text>
            </View>
            <Hyperlink
            linkDefault = {true}
                linkStyle={{color:'#cf3e23', fontSize: 20}}
                linkText={(url) => url === 'https://www.hopkinsmedicine.org/health/conditions-and-diseases/coronavirus/coronavirus-frequently-asked-questions#knowingsymptoms' ? 'Knowing the Symptoms' : url}>
                    <Text style={styles.textBody}>More information to https://www.hopkinsmedicine.org/health/conditions-and-diseases/coronavirus/coronavirus-frequently-asked-questions#knowingsymptoms</Text>
            </Hyperlink>

            
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#ffdfd9",
        justifyContent: 'center',
        alignItems: 'center',
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
        alignSelf: "center",
    },
    dashIcon: {
        width: 100,
        height: 100,
        borderRadius: 5,
        marginLeft: "35%",
        TextAlign: "center", 
          
    },
    cards: {
        marginTop: -90,
    },
    col: {
        flexDirection: "row"
        
    },
    title: {
        color: '#fff',
        fontSize: 28,
        borderColor: '#fff',
        borderWidth: 2,
        padding: 20,
        paddingLeft: 40,
        paddingRight: 40,
        backgroundColor: 'rgba(255,255,255,0.1)'
    },
    headerTitle: {
        color: '#ffa796',
        fontSize: 28,
        borderColor: '#fff',
        borderWidth: 2,
        padding: 20,
        paddingLeft: "35",
        paddingRight: 40,
        backgroundColor: 'rgba(255,255,255,0.1)'
    },
    cardView: {
        borderRadius: 6,
                elevation: 3,
                backgroundColor: '#ffc5ba',
                shadowOffset: {width: 1, height: 1},
                shadowColor: '#333',
                shadowOpacity: 0.5,
                shadowRadius: 5,
                marginHorizontal: 4,
                marginVertical: 6,
    },
    number: {
        fontWeight: "bold",
        fontSize: 22
    },
    flatList:{
        marginTop:10
    }
    

});
export default Symptoms;