// src/fontAwesome.js
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS

// Prevent Font Awesome from adding its CSS since we did it manually above
config.autoAddCss = false;

library.add(fas);