import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import reducer from '../../reducers';
import Product from '../../components/Product';
import ProductMock from '../../__mocks__/ProductMock';
describe('<Product />', () => {
  test('Render del componente Product', () => {
    const product = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>
    );
    expect(product.length).toEqual(1);
  });
  // simular el click '
  test('Comprobar el boton comprar', () => {
    const handleAddToCart = jest.fn(); // llamar a la funcion sin usar la real
    const wrapper = mount(
      <ProviderMock>
        <Product product={ProductMock} handleAddToCart={handleAddToCart} />
      </ProviderMock>
    );
    wrapper.find('button').simulate('click');
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });
});
