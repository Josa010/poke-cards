import '@styles/main.css';
import '@styles/Pokemon.css'
import '@styles/404.css';

import router from './routes/Index.js';

window.addEventListener('load', router)
window.addEventListener('hashchange', router)