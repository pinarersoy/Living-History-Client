import React, { Component } from 'react';
import { connect } from 'react-redux';
import { style } from '@style/main';
import privateStyle from './style';
import { View, Text } from 'react-native';



export class CreateTextContentScene extends Component {

    render(){
    	return(
        <View style={[style.zPage]}>
          <View style={{flex:1}}>
            <Text>
              Create Text Content Scene
            </Text>
          </View>
        </View>
		  )
    }

}

function mapStateToProps (state) {
  return {
  }
}

function mapDispatchToProps (dispatch) {
  return {
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(CreateTextContentScene);