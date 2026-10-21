import sharp from 'sharp';

const source = 'public/icons/icon.svg';

for (const size of [192, 512]) {
  await sharp(source)
    .resize(size, size)
    .png()
    .toFile(`public/icons/icon-${size}.png`);

  console.log(`Створено icon-${size}.png`);
}