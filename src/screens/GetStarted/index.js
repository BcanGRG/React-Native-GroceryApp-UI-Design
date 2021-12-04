import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Button, Gap} from '../../components';
import {colors} from '../../res';
import {fonts} from '../../res/fonts';

import {IL_GetStarted_PNG} from '../../res/images/Illustrations';

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={IL_GetStarted_PNG} style={styles.image} />
      <View style={styles.wrapper_slogan}>
        <Text style={styles.txt_slogan}>Shop Your Daily</Text>
        <Text style={styles.txt_slogan}>Neccessary</Text>
      </View>
      <Gap height={90} />
      <Button
        onPress={() => navigation.replace('MainApp')}
        text="Get Started"
      />
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  image: {
    height: 255,
    resizeMode: 'stretch',
    width: '100%',
  },
  wrapper_slogan: {
    marginTop: 31,
  },
  txt_slogan: {
    fontSize: 30,
    color: colors.primary,
    textAlign: 'center',
    fontFamily: fonts.SemiBold,
  },
});
