import Vue from 'vue'
import App from './App.vue'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

Vue.config.productionTip = false
Vue.use(VueApollo)

const httpLink = createHttpLink({
  uri: 'http://localhost:4000',
})


const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

new Vue({
  apolloProvider,
  render: h => h(App),
}).$mount('#app')
