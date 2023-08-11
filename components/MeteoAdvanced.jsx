import React from 'react'
import { View } from 'react-native'
import { Txt } from './Txt'
import { meteoAdvenced } from '../styles/MeteoAdvanced.style'

export const MeteoAdvanced = ({dusk,down,wind}) => {
  return (
    <View style={meteoAdvenced.container}>
        <View style={meteoAdvenced.infoDetails}>
            <Txt style={{fontSize:20}}>{dusk}</Txt>
            <Txt style={{fontSize:16}}>Aube</Txt>
        </View>
        <View style={meteoAdvenced.infoDetails}>
            <Txt style={{fontSize:20}}>{down}</Txt>
            <Txt style={{fontSize:16}}>Crépuscule</Txt>
        </View>
        <View style={meteoAdvenced.infoDetails}>
            <Txt style={{fontSize:20}}>{wind}</Txt>
            <Txt style={{fontSize:16}}>Vent</Txt>
        </View>
    </View>
  )
}
