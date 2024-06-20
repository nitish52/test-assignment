import React, {FC} from 'react';
import {ColorValue, Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Colors } from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';

interface HomeProps {
  title?: string;
  imgsrc?:ImageSourcePropType,
  features:string[],
  bgColor?:ColorValue
}

const HomeComponent: FC<HomeProps> = ({title,imgsrc,features,bgColor}) => {
  //const navigation = useNavigation();
  const navigation = useNavigation<any>();
  return (
    <View style={[styles.homeContainer,{
      backgroundColor:bgColor
    }]}>
      <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
        <Image
          source={imgsrc}
          style={{width: 22, height: 22}}
          resizeMode="contain"
        />
     
      <Text style={[styles.homeText,{
        fontWeight:'500'
      }]}>{title}</Text>
      {
        features.map((val,index)=>{
          return(

            <View>
                <Text style={styles.homeText}>{val}</Text>
              </View>

          );
        })
      }
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flexDirection: 'column',
    margin:12,
    padding:12
  },
  homeText: {
    color: '#000',
    fontSize: 14,
    marginTop:10,
  },
});


export default HomeComponent;