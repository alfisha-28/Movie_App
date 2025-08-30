import { StyleSheet, TextInput, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const icons = {
  search: require('../assets/icons/search.png'),
};

interface Props {
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onPress?: () => void;
}

const SearchBar = ({ placeholder, value, onChangeText, onPress }: Props) => {
  return (
    <TouchableOpacity 
      style={styles.container} 
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Image source={icons.search} style={styles.icon} resizeMode="contain" />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#ab8bff"
        value={value}
        onChangeText={onChangeText}
        editable={onChangeText !== undefined} // if using router.push, disable typing
      />
    </TouchableOpacity>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1C1631',
    borderRadius: 24,
    paddingHorizontal: 16,
    height: 40,
    width: 350,
    marginHorizontal: 16,
    marginBottom: 20,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#ab8bff',
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 14,
  },
});
