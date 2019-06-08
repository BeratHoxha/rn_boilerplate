import React, { Component } from 'react'
import AppNavigator 
  from './navigation/AppNavigator';
import { connect } 
  from 'react-redux'
import { AsyncStorage } 
  from 'react-native'
import { changeLanguage } 
  from './actions/language'
import I18n, { switchLanguage } 
  from './translations'
import NavigationService 
  from './helpers/navigationService'

class RenderAppNav extends Component {
  componentWillMount(){
    AsyncStorage.getItem('language').then((language) => {
      if(language){
        this.props.changeLanguage(language)
        switchLanguage(language, this)
      }else{
        AsyncStorage.setItem('language', 'en')
        switchLanguage('en', this)
      }
    })
  }

  render(){
    let { language } = this.props

    return( 
      <AppNavigator 
        screenProps={{language}}
        ref={ navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }} 
      />
    )
  }
}

function mapStateToProps({ language }){
  return { language }
}

export default connect(mapStateToProps, { changeLanguage })
                      (RenderAppNav)
