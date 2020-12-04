import { shallowMount } from '@vue/test-utils';
import Quiz from '../../src/Quiz.vue';
import questions from '../../src/questions';

describe('Quiz.vue', () => {
  it('mounts', () => {
    const wrapper = shallowMount(Quiz, {
      propsData: { questions }
    });
    expect(wrapper).not.toBeNull();
  })
})
