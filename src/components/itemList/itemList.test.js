import React from 'react';
import ItemList from './itemListOld';
import { mount } from 'enzyme';
import gotService from '../../services/gotService'
// mount - чтобы и влоденность тестировать

describe('Testing <ItemList/>', () => {
    const service = new gotService();
    const list = mount(<ItemList
        getData={service.getAllHouses}
        renderItem={({ name }) => name} />)
    it('Click on item list must rerender all list in 1 instance', () => {
        // Устанавливаем кастомный state (юзаем методы setState, find из enzyme)
        list.setState({ itemList: [{ name: 'wqw', id: 1 }, { name: 'wqw', id: 2 }] });
        list.find('.list-group-item:first-child').simulate('click');
        expect(list.find('ul')).toHaveLength(1);
    })
})