import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/style.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

createApp(App).mount('#app')
library.add(faHatWizard)
App.component('font-awesome-icon', FontAwesomeIcon)