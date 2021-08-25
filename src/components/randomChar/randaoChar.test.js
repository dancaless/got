import React from 'react';
import RandomChar from './randomChar_old.js';
import { shallow } from 'enzyme';

describe('Testing <RandomChar/>', () => {
    const char = shallow(<RandomChar />);
    // Тестируем состояние 
    describe('Testing snap and state', () => {

        it('RandomChar have rendered correctly', () => {
            expect(char).toMatchSnapshot();//это тестирование по Снимку
        });

        it('RandomChar state "char" is empty object', () => {
            expect(char.state().char).toBeObject();//проеряет - объект ли char в стейте
        });

        it('RandomChar state "loading" is true', () => {
            expect(char.state().loading).toBeTruthy();
        });

        it('RandomChar state "error" is false', () => {
            expect(char.state().error).toBeFalsy();
        });
    });
    // ТЕстируем события
    describe('Handlers test', () => {
        it('testing onCharLoaded', () => {
            char.instance().onCharLoaded();//instance - на каждом экземплре
            expect(char.state().loading).toBeFalsy();
        });

        it('testing onError', () => {
            char.instance().onError();
            expect(char.state().loading).toBeFalsy();//instance - на каждом экземплре
            expect(char.state().error).toBeTruthy();
        });

        it('testing updateChar', () => {
            char.instance().updateChar();//instance - на каждом экземплре
            expect(char.state().loading).toBeFalsy();
        });
    });

});
