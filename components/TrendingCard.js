import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Platform, Image } from 'react-native'

import { BlurView } from '@react-native-community/blur';

import { COLORS, SIZE, FONTS, icons, SIZES } from '../constants';

const RecipeCardInfo = ({recipeItem}) => {
  return (
    <BlurView
      blurType="dark"
      style={styles.recipeCardContainer}
    >

    </BlurView>
  )
}

const TrendingCard = ({ containerStyle, recipeItem, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        height: 350,
        width: 250,
        marginTop: SIZES.radius,
        marginRight: 20,
        borderRadius: SIZES.radius,
        ...containerStyle
      }}
      onPress={onPress}
      >
      <Image 
        source={recipeItem.image}
        resizeMode="cover"
        style={{
          marginLeft: 20,
          width: 250,
          height: 350,
          borderRadius: SIZES.radius
        }}
      />
      {/* Category */}
      <View
        style={{
          position: 'absolute',
          top: 25,
          left: 35,
          paddingHorizontal: SIZES.radius,
          paddingVertical: 5,
          backgroundColor: COLORS.transparentGray,
          borderRadius: SIZES.radius,
        }}
      >
        <Text
          style={{
            color: COLORS.white,
            ...FONTS.h4
          }}
        >
          {recipeItem.category}
        </Text>
      </View>

      {/* Card Info */}
      <RecipeCardInfo 
          recipeItem={recipeItem}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  recipeCardContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    height: 100,
    paddingVertical: SIZES.radius,
    paddingHorizontal: SIZES.base,
    borderRadius: SIZES.radius
  }
})

export default TrendingCard

