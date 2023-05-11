import React from 'react';
import { create } from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header';

describe('<Header />', () => {
  const header = shallow(
    <ProviderMock>
      <Header />
    </ProviderMock>,    
  );
  test('Test Render Header', () => {
    expect(header.length).toEqual(1);
  });
  test('Render del título', () => {
    const header2 = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header2.find('.Header-title').text()).toEqual('Platzi Store');
  });
});

describe('Header SnapShot', () => {
  test('Comprobar el SnapShot de Header', () => {
    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.toJSON()).toMatchSnapshot();
  })
})
