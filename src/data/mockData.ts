import { getCDNUrl } from './cdnConfig';

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
  title: '《寻仙》',
  description: '一介凡身无仙缘，但敢为友踏仙途。',
  thumbnail: getCDNUrl('./images/AIVideo_cover.jpg'),
  videoUrl: getCDNUrl('./videos/6月10日.mp4'),
  prompt: `整体风格：纯写意国风水墨动画风，以宣纸纹理为基底，青灰、素白、黛黑为主色调，仅用朱砂、浅粉作零星点缀。远景留白空灵，近景笔触细腻，人物动作飘逸如水墨流动，情绪藏于墨色浓淡之间。BGM全程以古琴、竹笛为主，空灵清冷中暗藏悲怆，转场多用云烟晕染、墨色泼洒效果。

第一幕 升仙高台·一滴红尘泪（00:00-00:28）

【全景·极远景】水墨云海翻涌如浪，万丈青石高台刺破云层，孤立于九天之上。高台边缘墨色渐淡，与云海融为一体，下方是朦胧的人间红尘，屋舍连绵、炊烟袅袅，人声隐约传来。天地间一片清寂，唯有高台遗世独立。

【中景·慢推】高台之巅，独身立着一位白衣修仙青年。身姿清瘦挺拔，广袖长袍被天风猎猎吹起，墨发仅用一根素玉簪束起，几缕碎发垂在眉眼间。周身无半分烟火气，仙风道骨，清冷疏离，仿佛与这方天地融为一体。

【俯拍·叠化】镜头缓缓下移，高台之下人山人海，万千凡人仰头跪拜、欢呼雀跃，人影以淡墨虚影层层堆砌，只显攒动之势，不见具体面容。细碎的议论声、惊叹声交织成一片，满是敬仰与艳羡。

【半身·慢镜头】青年微微侧身，淡漠回眸。目光遥遥掠过脚下喧嚣红尘，眼神空茫无波，万千繁华尽数倒映在他漆黑的眼底，却未掀起一丝涟漪，唯有眼底深处藏着一丝难以察觉的怅然。

【跟拍·背影】青年收回目光，毫不犹豫地转过身，一步步向着高台顶端的天光尽头缓步走去。步伐从容坚定，每一步都像踏在云端，衣袂翻飞间，带起细碎的墨色云烟。

【音效·人声吆喝】（激昂洪亮，带着市井特有的亢奋，穿透云层）升仙喽——！凡人得道，白日飞升喽——！

【特写·面部定格】镜头骤然拉近，死死锁定青年正面。眉眼清隽，神色冰封，面无表情得如同玉雕。光影在他脸颊缓缓流转，一滴极淡的泪水从他眼角无声滑落，尚未触及下颌，便被天风与天光吹散，化作一缕轻烟，无迹可寻。

【全景·收束】青年不曾停顿，继续向前。漫天圣洁白光从天际倾泻而下，如水银般层层包裹住他的身形。水墨画面逐渐被纯白光晕覆盖，人物轮廓慢慢虚化，最终只剩一片刺目的白。

第二幕 市井惊梦·青梅旧时光（00:28-02:15）

【转场·音效割裂】空灵的古琴BGM骤然骤停，神圣白光被一团浓墨猛地泼开。

【台词·粗犷怒喝】（音量炸裂，粗粝沙哑，满是不耐）升仙升仙，升个鬼的仙？！懒骨头还不快起来干活！

【近景·写实水墨】画面切换至古朴的农家院落，金黄的干草垛堆得老高。一个穿着洗得发白的粗布短打、头发乱糟糟的少年正躺在草垛上睡觉，嘴角还沾着一点草屑。

【中景·动作】一个满脸横肉、穿着短褂的管事粗手粗脚地一巴掌拍在少年背上。少年猛地惊醒，茫然地眨了眨眼，慢吞吞地坐起身，揉了揉被拍疼的后背，脸上没什么表情。

【跟拍·长镜头】少年不情不愿地站起身，跟着管事走到院门口。一辆雕梁画栋的华丽马车停在那里，朱红漆身，鎏金铜环，与周围的破败院落格格不入。其他下人正忙忙碌碌地搬着箱子，汗流浃背。

【近景·动作】少年刚要伸手去搬一个沉重的木箱，马车的车帘忽然被一只白皙纤细的手掀开。

【台词·女声温柔】阿尘，你过来一下。

【特写·手部】少年走到马车前，小姐从车里递出一个小巧的紫檀木首饰盒，盒子上雕刻着精致的兰花纹。

【中景·双人】小姐穿着淡粉色襦裙，面色有些苍白，却笑得眉眼弯弯，像春日里最软的风。她把盒子塞进少年手里，轻声道："这个轻，你帮我拿到里屋去好不好？"

【特写·少年面部】少年看着她的笑容，依旧没什么表情，只是微微点了点头，抱着盒子转身走进屋里。

【特写·管事面部】管事在后面狠狠瞪了少年一眼，嘴唇动了动想骂什么，但终究没敢出声，只能悻悻地转过头，对着其他下人吼道："都快点磨磨蹭蹭的！"

【空镜·时间流逝】夕阳西下，金色的余晖洒在院落里，将一切都染上暖色调。下人们陆续收拾好东西离开，喧闹的院子渐渐安静下来。

【中景·双人】小姐靠在门框上，看着正在扫地的少年，笑着招手："阿尘，别扫了，进来坐会儿。"

【内景·近景】少年走进屋，放下扫帚。小姐给他倒了一杯茶，撇了撇嘴，语气带着一丝嘲讽："你看他们今天那帮殷勤样，以前怎么不见他们对我这么好？"

【特写·少年面部】少年捧着茶杯，指尖微微泛白。他从小情感淡漠，不会笑，只是看着小姐，轻轻点了点头。

【转场·云烟晕染】画面渐渐模糊，被一层淡淡的水墨云烟笼罩。BGM转为温柔的二胡声，带着一丝怀旧的暖意。

【回忆·全景】同样是这座府邸，只是更显破败。一个小小的、穿着破旧衣服的女孩缩在墙角，被几个衣着光鲜的孩子推搡欺负，手里的馒头掉在地上，沾满了泥土。

【回忆·中景】一个同样瘦小的男孩从旁边走过，面无表情地看了一眼，然后蹲下身，捡起自己的馒头，掰了一半递给女孩。女孩抬起头，泪眼婆娑地看着他。

【回忆·蒙太奇·快剪】
- 男孩给生病的女孩熬药，笨拙地用勺子喂她
- 女孩把偷偷藏起来的糖塞给男孩，男孩摇头，她就硬塞进他嘴里
- 女孩被嫡母打骂，男孩挡在她身前，后背被鞭子抽得血肉模糊，却一声不吭
- 两个小小的身影一起在院子里看月亮`
};

export const imageSeries: ImageSeries[] = [
  {
    id: '1',
    title: '二次元画风',
    description: '使用Liblib和ChatGPT Image2生成的二次元风格插画',
    style: '二次元',
    images: [
      getCDNUrl('./images/picture1.png'),
      getCDNUrl('./images/picture2.png'),
      getCDNUrl('./images/picture3.png')
    ]
  },
  {
    id: '2',
    title: '像素风格',
    description: '使用即梦AI生成的像素风格艺术作品',
    style: '像素风',
    images: [
      getCDNUrl('./images/pix1.png'),
      getCDNUrl('./images/pix2.png'),
      getCDNUrl('./images/pix3.png'),
      getCDNUrl('./images/pix4.png')
    ]
  }
];

export const musicItems: MusicItem[] = [
  {
    id: '1',
    title: '鲸落',
    artist: 'AI Generated',
    url: getCDNUrl('./music/《鲸落》pure-music.mp3'),
    description: '一首宁静优美的纯音乐，仿佛置身于深海之中，感受鲸鱼缓缓沉入海底的宁静与壮美。没有歌词，只有旋律诉说着生命轮回的故事。',
    lyrics: '（纯音乐，无歌词）\n\n深海中，鲸鱼缓缓下沉\n阳光穿透层层深蓝\n歌声回荡在寂静深渊\n生命轮回，归于永恒\n\n浪花轻拍海岸礁石\n月光洒落海面银光\n星辰闪耀在夜空之上\n鲸落无声，化作永恒'
  },
  {
    id: '2',
    title: 'Seoul Rain Serenade',
    artist: 'AI Generated',
    url: getCDNUrl('./music/《Seoul Rain Serenade》k-pop.mp3'),
    description: '整体氛围细腻有氛围感，适合都市影视OST场景，略带都市孤独感与浪漫情愫，节奏中速流畅，旋律抓耳有记忆点。曲风：K-pop融合流行抒情，英文+韩语混合演唱。全曲4/4拍，108 BPM，C大调。全局乐器：流行钢琴、电吉他（clean音色）、合成器pad、弦乐组、轻量电子鼓点。',
    lyrics: '(前奏)\n流行钢琴、合成器pad；轻柔铺底，氛围感引入。\n\n(主歌)\nneon paints the rain on the window pane\ni sip my coffee at the same old lane\nyou walked in with your headphones on\nthe world just stopped when our eyes were drawn\n\n(预副歌)\n내 맘이 자꾸만 널 따라가\n시간이 느리게 흘러가\nevery little detail i memorize\nthis moment feels like a paradise\n\n(副歌)\noh\n너와 나의 city light\n우리의 이야기가 시작돼\nfalling slow\nfalling soft in the rain\nthis is our song\nour perfect refrain\noh\n너와 나의 city night\n모든 게 너로 물들어가\nwhen the world is dark and cold and gray\nyou\'re the light that chases the shadows away\n\n(间奏)\n电吉他solo、弦乐组；器乐过渡，情绪延续。\n\n(主歌)\nwe walked the streets where the cherry blossoms fall\nshared the headphones playing our favorite song\nyou laughed so hard when i tripped on the curb\nthat warm smile i never wanna blur\n\n(预副歌)\n하루가 끝나는 집 앞에서\n다음 만남을 기다리고 있어\nevery little moment feels so right\ni wish this night would never end tonight\n\n(副歌)\noh\n너와 나의 city light\n우리의 이야기가 시작돼\nfalling slow\nfalling soft in the rain\nthis is our song\nour perfect refrain\noh\n너와 나의 city night\n모든 게 너로 물들어가\nwhen the world is dark and cold and gray\nyou\'re the light that chases the shadows away\n\n(桥段)\n가끔은 불안해도\n내 곁에 있어줄래\neven when the seasons change\nour love will stay the same\n이 도시의 수많은 사람들 중에\n나는 너만을 찾을 거야\n\n(副歌)\noh\n너와 나의 city light\n우리의 이야기가 시작돼\nfalling slow\nfalling soft in the rain\nthis is our song\nour perfect refrain\noh\n너와 나의 city night\n모든 게 너로 물들어가\nwhen the world is dark and cold and gray\nyou\'re the light that chases the shadows away\n\n(尾奏)\n流行钢琴、合成器pad；渐弱淡出，余韵留存。'
  },
  {
    id: '3',
    title: '왕관 (Crown)',
    artist: 'AI Generated',
    url: getCDNUrl('./music/《왕관 (Crown)》k-pop.mp3'),
    description: '细腻浪漫又带着宿命感的情绪，像韩剧主角身处命运漩涡中对信念的坚守，适合爱情、宿命、成长类韩剧OST场景。曲风：K-pop、韩剧OST。全曲4/4拍，95 BPM，d小调。全局乐器：钢琴（分解和弦）、弦乐组、合成器Pad、电贝斯、轻打击乐、八音盒音色。',
    lyrics: '(前奏)\n钢琴、八音盒、弦乐组；轻缓旋律引入，氛围感铺底，清冷又浪漫。\n\n(主歌)\n밤하늘 별빛이 내려와\n왕관의 무게를 느껴\n수많은 선택들이 나를 감싸\n눈물을 삼키고 서있어\n\n(主歌)\n운명의 바람이 불어와\n너의 손을 잡고 싶어\n어둠이 모든 걸 삼키려 해도\n우리의 약속을 기억해\n\n(预副歌)\n넌 날 지켜줄 거야\n내가 기댈 곳이 돼\n모든 어려움을 함께 견뎌낼 거야\n나의 왕이 되어줘\n이제 나와 함께 가자\n\n(副歌)\nthis is my crown\n쓰러지지 않아\n수많은 상처가 나를 단단히 해\n빛이 보이지 않는 어둠 속에서도\n너를 지킬 거야\n내 왕관 아래서\nthis is my crown\nnever let you down\n\n(间奏)\n弦乐组、合成器Pad、钢琴；器乐过渡，旋律回环，强化宿命感。\n\n(桥段)\n가끔은 두려워서 발이 떨어지지 않아\n하지만 너가 있으니까 다시 일어설 수 있어\n왕관은 빛나지만 차갑지만\n너의 온기가 나를 녹여줘\n\n(副歌)\nthis is my crown\n쓰러지지 않아\n수많은 상처가 나를 단단히 해\n빛이 보이지 않는 어둠 속에서도\n너를 지킬 거야\n내 왕관 아래서\nthis is my crown\nnever let you down\n\n(尾奏)\nmy crown\nonly for you'
  }
];

export const backgroundMusicList: BackgroundMusic[] = [
  {
    id: '1',
    title: 'timeout',
    url: getCDNUrl('./music/《timeout》blackground.mp3')
  },
  {
    id: '2',
    title: '鲸落',
    url: getCDNUrl('./music/《鲸落》pure-music.mp3')
  },
  {
    id: '3',
    title: 'Seoul Rain Serenade',
    url: getCDNUrl('./music/《Seoul Rain Serenade》k-pop.mp3')
  },
  {
    id: '4',
    title: '왕관 (Crown)',
    url: getCDNUrl('./music/《왕관 (Crown)》k-pop.mp3')
  }
];

export const games: GameItem[] = [
  {
    id: '1',
    title: 'AI视觉小说',
    description: '使用Ren\'Py引擎制作的互动叙事游戏，配合AI生成的精美插画，讲述一个关于AI与人类的温馨故事',
    coverImage: getCDNUrl('./images/PV_cover.png'),
    videoUrl: getCDNUrl('./videos/6月9日.mp4'),
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
    coverImage: getCDNUrl('./images/game_cover.png'),
    videoUrl: getCDNUrl('./videos/6月8日.mp4'),
    hasGithub: true,
    githubUrl: 'https://github.com/yunxiao9953/ballgame',
    designConcept: {
      images: '使用Gemini制作，结合AI手势识别',
      script: '控制方向射出一行小球，消除屏幕上的方块获得分数',
      code: '完整新手教程，超过30+关卡，各种特殊砖块和效果'
    }
  }
];
