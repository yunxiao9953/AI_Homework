export const CDN_CONFIG = {
  enabled: false,
  baseUrl: 'https://yunxiao9953.github.io/AI_Homework',
  imagePath: 'images',
  musicPath: 'music',
  videoPath: 'videos',
};

export const getCDNUrl = (path: string): string => {
  const fullPath = path.replace('./', '');
  const parts = fullPath.split('/');
  const folder = parts[0];
  const filename = parts[1];
  
  if (CDN_CONFIG.enabled && ['images', 'music', 'videos'].includes(folder)) {
    return `${CDN_CONFIG.baseUrl}/${folder}/${filename}`;
  }
  
  return `/AI_Homework/${folder}/${filename}`;
};
