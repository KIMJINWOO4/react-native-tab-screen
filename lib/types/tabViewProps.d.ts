import TabItem from './tabItem';
import { TextStyle, ViewStyle } from 'react-native';
export type TabViewProps = {
    tabs: TabItem[];
    activeTabStyle?: ViewStyle;
    inactiveTabStyle?: ViewStyle;
    tabTextStyle?: TextStyle;
    activeTabTextStyle?: TextStyle;
    onTabChange?: (activeIndex: number) => void;
    children: React.ReactNode[];
    tabBarPosition?: string;
};
export default TabViewProps;
