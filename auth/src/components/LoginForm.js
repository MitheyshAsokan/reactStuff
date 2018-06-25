import firebase from 'firebase';
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Card, CardSection, Button, Input, Spinner} from './Common'


class LoginForm extends Component{

    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    }

    onButtonPress(){
        const {email, password} = this.state;

        this.setState({error: '', loading: true});

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch((() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));
        }));
    }

    onLoginSuccess(){
        this.setState({
            email: '', 
            password: '', 
            error: '', 
            loading: false
        });
    }

    onLoginFail(){
        this.setState({
            error: 'Authentication Failed', 
            loading: false
        });
    }

    renderButton(){
        if(this.state.loading){
            return <Spinner size='small' />;
        }else {
            return <Button onPress={this.onButtonPress.bind(this)}>Log In</Button>;
        }
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                    label='Email' 
                    placeHolder='user@gmail.com'
                    value={this.state.email}
                    onChangeText={chngText => this.setState({email: chngText})}
                    />
                </CardSection>

                <CardSection>
                <Input
                    label='Password' 
                    placeHolder='*********'
                    secureTextEntry
                    value={this.state.password}
                    onChangeText={chngText => this.setState({password: chngText})}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>{this.state.error}</Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;