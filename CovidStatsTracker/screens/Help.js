import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, Button, StatusBar, Image, ImageBackground } from 'react-native';
import 'react-native-gesture-handler';
import Hyperlink from 'react-native-hyperlink';
function Help(props) {
    
    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>
            <Image source={{uri:'http://cdn.onlinewebfonts.com/svg/img_261633.png'}} 
            style={{
                width: 30,
                height: 28,
                borderRadius: 5,
            }}></Image>  Help</Text>

            
            <Text style={styles.textBody}>
            The global COVID-19 pandemic makes this a deeply distressing time for all of us. Even if you or your loved ones haven’t contracted the virus, your life has likely been turned upside down by its spread. Whatever your circumstances, there are ways to help manage your fear, stress, and anxiety and protect your mental health.
            </Text>
            <Hyperlink
            linkDefault = {true}
                linkStyle={{color:'#cf3e23', fontSize: 20}}
                linkText={(url) => url === 'https://www.helpguide.org/articles/healthy-living/finding-joy-during-difficult-times.htm' ? 'Finding joy during difficult times' : url}>
                    <Text style={styles.textBody}>https://www.helpguide.org/articles/healthy-living/finding-joy-during-difficult-times.htm</Text>
            </Hyperlink>
            <Hyperlink
            linkDefault = {true}
                linkStyle={{color:'#cf3e23', fontSize: 20}}
                linkText={(url) => url === 'https://www.helpguide.org/articles/anxiety/dealing-with-uncertainty.htm' ? 'Dealing with uncertainty' : url}>
                    <Text style={styles.textBody}>https://www.helpguide.org/articles/anxiety/dealing-with-uncertainty.htm</Text>
            </Hyperlink>
            <Text style={styles.textBody}>
            Awareness about the spread of COVID-19 in the Philippines and the Government’s response to it is key to public health.

            Below are hotlines to help Filipinos find information related to the COVID-19 situation in the Philippines and seek help to professionals.
            </Text>
            <Text style={styles.iBody}>
            COVID Hotlines

            </Text>
            <Text style={styles.iBody}>The following hotlines are available for free: </Text>
            
            <Text style={{
                textAlign: 'center',
                marginTop: '4%',
                fontSize: 16,
                color: "#141211",}}>02 894-COVID</Text>
            <Text style={{
                textAlign: 'center',
                marginTop: '4%',
                fontSize: 16,
                color: "#141211",}}>02 894-26843</Text>

            <Text style={styles.iBody}>For PLDT, SMART, SUN, and TnT Subscribers:</Text>
            <Text style={{
                textAlign: 'center',
                marginTop: '4%',
                fontSize: 16,
                color: "#141211",}}>1555</Text> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        padding: 24,
        backgroundColor: "#ffdfd9"
},
    title: {
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: "#ffc3b8",
        color: "#20232a",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
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
    marginTop: 10,
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold"
},
    textBody: {
        textAlign: 'justify',
        marginTop: '15%',
        fontSize: 16,
        color: "#141211",
}

});
export default Help;