import React from 'react';
import renderer from 'react-test-renderer';
import { TabView } from '../src';

test('TabView renders correctly', () => {
    const tabs = [{ title: 'Tab 1' }, { title: 'Tab 2', onExtraPress: () => {} }];
    const tree = renderer
        .create(
            <TabView tabs={tabs}>
                {[
                    <React.Fragment key='Tab 1'>Tab 1</React.Fragment>,
                    <React.Fragment key='Tab 2'>Tab 2</React.Fragment>,
                ]}
            </TabView>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
