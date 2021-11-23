import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


const CountryRows = ({ item }) => {
    return (
        <View style={styles.rows}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>
                <View>
                    <Image
                        source={{
                            uri: `https://www.countryflags.io/${item.CountryCode}/shiny/64.png`
                        }}
                        style={styles.flag}
                    />
                </View>
                <View style={{ marginRight: 100, marginTop: 5 }}>
                    <Text style={styles.countryName}>{item.Country}</Text>
                </View>
                <View>
                    <Text style={styles.totalCases}>{item.TotalConfirmed}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    rows: {
        width: '100%',
        marginTop: 10,
        marginBottom: 8,
        padding: 10
    },
    countryName: {
        fontSize: 15,
        color:'#ffffff',
        fontWeight: 'bold'
    },
    totalCases: {
        fontSize: 12,
        color:'#ffffff',
        fontWeight: 'bold',
        marginTop: 5
    },
    flag: {
        height: 30,
        width: 40,
        padding: 5, 
        borderRadius: 500
    }
});

export default CountryRows;