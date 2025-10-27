const fs = require('fs');
const path = './images/'; // folder with your images

const files = fs.readdirSync(path);
const images = files.filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file));
fs.writeFileSync('images.json', JSON.stringify(images, null, 2));
console.log('✅ images.json updated with', images.length, 'images');
