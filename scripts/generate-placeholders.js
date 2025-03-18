const fs = require('fs');
const { createCanvas } = require('canvas');

const projects = [
  { name: 'chat-interface', color: '#3B82F6' },
  { name: 'image-generator', color: '#10B981' },
  { name: 'code-assistant', color: '#6366F1' }
];

function generatePlaceholder(name, color) {
  const width = 800;
  const height = 600;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, width, height);

  // Text
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 48px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(name, width / 2, height / 2);

  return canvas.toBuffer('image/png');
}

// Create projects directory if it doesn't exist
if (!fs.existsSync('./public/projects')) {
  fs.mkdirSync('./public/projects', { recursive: true });
}

// Generate images
projects.forEach(({ name, color }) => {
  const buffer = generatePlaceholder(name, color);
  fs.writeFileSync(`./public/projects/${name}.png`, buffer);
  console.log(`Generated ${name}.png`);
}); 