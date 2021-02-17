import { shallowMount } from '@vue/test-utils'
import HeroList from '@/components/HeroList'
import HeroDetail from '@/components/HeroDetail'

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

describe('HeroDetail.vue', () => {
  it('renders a list of hero detials', () => {
    const selectedHero = {"id":1011176,"name":"Ajak","description":"","thumbnail":{"path":"http://i.annihil.us/u/prod/marvel/i/mg/2/80/4c002f35c5215","extension":"jpg","__typename":"Thumbnail"},"comics":{"available":4,"items":[{"name":"Incredible Hercules (2008) #117","resourceURI":"http://gateway.marvel.com/v1/public/comics/21175","__typename":"Items"},{"name":"Incredible Hercules (2008) #118","resourceURI":"http://gateway.marvel.com/v1/public/comics/21324","__typename":"Items"},{"name":"Incredible Hercules (2008) #119","resourceURI":"http://gateway.marvel.com/v1/public/comics/21505","__typename":"Items"},{"name":"Incredible Hercules (2008) #120","resourceURI":"http://gateway.marvel.com/v1/public/comics/21707","__typename":"Items"}],"__typename":"Comics"},"series":{"available":1,"items":[{"name":"Incredible Hercules (2008 - 2010)","resourceURI":"http://gateway.marvel.com/v1/public/series/3762","__typename":"Items"}],"__typename":"Series"},"events":{"available":1,"items":[{"name":"Secret Invasion","resourceURI":"http://gateway.marvel.com/v1/public/events/269","__typename":"Items"}],"__typename":"Events"},"stories":{"available":8,"items":[{"name":"Incredible Hercules (2008) #117","resourceURI":"http://gateway.marvel.com/v1/public/stories/46776","__typename":"Items"},{"name":"Interior #46777","resourceURI":"http://gateway.marvel.com/v1/public/stories/46777","__typename":"Items"},{"name":"Incredible Hercules (2008) #118","resourceURI":"http://gateway.marvel.com/v1/public/stories/47097","__typename":"Items"},{"name":"Interior #47098","resourceURI":"http://gateway.marvel.com/v1/public/stories/47098","__typename":"Items"},{"name":"Incredible Hercules (2008) #119","resourceURI":"http://gateway.marvel.com/v1/public/stories/47415","__typename":"Items"},{"name":"3 of 4 - Secret Invasion","resourceURI":"http://gateway.marvel.com/v1/public/stories/47416","__typename":"Items"},{"name":"Incredible Hercules (2008) #120","resourceURI":"http://gateway.marvel.com/v1/public/stories/47721","__typename":"Items"},{"name":"4 of 4 - Secret Invasion","resourceURI":"http://gateway.marvel.com/v1/public/stories/47722","__typename":"Items"}],"__typename":"Stories"},"__typename":"Result"}
  
    const wrapper = shallowMount(HeroDetail, {
      propsData: {
        selectedHero
      }
    })
    console.log(wrapper.html())
  })
})
