import React from 'react'
import { StyleSheet, View, Butoon, TextUnput, TextInput, Button, FlatList, Text, Image } from 'react-native'

class SonItem extends React.Component {
    render() {
        const son = this.props.son
        console.log(son)
        return (
            <View style={styles.main_container}>
                <Image
                    style={styles.image}
                    source={ son.image }  

                />

                <View style={styles.content_container}>
                    <View style={styles.header_container}>
                        <Text style={styles.title_text}>{son.title}</Text>
                        <Text style={styles.title_vote}>{son.vote_average}</Text>
                    </View>

                    <View style={styles.description_container}>
                        <Text style={styles.title_description} numberOfLines={6}>{son.overview}</Text>
                    </View>

                    <View style={styles.date_container}>
                        <Text style={styles.title_date}>{son.release_date}</Text>
                    </View>
                </View>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    main_container: {
        height: 190,
        flexDirection: 'row'
    },
    content_container: {
        flex: 1,
        margin: 5
    },
    header_container: {
        flex: 3,
        flexDirection: 'row'
        // backgroundColor:'red'
    },
    description_container: {
        flex: 7,
    },
    date_container: {
        flex: 1
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5
    },
    title_vote: {
        fontWeight: 'bold',
        fontSize: 26,
        color: '#666666'
    },
    title_description: {
        fontStyle: 'normal'
    },
    title_date: {
        textAlign: 'right',
        fontSize: 14
    },
    image: {
        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: 'gray'
    }
})


export default SonItem