export const CDN_CONFIG = {
  enabled: false,
  baseUrl: 'https://your-cdn-domain.com/aiwork',
  imagePath: 'images',
  musicPath: 'music',
  videoPath: 'videos',
};

export const getCDNUrl = (path: string): string => {
  if (!CDN_CONFIG.enabled) {
    return path;
  }
  
  const fullPath = path.replace('./', '');
  const parts = fullPath.split('/');
  const folder = parts[0];
  const filename = parts[1];
  
  if (['images', 'music', 'videos'].includes(folder)) {
    return `${CDN_CONFIG.baseUrl}/${folder}/${filename}`;
  }
  
  return path;
};