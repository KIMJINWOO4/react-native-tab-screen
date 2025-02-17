import React, {useState} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import styles from '../styles/defaultStyles';
import TabViewProps from '../types/tabViewProps';

const TabView: React.FC<TabViewProps> = ({
  tabs,
  activeTabStyle,
  inactiveTabStyle,
  tabTextStyle,
  activeTabTextStyle,
  onTabChange,
  tabBarPosition = 'top',
  children,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabPress = (index: number) => {
    console.log(`Tab pressed: ${tabs[index].title} (index: ${index})`);
    if (tabs[index].onExtraPress) {
      console.log(`onExtraPress 호출 전, index: ${index}`);
      tabs[index].onExtraPress();
      console.log(`onExtraPress 호출 후, index: ${index}`);
    }
    setActiveTab(index);
    onTabChange && onTabChange(index);
  };

  const renderTabBar = () => (
    <View style={styles.tabContainer}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.tab,
            inactiveTabStyle,
            activeTab === index && [styles.activeTab, activeTabStyle],
          ]}
          onPress={() => handleTabPress(index)}>
          {tab.icon && <View style={styles.iconContainer}>{tab.icon}</View>}
          <Text
            style={[
              styles.tabText,
              tabTextStyle,
              activeTab === index && [styles.activeTabText, activeTabTextStyle],
            ]}>
            {tab.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  if (tabBarPosition === 'top') {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.flexContainer}>
          {renderTabBar()}
          <View style={styles.flexContainer}>
            {children && children[activeTab]}
          </View>
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <View style={styles.flexContainer}>
        <SafeAreaView style={styles.contentSafeArea}>
          {children && children[activeTab]}
        </SafeAreaView>
        {renderTabBar()}
      </View>
    );
  }
};

export default TabView;
