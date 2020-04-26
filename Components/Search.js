import React from 'react'
import { StyleSheet, View, Butoon, TextUnput, TextInput, Button, FlatList, Text } from 'react-native'
import sons from '../Helpers/sonData'
import SonItem from './SonItem'

class Search extends React.Component {
    
    render() {
        return (
            <View style={styles.main_container}>
                <TextInput onChangeText={(text) => this._searchTextInputChanged(text)} placeholder="Nom du son" style={styles.textinput} />
                <Button title="Rechercher" onPress={() => { }} />

                <FlatList
                    data={sons}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <SonItem son={item}/>}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    main_container: {
        marginTop: 20,
        flex: 1
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }
})


export default Search