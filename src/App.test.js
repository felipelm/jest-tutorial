import React from 'react';
import App from './App';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App', () => {
  it('mounts', () => {
    const app = <App />;
    mount(app);
  });
});