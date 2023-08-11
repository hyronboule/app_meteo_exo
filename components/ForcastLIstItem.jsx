import React from 'react'
import { View,Image } from 'react-native'
import { Txt } from './Txt'
import { ForecastStyle } from '../styles/Forecast.style'

export const ForcastLIstItem = ({image,day,date,temperature}) => {
  return (
    <View style={ForecastStyle.infoDetail}>
        <Image style= {ForecastStyle.img}source={image}/>
        <Txt style={{fontSize:20}}>{day}</Txt>
        <Txt style={{fontSize:20}}>{date}</Txt>
        <Txt style={{fontSize:20}}>{temperature}</Txt>
    </View>
  )
}
