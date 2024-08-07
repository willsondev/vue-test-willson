import { shallowMount } from '@vue/test-utils';
import ContactView from '@/views/ContactView.vue';

describe('ContactView.vue', () => {
  it('renders contact page', () => {
    const wrapper = shallowMount(ContactView);
    expect(wrapper.text().trim()).toMatch('This is the contact page');
  });
});