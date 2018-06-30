import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm'

class App extends Component{

    componentWillMount(){
        //This is initializing firebase
        //Grab this shit from firebase.com once you create your proj
        //this is for web, ignore the <script> tags
        const config = {
            apiKey: 'AIzaSyCWhDkfNCabRSUDDW33G6_aySUgVXvL6Ac',
            authDomain: 'manager-ff884.firebaseapp.com',
            databaseURL: 'https://manager-ff884.firebaseio.com',
            projectId: 'manager-ff884',
            storageBucket: '',
            messagingSenderId: '634348372664'
        };

        firebase.initializeApp(config);
    }


    render(){
        return(
            //This provider tag hooks up react to redux via react-redux
            //you pass in a redux store into it via a pro
            //It needs a reducer that does not pass in undefined
            //So make sure to pass an empty array at the least
            <Provider store={createStore(reducer)}>
                <View>
                    <LoginForm />
                </View>
            </Provider>
        );
    }
};

export default App;