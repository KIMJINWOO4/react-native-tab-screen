import React from 'react';
import { View, Text, Alert } from 'react-native';
import { TabView } from 'react-native-tab-screen';
import TabItem from 'react-native-tab-screen/lib/types/tabItem';

const tabs: TabItem[] = [
    { title: 'Tab 1' },
    { title: 'Tab 2', onExtraPress: () => Alert.alert('Hello') },
    { title: 'Tab 3' },
];

const TabOneScreen = () => (
    <View>
        <Text>Tab 1</Text>
    </View>
);
const TabTwoScreen = () => (
    <View>
        <Text>Tab 2</Text>
    </View>
);
const TabThreeScreen = () => (
    <View>
        <Text>Tab 3</Text>
    </View>
);

const App = () => {
    return (
        <TabView tabs={tabs} onTabChange={(index) => console.log(index)} tabBarPosition='top'>
            {[<TabOneScreen key='tab1' />, <TabTwoScreen key='tab2' />, <TabThreeScreen key='tab3' />]}
        </TabView>
    );
};

export default App;
