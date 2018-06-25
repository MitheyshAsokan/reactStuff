import Firebase from 'firebase';
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Header, Button, Spinner, Card, CardSection} from './components/Common';
import LoginForm from './components/LoginForm';

class App extends Component{

    state = {
        LoggedIn: null
    }

    componentWillMount(){
        Firebase.initializeApp(
            {
                apiKey: 'AIzaSyD4ZRDwCGXfL3FhHWVJUKxhOejuIlYO5H4',
                authDomain: 'auth-89ad3.firebaseapp.com',
                databaseURL: 'https://auth-89ad3.firebaseio.com',
                projectId: 'auth-89ad3',
                storageBucket: 'auth-89ad3.appspot.com',
                messagingSenderId: '596118124038'
            }
        );

        Firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({LoggedIn: true});
            }else{
                this.setState({LoggedIn: false});
            }
        });
    }

    renderContent(){
        switch(this.state.LoggedIn){
            case true:
                return(
                    <Card>
                        <CardSection>
                        <Button onPress={() => Firebase.auth().signOut()}>Log Out</Button>
                        </CardSection>       
                    </Card>
                ); 
            case false: 
                return <LoginForm />
            default: 
                return <Spinner size='large'/>
        }
    }

    render(){
        return(
            <View>
                <Header headerText='Authentication'/>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;