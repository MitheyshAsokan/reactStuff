import React, {Component} from 'react';
import {View, ScrollView} from 'react-native'; 
import Axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component{

    state = {
        albums: []
    };

    componentWillMount(){
        Axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(
            (response) => {
                this.setState({
                    albums: response.data
                });
            }
        );
    }

    renderAlbums(){
        return this.state.albums.map(
            (album) => {
                return(
                    <AlbumDetail key={album.title} album={album}/>
                );
            }
        );
    }

    render() {

        console.log(this.state);

        return (
        <ScrollView>
        {this.renderAlbums()}
        </ScrollView>
        );
    }
}

export default AlbumList;