"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var defaultStyles_1 = __importDefault(require("../styles/defaultStyles"));
var TabView = function (_a) {
    var tabs = _a.tabs, activeTabStyle = _a.activeTabStyle, inactiveTabStyle = _a.inactiveTabStyle, tabTextStyle = _a.tabTextStyle, activeTabTextStyle = _a.activeTabTextStyle, onTabChange = _a.onTabChange, _b = _a.tabBarPosition, tabBarPosition = _b === void 0 ? 'top' : _b, children = _a.children;
    var _c = (0, react_1.useState)(0), activeTab = _c[0], setActiveTab = _c[1];
    var handleTabPress = function (index) {
        console.log("Tab pressed: ".concat(tabs[index].title, " (index: ").concat(index, ")"));
        if (tabs[index].onExtraPress) {
            console.log("onExtraPress \uD638\uCD9C \uC804, index: ".concat(index));
            tabs[index].onExtraPress();
            console.log("onExtraPress \uD638\uCD9C \uD6C4, index: ".concat(index));
        }
        setActiveTab(index);
        onTabChange && onTabChange(index);
    };
    var renderTabBar = function () { return (react_1.default.createElement(react_native_1.View, { style: defaultStyles_1.default.tabContainer }, tabs.map(function (tab, index) { return (react_1.default.createElement(react_native_1.TouchableOpacity, { key: index, style: [
            defaultStyles_1.default.tab,
            inactiveTabStyle,
            activeTab === index && [defaultStyles_1.default.activeTab, activeTabStyle],
        ], onPress: function () { return handleTabPress(index); } },
        tab.icon && react_1.default.createElement(react_native_1.View, { style: defaultStyles_1.default.iconContainer }, tab.icon),
        react_1.default.createElement(react_native_1.Text, { style: [
                defaultStyles_1.default.tabText,
                tabTextStyle,
                activeTab === index && [defaultStyles_1.default.activeTabText, activeTabTextStyle],
            ] }, tab.title))); }))); };
    if (tabBarPosition === 'top') {
        return (react_1.default.createElement(react_native_1.SafeAreaView, { style: defaultStyles_1.default.safeArea },
            react_1.default.createElement(react_native_1.View, { style: defaultStyles_1.default.flexContainer },
                renderTabBar(),
                react_1.default.createElement(react_native_1.View, { style: defaultStyles_1.default.flexContainer }, children && children[activeTab]))));
    }
    else {
        return (react_1.default.createElement(react_native_1.View, { style: defaultStyles_1.default.flexContainer },
            react_1.default.createElement(react_native_1.SafeAreaView, { style: defaultStyles_1.default.contentSafeArea }, children && children[activeTab]),
            renderTabBar()));
    }
};
exports.default = TabView;
