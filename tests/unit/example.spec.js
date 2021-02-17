import { shallowMount } from '@vue/test-utils'
import HeroList from '@/components/HeroList.vue'

describe('HeroList.vue', () => {
  it('renders a list of heros', () => {
    const data = {}

    const wrapper = shallowMount(HeroList,{
      propsData: {
        data
      }
    })

    console.log(wrapper.html())
  })
})
