import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, Button, StatusBar, Image, ImageBackground, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import Hyperlink from 'react-native-hyperlink';

function More(props) {
    const [show1, setShow1] = useState(true)
    const [show2, setShow2] = useState(true)
    const [show3, setShow3] = useState(true)
    const [show4, setShow4] = useState(true)
    const [show5, setShow5] = useState(true)
    const [show6, setShow6] = useState(true)
    const [show7, setShow7] = useState(true)
    const [show8, setShow8] = useState(true)
    const [show9, setShow9] = useState(true)
    const [show10, setShow10] = useState(true)
    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>
            <Image source={{uri:'https://static.thenounproject.com/png/2940532-200.png'}} 
            style={{
                width: 30,
                height: 28,
                borderRadius: 5,
            }}></Image>Frequently Asked Questions</Text>

            
            <Text onClick = {()=>setShow1(!show1)} style={ styles.cardView }>
            What is COVID-19?
            </Text>
            {
                show1?<Text style={ styles.textBody}>COVID-19 is a disease caused by a virus called SARS-CoV-2. Most people with COVID-19 have mild symptoms, but some people can become severely ill. Although most people with COVID-19 get better within weeks of illness, some people experience post-COVID conditions. Post-COVID conditions are a wide range of new, returning, or ongoing health problems people can experience more than four weeks after first being infected with the virus that causes COVID-19. Older people and those who have certain underlying medical conditions are more likely to get severely ill from COVID-19. Vaccines against COVID-19 are safe and effective.</Text>:null
            }
            <Text onClick = {()=>setShow2(!show2)} style={ styles.cardView }>
            How does the virus spread?
            </Text>
            {
                show2?<Text style={ styles.textBody}>OVID-19 is spread in three main ways:

                Breathing in air when close to an infected person who is exhaling small droplets and particles that contain the virus.
                Having these small droplets and particles that contain virus land on the eyes, nose, or mouth, especially through splashes and sprays like a cough or sneeze.
                Touching eyes, nose, or mouth with hands that have the virus on them.</Text>:null
            }
            <Text onClick = {()=>setShow3(!show3)} style={ styles.cardView }>
            How to Protect Yourself & Others?
            </Text>
            <Hyperlink linkDefault={true}>{
                show3?<Text style={ styles.textBody}>
                <Hyperlink
            linkDefault = {true}
                linkStyle={{color:'#cf3e23', fontSize: 20}}
                linkText={(url) => url === 'https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html' ? 'How to Protect Yourself & Others' : url}>
            
                <Text style={styles.textBodyLeft}>(a) Get vaccinated.</Text>
                <Text style={styles.textBodyLeft}>(b) Wear a mask.</Text>
                <Text style={styles.textBodyLeft}>(c) Stay 6 feet away from others.</Text>
                <Text style={styles.textBodyLeft}>(d) Avoid crowded places.</Text>
                <Text style={styles.textBodyLeft}>(e) Wash your hands often.</Text>
                <Text style={styles.textBodyLeft}>(f) Clean and disinfect.</Text>
                <Text style={styles.textBodyLeft}>(g) Monitor your health daily.</Text>
                
                <Text style={styles.textBodyLeft}>Know more on https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html</Text>
                </Hyperlink></Text>:null
            }</Hyperlink>
            
            
            <Text onClick = {()=>setShow4(!show4)} style={ styles.cardView }>
            How long does it take for symptoms of the coronavirus disease to appear?
            </Text>
            {
                show4?<Text style={ styles.textBody}>On average it takes 5–6 days from when someone is infected with the virus for symptoms to show, however it can take up to 14 days.</Text>:null
            }

            <Text onClick = {()=>setShow5(!show5)} style={ styles.cardView }>
            Should I use soap and water or hand sanitizer to protect against COVID-19?
            </Text>
            {
                show5?<Text style={ styles.textBody}>Handwashing is one of the best ways to protect yourself and your family from getting sick. Wash your hands often with soap and water for at least 20 seconds, especially after blowing your nose, coughing, or sneezing; going to the bathroom; and before eating or preparing food. If soap and water are not readily available, use an alcohol-based hand sanitizer with at least 60% alcohol.</Text>:null
            }
            <Text onClick = {()=>setShow6(!show6)} style={ styles.cardView }>
            Should I use soap and water or hand sanitizer to protect against COVID-19?
            </Text>
            {
                show6?<Text style={ styles.textBody}>Handwashing is one of the best ways to protect yourself and your family from getting sick. Wash your hands often with soap and water for at least 20 seconds, especially after blowing your nose, coughing, or sneezing; going to the bathroom; and before eating or preparing food. If soap and water are not readily available, use an alcohol-based hand sanitizer with at least 60% alcohol.</Text>:null
            }
            <Text onClick = {()=>setShow7(!show7)} style={ styles.cardView }>
            How do vaccines prevent disease?
            </Text>
            {
                show7?<Text style={ styles.textBody}>Vaccines mimic the virus or bacteria that causes disease and triggers the body’s creation of antibodies. These antibodies will provide protection once a person is infected with the actual disease-causing virus or bacteria.</Text>:null
            }
            <Text onClick = {()=>setShow8(!show8)} style={ styles.cardView }>
            How do vaccines differ?
            </Text>
            {
                show8?<Text style={ styles.textBody}>Vaccines differ in their composition and how they trigger the immune response to create antibodies. These antibodies protect the body from microorganisms and serve as protection once a person gets infected with disease. Vaccines can be inactivated, weakened or killed copies of the whole or part of the virus or bacteria, or genetic product (like mRNA vaccines) that creates protein copies without causing disease.</Text>:null
            }
            <Text onClick = {()=>setShow9(!show9)} style={ styles.cardView }>
            What are the possible side effects of vaccination?
            </Text>
            {
                show9?<Text style={ styles.textBody}>The possible side effects of a vaccine include pain, redness, itchiness or swelling at the injection site (which may last a few hours); fever; feeling of weakness or fatigue; headache; dizziness; diarrhea; or nausea. Consult the nearest healthcare professional if you experience any of these.</Text>:null
            }
            <Text onClick = {()=>setShow10(!show10)} style={ styles.cardView }>
            What are the recommendations for someone who has symptoms of COVID-19?
            </Text>
            {
                show10?<Text style={ styles.textBody}>If you are sick with COVID-19 or think you might have COVID-19, follow the steps to care for yourself and to help protect other people in your home and community.
                <Hyperlink
            linkDefault = {true}
                linkStyle={{color:'#cf3e23', fontSize: 20}}
                linkText={(url) => url === 'https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html' ? 'What to Do If You Are Sick' : url}>
            
                <Text style={styles.textBodyLeft}>(a) Stay at home (except to get medical care).</Text>
                <Text style={styles.textBodyLeft}>(b) Separate yourself from others.</Text>
                <Text style={styles.textBodyLeft}>(c) Monitor your symptoms.</Text>
                <Text style={styles.textBodyLeft}>(d) Wear a mask over your nose and mouth when around others.</Text>
                <Text style={styles.textBodyLeft}>(e) Cover your coughs and sneezes.</Text>
                <Text style={styles.textBodyLeft}>(f) Wash your hands often.</Text>
                <Text style={styles.textBodyLeft}>(g) Clean high-touch surfaces every day.</Text>
                <Text style={styles.textBodyLeft}>(h) Avoid sharing personal household items.</Text>
                <Text style={styles.textBodyLeft}>Know more on https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html</Text>
                </Hyperlink></Text>:null
            }
            

        </View>
    );
}

const styles = StyleSheet.create({container: {
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
      fontSize: 32,
      textAlign: "center",
      fontWeight: "bold"
  },
  textBody: {
      marginTop: 10,
      fontSize: 16,
      textAlign: "center",
  },
  textBodyLeft: {
      marginTop: 10,
      fontSize: 16,
      textAlign: "left",
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
    fontSize: 22,
},

});
export default More;