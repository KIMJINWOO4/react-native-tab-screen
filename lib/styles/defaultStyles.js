"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
exports.default = react_native_1.StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    flexContainer: {
        flex: 1,
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#1AA5AA',
        paddingVertical: 10,
    },
    tab: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },
    activeTab: {
        borderBottomWidth: 2,
        borderBottomColor: 'white',
    },
    tabText: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontWeight: 'bold',
        fontSize: 16,
    },
    activeTabText: {
        color: '#FFFFFF',
    },
    iconContainer: {
        marginRight: 5,
    },
    extraActionText: {
        marginLeft: 5,
        fontSize: 14,
        color: 'yellow',
    },
    contentSafeArea: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: react_native_1.Platform.OS === 'android' ? react_native_1.StatusBar.currentHeight : 0,
    },
});
