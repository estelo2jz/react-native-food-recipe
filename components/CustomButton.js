import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, FONTS } from '../constants';

const CustomButton = ({buttonText ,navigation, buttonContainerStyle, colors, onPress}) => {
    if (colors.length > 0) {
      return (
        <TouchableOpacity
          onPress={onPress}
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={colors}
            style={{
              ...buttonContainerStyle,
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                color: COLORS.white,
                ...FONTS.h3
              }}
            >
              {buttonText}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity
          style={{
            ...buttonContainerStyle
          }}
          onPress={onPress}
        >
          <Text
            style={{
              textAlign: 'center',
              color: COLORS.white,
              ...FONTS.h3
            }}
          >
            {buttonText}
          </Text>
        </TouchableOpacity>
      )
    }
}

const styles = StyleSheet.create({

})

export default CustomButton

