import React, {FC} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Colors } from '../../utils/colors';


interface HeaderProps {
  title?: string;
}

const Header: FC<HeaderProps> = ({title}) => {
  //const navigation = useNavigation();
  return (
    <View style={styles.navContainer}>
      <TouchableOpacity>
        <Image
          source={require('../../assets/images/arrow-left.png')}
          style={{width: 22, height: 22}}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text style={styles.navText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 45,
    alignItems:'flex-end',
    paddingBottom:8,
    backgroundColor:Colors.Header
  },
  navText: {
    color: '#07F3F3',
    fontSize: 14,

  },
});


export default Header;