export interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  prompt: string;
}

export interface ImageSeries {
  id: string;
  title: string;
  description: string;
  style: string;
  images: string[];
}

export interface MusicItem {
  id: string;
  title: string;
  artist: string;
  url: string;
  description: string;
  lyrics: string;
}

export interface BackgroundMusic {
  id: string;
  title: string;
  url: string;
}

export interface GameItem {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  videoUrl: string;
  hasGithub: boolean;
  githubUrl?: string;
  designConcept?: {
    images: string;
    script: string;
    code: string;
  };
}

export const video: VideoItem = {
  id: '1',
  title: 'AI动画作品',
  description: '使用即梦AI和剪映制作的ai短视频',
  thumbnail: '/images/Video_cover.png',
  videoUrl: '/videos/24c9194d2dae7fbc9e2e586a4ddff844.mp4',
  prompt: '一个女孩在电脑前写代码，突然停电，电脑屏幕变黑，女孩崩溃的表情，动漫风格，赛博朋克色调，戏剧性光影'
};

export const imageSeries: ImageSeries[] = [
  {
    id: '1',
    title: '二次元画风',
    description: '使用Liblib和ChatGPT Image2生成的二次元风格插画',
    style: '二次元',
    images: [
      '/images/picture1.png',
      '/images/picture2.png',
      '/images/picture3.png'
    ]
  },
  {
    id: '2',
    title: '像素风格',
    description: '使用即梦AI生成的像素风格艺术作品',
    style: '像素风',
    images: [
      '/images/pix1.png',
      '/images/pix2.png',
      '/images/pix3.png',
      '/images/pix4.png'
    ]
  }
];

export const musicItems: MusicItem[] = [
  {
    id: '1',
    title: '鲸落',
    artist: 'AI Generated',
    url: '/music/《鲸落》pure-music.mp3',
    description: '一首宁静优美的纯音乐，仿佛置身于深海之中，感受鲸鱼缓缓沉入海底的宁静与壮美。没有歌词，只有旋律诉说着生命轮回的故事。',
    lyrics: '（纯音乐，无歌词）\n\n深海中，鲸鱼缓缓下沉\n阳光穿透层层深蓝\n歌声回荡在寂静深渊\n生命轮回，归于永恒\n\n浪花轻拍海岸礁石\n月光洒落海面银光\n星辰闪耀在夜空之上\n鲸落无声，化作永恒'
  },
  {
    id: '2',
    title: 'Seoul Rain Serenade',
    artist: 'AI Generated',
    url: '/music/《Seoul Rain Serenade》k-pop.mp3',
    description: '整体氛围细腻有氛围感，适合都市影视OST场景，略带都市孤独感与浪漫情愫，节奏中速流畅，旋律抓耳有记忆点。曲风：K-pop融合流行抒情，英文+韩语混合演唱。全曲4/4拍，108 BPM，C大调。全局乐器：流行钢琴、电吉他（clean音色）、合成器pad、弦乐组、轻量电子鼓点。',
    lyrics: '(前奏)\n流行钢琴、合成器pad；轻柔铺底，氛围感引入。\n\n(主歌)\nneon paints the rain on the window pane\ni sip my coffee at the same old lane\nyou walked in with your headphones on\nthe world just stopped when our eyes were drawn\n\n(预副歌)\n내 맘이 자꾸만 널 따라가\n시간이 느리게 흘러가\nevery little detail i memorize\nthis moment feels like a paradise\n\n(副歌)\noh\n너와 나의 city light\n우리의 이야기가 시작돼\nfalling slow\nfalling soft in the rain\nthis is our song\nour perfect refrain\noh\n너와 나의 city night\n모든 게 너로 물들어가\nwhen the world is dark and cold and gray\nyou\'re the light that chases the shadows away\n\n(间奏)\n电吉他solo、弦乐组；器乐过渡，情绪延续。\n\n(主歌)\nwe walked the streets where the cherry blossoms fall\nshared the headphones playing our favorite song\nyou laughed so hard when i tripped on the curb\nthat warm smile i never wanna blur\n\n(预副歌)\n하루가 끝나는 집 앞에서\n다음 만남을 기다리고 있어\nevery little moment feels so right\ni wish this night would never end tonight\n\n(副歌)\noh\n너와 나의 city light\n우리의 이야기가 시작돼\nfalling slow\nfalling soft in the rain\nthis is our song\nour perfect refrain\noh\n너와 나의 city night\n모든 게 너로 물들어가\nwhen the world is dark and cold and gray\nyou\'re the light that chases the shadows away\n\n(桥段)\n가끔은 불안해도\n내 곁에 있어줄래\neven when the seasons change\nour love will stay the same\n이 도시의 수많은 사람들 중에\n나는 너만을 찾을 거야\n\n(副歌)\noh\n너와 나의 city light\n우리의 이야기가 시작돼\nfalling slow\nfalling soft in the rain\nthis is our song\nour perfect refrain\noh\n너와 나의 city night\n모든 게 너로 물들어가\nwhen the world is dark and cold and gray\nyou\'re the light that chases the shadows away\n\n(尾奏)\n流行钢琴、合成器pad；渐弱淡出，余韵留存。'
  },
  {
    id: '3',
    title: '왕관 (Crown)',
    artist: 'AI Generated',
    url: '/music/《왕관 (Crown)》k-pop.mp3',
    description: '细腻浪漫又带着宿命感的情绪，像韩剧主角身处命运漩涡中对信念的坚守，适合爱情、宿命、成长类韩剧OST场景。曲风：K-pop、韩剧OST。全曲4/4拍，95 BPM，d小调。全局乐器：钢琴（分解和弦）、弦乐组、合成器Pad、电贝斯、轻打击乐、八音盒音色。',
    lyrics: '(前奏)\n钢琴、八音盒、弦乐组；轻缓旋律引入，氛围感铺底，清冷又浪漫。\n\n(主歌)\n밤하늘 별빛이 내려와\n왕관의 무게를 느껴\n수많은 선택들이 나를 감싸\n눈물을 삼키고 서있어\n\n(主歌)\n운명의 바람이 불어와\n너의 손을 잡고 싶어\n어둠이 모든 걸 삼키려 해도\n우리의 약속을 기억해\n\n(预副歌)\n넌 날 지켜줄 거야\n내가 기댈 곳이 돼\n모든 어려움을 함께 견뎌낼 거야\n나의 왕이 되어줘\n이제 나와 함께 가자\n\n(副歌)\nthis is my crown\n쓰러지지 않아\n수많은 상처가 나를 단단히 해\n빛이 보이지 않는 어둠 속에서도\n너를 지킬 거야\n내 왕관 아래서\nthis is my crown\nnever let you down\n\n(间奏)\n弦乐组、合成器Pad、钢琴；器乐过渡，旋律回环，强化宿命感。\n\n(桥段)\n가끔은 두려워서 발이 떨어지지 않아\n하지만 너가 있으니까 다시 일어설 수 있어\n왕관은 빛나지만 차갑지만\n너의 온기가 나를 녹여줘\n\n(副歌)\nthis is my crown\n쓰러지지 않아\n수많은 상처가 나를 단단히 해\n빛이 보이지 않는 어둠 속에서도\n너를 지킬 거야\n내 왕관 아래서\nthis is my crown\nnever let you down\n\n(尾奏)\nmy crown\nonly for you'
  }
];

export const backgroundMusicList: BackgroundMusic[] = [
  {
    id: '1',
    title: 'timeout',
    url: '/music/《timeout》blackground.mp3'
  },
  {
    id: '2',
    title: '鲸落',
    url: '/music/《鲸落》pure-music.mp3'
  },
  {
    id: '3',
    title: 'Seoul Rain Serenade',
    url: '/music/《Seoul Rain Serenade》k-pop.mp3'
  },
  {
    id: '4',
    title: '왕관 (Crown)',
    url: '/music/《왕관 (Crown)》k-pop.mp3'
  }
];

export const games: GameItem[] = [
  {
    id: '1',
    title: 'AI视觉小说',
    description: '使用Ren\'Py引擎制作的互动叙事游戏，配合AI生成的精美插画，讲述一个关于AI与人类的温馨故事',
    coverImage: '/images/PV_cover.png',
    videoUrl: '/videos/6月9日.mp4',
    hasGithub: false,
    designConcept: {
      images: '使用即梦AI生图，黑白画风增强辨识度',
      script: '写游戏脚本大纲后结合AI生成游戏文案',
      code: '用AI生成代码完成小游戏'
    }
  },
  {
    id: '2',
    title: '弹球游戏',
    description: '一款有趣的弹球游戏，控制方向射出一行小球，消除屏幕上的方块获得分数',
    coverImage: '/images/game_cover.png',
    videoUrl: '/videos/6月8日.mp4',
    hasGithub: true,
    githubUrl: 'https://github.com/yunxiao9953/ballgame',
    designConcept: {
      images: '使用Gemini制作，结合AI手势识别',
      script: '控制方向射出一行小球，消除屏幕上的方块获得分数',
      code: '完整新手教程，超过30+关卡，各种特殊砖块和效果'
    }
  }
];
