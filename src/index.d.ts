import { ComponentType, ReactNode } from 'react';
import { ViewStyle, TextStyle } from 'react-native';

export interface TabItem {
    title: string;
    icon?: ReactNode;
    onExtraPress?: () => void;
}

export interface TabViewProps {
    tabs: TabItem[];
    activeTabStyle?: ViewStyle;
    inactiveTabStyle?: ViewStyle;
    tabTextStyle?: TextStyle;
    activeTabTextStyle?: TextStyle;
    onTabChange?: (activeIndex: number) => void;
    tabBarPosition?: 'top' | 'bottom';
    children: ReactNode[];
}

declare const TabView: ComponentType<TabViewProps>;

export { TabView };
