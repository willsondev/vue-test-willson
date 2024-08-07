import { shallowMount } from '@vue/test-utils';
import AboutView from '@/views/AboutView.vue';

describe('AboutView.vue', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(AboutView);
    expect(wrapper.exists()).toBe(true);
  });
});
