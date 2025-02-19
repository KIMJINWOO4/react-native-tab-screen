import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
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
        if (tabs[index].onExtraPress) {
            tabs[index].onExtraPress();
        }
        setActiveTab(index);
        onTabChange && onTabChange(index);
    };

    const renderTabBar = () => (
        <View style={styles.tabContainer}>
            {tabs.map((tab, index) => (
                <TouchableOpacity
                    key={index}
                    style={[styles.tab, inactiveTabStyle, activeTab === index && [styles.activeTab, activeTabStyle]]}
                    onPress={() => handleTabPress(index)}
                >
                    {tab.icon && <View style={styles.iconContainer}>{tab.icon}</View>}
                    <Text
                        style={[
                            styles.tabText,
                            tabTextStyle,
                            activeTab === index && [styles.activeTabText, activeTabTextStyle],
                        ]}
                    >
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
                    <View style={styles.flexContainer}>{children && children[activeTab]}</View>
                </View>
            </SafeAreaView>
        );
    } else {
        return (
            <View style={styles.flexContainer}>
                <SafeAreaView style={styles.contentSafeArea}>{children && children[activeTab]}</SafeAreaView>
                {renderTabBar()}
            </View>
        );
    }
};

export default TabView;
