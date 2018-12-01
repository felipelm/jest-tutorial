import React from 'react';
import App from './App';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GithubAPI from './GithubApi';

configure({ adapter: new Adapter() });

jest.mock('./GithubApi', () => {
  return {
    getAllRepos: jest.fn(username => {
      return [{ full_name: 'Repo 0' }, { full_name: 'Repo Test' }];
    }),
  };
});

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    const app = <App />;
    wrapper = mount(app);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('calls GithubAPI getAllRepos and renders', async () => {
    expect(GithubAPI.getAllRepos).toBeNotBeCalled;
    await wrapper.find('p').at(0).simulate('click');
    expect(GithubAPI.getAllRepos).toBeCalledWith('felipelm');
    wrapper.update()
    expect(wrapper.find('p').at(0).text()).toBe('Repo 0')
    expect(wrapper.find('p').at(1).text()).toBe('Repo Test')
    expect(wrapper.find('p').at(2).text()).toBe('Fetch Repos')
  });
});