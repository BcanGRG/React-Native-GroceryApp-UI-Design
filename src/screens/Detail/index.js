import React from 'react';
import {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  ScrollView,
} from 'react-native';

import {Button, Counter, Gap, Header} from '../../components';
import BoxRelatedItems from '../../components/molecules/BoxRelatedItems';
import {
  colors,
  fonts,
  IL_Cauliflawer_PNG,
  IL_Grapes_PNG,
  IL_RedOnion,
  IL_Tomato_PNG,
} from '../../res';

const Detail = ({navigation, route}) => {
  const dataParams = route.params;
  const bgColor = dataParams.bgColor;
  const isDarkMode = useColorScheme() === 'dark';
  const [total, setTotal] = useState(0);

  const dataRelatedProducts = [
    {
      name: 'Grapes',
      icon: IL_Grapes_PNG,
      bgColor: 'rgba(227,206,243,0.5)',
      price: 1.53,
    },
    {
      name: 'Tometo',
      icon: IL_Tomato_PNG,
      bgColor: 'rgba(255, 234, 232, 0.5)',
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: 'Red Onion',
      icon: IL_RedOnion,
      bgColor: 'rgba(251, 216, 224, 0.5)',
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: 'Cauliflower',
      icon: IL_Cauliflawer_PNG,
      bgColor: 'rgba(140, 250, 145,0.5)',
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];
  const onCounterChange = value => {
    setTotal(value);
  };

  return (
    <View style={styles.flex1(bgColor)}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View>
        {/* Header */}
        <Header onPress={() => navigation.goBack()} />
        {/* Image */}
        <View style={styles.wrapperImage}>
          <Image source={dataParams.icon} style={styles.image} />
        </View>
        {/* Content */}
        <View style={styles.content}>
          {/* top Content*/}
          <View style={styles.wrapperTopContent}>
            <View style={styles.rowTopContent}>
              <Text style={styles.name}>{dataParams.name}</Text>
              <Counter onValueChange={onCounterChange} />
            </View>
            <Text style={styles.price}>{dataParams.price} / kg </Text>
          </View>

          {/* Description */}
          <Text style={styles.desc}> {dataParams.desc} </Text>

          {/* Related Items */}
          <View style={styles.wrapperRelatedItems}>
            <Text style={styles.title}>Related Items</Text>

            {/* scrollView */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.scroll}>
                {dataRelatedProducts.map((item, index) => {
                  return (
                    <BoxRelatedItems
                      key={index}
                      image={item.icon}
                      name={item.name}
                      price={item.price}
                      bgColor={item.bgColor}
                    />
                  );
                })}
              </View>
            </ScrollView>
          </View>

          {/* Button add to cart*/}
          <Gap height={50} />
          <Button text="Add To Card" />
        </View>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  flex1: bgColor => ({
    flex: 1,
    backgroundColor: bgColor,
  }),
  wrapperImage: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
  },
  image: {
    height: 150,
    width: 180,
    resizeMode: 'contain',
  },
  content: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 30,
    paddingTop: 34,
  },
  wrapperTopContent: {
    marginBottom: 28,
    paddingHorizontal: 20,
  },
  rowTopContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    color: colors.black,
    fontFamily: fonts.SemiBold,
    fontSize: 20,
  },
  price: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.black,
  },
  desc: {
    paddingHorizontal: 20,
    color: colors.black,
  },

  wrapperRelatedItems: {
    marginTop: 25,
  },
  title: {
    fontFamily: fonts.SemiBold,
    fontSize: 18,
    color: colors.primary,
    paddingHorizontal: 20,
  },
  scroll: {
    flexDirection: 'row',
    marginTop: 20,
    paddingLeft: 20,
  },
});
