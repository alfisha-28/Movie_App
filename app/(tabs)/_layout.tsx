import { ImageBackground, StyleSheet, Text, Image, View } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';

const images = {
  highlight: require('../../assets/images/highlight.png'),
};

const icons = {
  home: require('../../assets/icons/home.png'),
  profile: require('../../assets/icons/person.png'),
  saved: require('../../assets/icons/save.png'),
  search: require('../../assets/icons/search.png'),
};

type TabIconProps = {
  icon: any;
  label: string;
  focused: boolean;
};

const TabIcon = ({ icon, label, focused }: TabIconProps) => {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        style={styles.activeIconWrapper}
        imageStyle={styles.iconBg}
      >
        <Image source={icon} style={[styles.icon, { tintColor: '#151312' }]} />
        <Text style={[styles.label, { color: '#000000ff' }]}>{label}</Text>
      </ImageBackground>
    );
  }

  return (
    <View style={styles.inactiveIconWrapper}>
      <Image source={icon} style={[styles.icon, { tintColor: '#A8A8A8' }]} />
    </View>
  );
};

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.home} label="Home" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.search} label="Search" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.saved} label="Saved" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.profile} label="Profile" focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#0F0D23',
    borderRadius: 40,
    marginHorizontal: 10,
    marginBottom: 50,
    height: 45,
    position: 'absolute',
    overflow: 'hidden',
    borderColor: '#0F0D23',

    // shadow
    elevation: 5, // Android
    shadowColor: '#000', // iOS
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  activeIconWrapper: {
    flexDirection: 'row',
    minWidth: 112,
    height: 44,
    marginTop: 7,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    overflow: 'hidden',

  },
  inactiveIconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
    borderRadius: 20,
    height: 48,
    width: 64,
  },
  iconBg: {
    borderRadius: 20,
  },
  icon: {
    width: 20,
    height: 20,
    margin: 6,
  },
  label: {
    fontSize: 14,
    fontWeight: '400',
  },
});
