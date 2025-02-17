# React-Native-Tab-Screen ✨

A customizable React Native tab view component that allows you to easily position the tab bar at the top or bottom of the screen. Perfect for building flexible and engaging mobile interfaces! 🚀


# Features

- **Flexible Tab Bar Position**  
  Place the tab bar at the top or bottom of the screen to suit your design needs.

- **Customizable Styles**  
  Easily customize active/inactive tab styles, text styles, and more to match your app's theme.

- **Extra Actions**  
  Attach extra action callbacks to specific tabs for additional interactivity.

- **Safe Area Handling**  
  Automatically respects safe areas on both iOS and Android for a polished look.
  
  When using the bottom tab bar layout, only the upper part of the screen is wrapped in a `SafeAreaView` to ensure that content isn’t obscured by the notch or status bar. 👍
# Installation

Install via npm:

```bash
npm install react-native-tab-screen
```

Or using Yarn:
```bash
yarn add react-native-tab-screen
```


# How To Use

Below is a demo example of how to integrate and use the TabView component in your React Native project.

This example shows a tab view with three tabs, where one tab has an extra action that triggers an alert when pressed.

```ts
import React from 'react';
import {View, Text, Alert} from 'react-native';
import {TabView} from 'react-native-tab-screen';
import TabItem from 'react-native-tab-screen/lib/types/tabItem';

const tabs: TabItem[] = [
  {title: 'Tab 1'},
  {title: 'Tab 2', onExtraPress: () => Alert.alert('Hello')},
  {title: 'Tab 3'},
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

const SomeScreen = () => {
  return (
    <TabView
      tabs={tabs}
      onTabChange={index => console.log(index)}
      tabBarPosition="top">
      {[
        <TabOneScreen key="tab1" />,
        <TabTwoScreen key="tab2" />,
        <TabThreeScreen key="tab3" />,
      ]}
    </TabView>
  );
};
```

# Simple Example

Below are two examples showcasing the tab view component with different tab bar positions:

| Top Example | Bottom Example |
|-------------|----------------|
| ![Top Example](https://github.com/user-attachments/assets/2522caaa-1b5c-4aa5-87c8-a03a876a6f4a) | ![Bottom Example](https://github.com/user-attachments/assets/84fe0ef1-546f-4205-9389-dcea49e8038e) |

# API Reference


## Props

- **tabs**: `TabItem[]`  
  An array of tab objects. Each object supports:
  - **title**: `string` (required) – The label of the tab.
  - **icon**: `React.ReactNode` (optional) – An optional icon to display alongside the title.
  - **onExtraPress**: `() => void` (optional) – A callback function executed when the tab is pressed.

- **tabBarPosition**: `'top' | 'bottom'`  
  Sets the position of the tab bar. Defaults to `'top'`.

- **activeTabStyle**: `ViewStyle` (optional)  
  Custom style for the active tab container.

- **inactiveTabStyle**: `ViewStyle` (optional)  
  Custom style for inactive tab containers.

- **tabTextStyle**: `TextStyle` (optional)  
  Custom text style for tab labels.

- **activeTabTextStyle**: `TextStyle` (optional)  
  Custom text style for the active tab label.

- **onTabChange**: `(activeIndex: number) => void` (optional)  
  Callback fired when the active tab changes.

- **children**: `React.ReactNode[]`  
  An array of components corresponding to each tab’s content. Ensure the order matches the `tabs` array.

## Contributing

Contributions are very welcome! 

If you have ideas for improvements, bug fixes, or new features, please feel free to submit an issue or a pull request on [GitHub](https://github.com/KIMJINWOO4/react-native-tab-screen).

You can also leave your feedback via issues.

Let's build something awesome together!


## License

This project is licensed under the MIT License.
