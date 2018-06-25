import React from 'react';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
import {View,AppRegistry} from 'react-native'; 

const App = () => {
    return(
        <View style={{flex: 1}}>
            <Header headerText={'Albums'}/>
            <AlbumList/>
        </View>
        
    );
};

AppRegistry.registerComponent('albums', () => App);
