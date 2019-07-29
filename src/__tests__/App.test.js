import App from '../../src/App.vue';
import { shallowMount } from '@vue/test-utils';

describe('App', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallowMount(App);
	});

	it('should be a Vue instance', () => {
		expect(wrapper)
			.isVueInstance()
			.toBeTruthy();
	});

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
