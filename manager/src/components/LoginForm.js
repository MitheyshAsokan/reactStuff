import React, {Component} from 'react';
import {Card, CardSection, Input, Button} from './common';
import {emailChanged} from '../actions';
import {connect} from 'react-redux';

class LoginForm extends Component{

    onEmailChange(text){

    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                    label="Email"
                    placeHolder="email@gamil.com"
                    //Why do we bind?
                    onChangeText={this.onEmailChange.bind(this)}
                    />
                </CardSection>

                <CardSection>
                <Input
                    label="Password"
                    placeHolder="password"
                    />
                </CardSection>
                
                <CardSection>
                    <Button>Login</Button>
                </CardSection>
            </Card>
        );
    }
}

//This component is hooked up to a action maker
//This is done using the connect function.
//Upon this step the components prop fucntion has access to the action creator.
export default connect(null, emailChanged)(LoginForm);