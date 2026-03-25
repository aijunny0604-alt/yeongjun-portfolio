import { Project, Award, PlaygroundItem, DesignItem, VideoItem, DevProject } from './types';

export const HERO_TEXT = {
  line1: "YEONG JUN",
  line2: "LEE",
  sub: "사진 · 영상 · AI · 개발. 미디어와 기술의 경계를 넘나들며 새로운 가치를 만드는 크리에이터입니다."
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Dynamic Moments',
    category: '포토그래피',
    year: '2024',
    image: '/yeongjun-portfolio/images/53786435527_17433df4d8_b.jpg',
    description: '드리프트의 긴장감과 속도를 한 프레임에 포착. 현장의 열기를 전달하는 모터스포츠 포토그래피.',
    tags: ['Automotive', 'Action', 'Drift', 'Sports'],
    gallery: [
      { type: 'image', url: '/yeongjun-portfolio/images/53786435532_71a623a182_b.jpg' },
      { type: 'image', url: '/yeongjun-portfolio/images/53787388841_ac27535c43_b.jpg' },
      { type: 'image', url: '/yeongjun-portfolio/images/53879429516_f2c37d8997_b.jpg' },
      { type: 'image', url: '/yeongjun-portfolio/images/53879842125_e8e6af958c_b.jpg' },
      { type: 'image', url: '/yeongjun-portfolio/images/53911971263_457184d4c0_b.jpg' }
    ]
  },
  {
    id: '2',
    title: 'Product Showcase',
    category: '제품 촬영',
    year: '2024',
    image: '/yeongjun-portfolio/images/53928174748_96dd496038_b.jpg',
    description: '디테일과 질감을 극대화하는 라이팅 기법으로, 제품의 매력을 최대한 끌어내는 상업 사진.',
    tags: ['Commercial', 'Product', 'Lighting', 'Detail'],
    gallery: [
      { type: 'image', url: '/yeongjun-portfolio/images/53928308389_705ac179e1_b.jpg' },
      { type: 'image', url: '/yeongjun-portfolio/images/53935058229_c97521cb14_b.jpg' },
      { type: 'image', url: '/yeongjun-portfolio/images/53935571015_07ec914a87_b.jpg' },
      { type: 'image', url: '/yeongjun-portfolio/images/53937223321_2718ab9056_b.jpg' }
    ]
  },
  {
    id: '3',
    title: 'Cinematic Films',
    category: '영상 편집',
    year: '2024',
    image: '/yeongjun-portfolio/images/53942097638_989f096918_b.jpg',
    description: '자동차의 역동성부터 웨딩의 감성까지. 컬러 그레이딩과 편집으로 이야기를 완성하는 시네마틱 영상.',
    tags: ['Cinematic', 'Wedding', 'Automotive', 'Color Grading'],
    gallery: [
      { type: 'image', url: '/yeongjun-portfolio/images/53964377422_4c0216b542_b.jpg' },
      { type: 'image', url: '/yeongjun-portfolio/images/53967565291_bce5a19f46_b.jpg' },
      { type: 'image', url: '/yeongjun-portfolio/images/53967766648_2cfd72e9cc_b.jpg' },
      { type: 'image', url: '/yeongjun-portfolio/images/53967969555_755b521cec_b.jpg' }
    ]
  },
  {
    id: '4',
    title: 'AI Creations',
    category: 'AI 아트워크',
    year: '2024',
    image: '/yeongjun-portfolio/images/53968820042_ec311e50ec_b.jpg',
    description: 'AI 이미지 생성 기술과 크리에이티브를 결합. 기술로 상상력의 한계를 확장합니다.',
    tags: ['AI Art', 'Generative', 'Creative', 'Digital Art'],
    gallery: [
      { type: 'image', url: '/yeongjun-portfolio/images/53618095933_87aaf22e57_b.jpg' },
      { type: 'image', url: '/yeongjun-portfolio/images/53618095938_b261990a8f_b.jpg' },
      { type: 'image', url: '/yeongjun-portfolio/images/53618156348_73505003d3_b.jpg' },
      { type: 'image', url: '/yeongjun-portfolio/images/53618210828_888417f683_b.jpg' }
    ]
  }
];

export const AWARDS: Award[] = [
  {
    year: '2024',
    title: '매경미디어 AI 영상 광고·숏폼 공모전',
    organization: '매일경제',
    result: '우수상',
    video: 'https://youtu.be/m-AkFwNKQ0g',
    description: 'AI 영상 생성 기술과 스토리텔링을 결합한 광고 영상으로 우수상 수상. 미디어 감각과 AI 활용 능력을 동시에 인정받았습니다.'
  }
];

export const PLAYGROUND_ITEMS: PlaygroundItem[] = [
  { id: '1', type: 'image', url: '/yeongjun-portfolio/images/53618395435_32f2431b97_b.jpg', caption: 'Behind the Scenes' },
  { id: '2', type: 'image', url: '/yeongjun-portfolio/images/53662149094_451ac4f80f_b.jpg', caption: 'Test Shot' },
  { id: '3', type: 'image', url: '/yeongjun-portfolio/images/53786435527_17433df4d8_b.jpg', caption: 'Color Study' },
];

export const DESIGN_ITEMS: DesignItem[] = [
  {
    id: '1',
    title: 'Event Poster',
    category: 'Poster Design',
    year: '2024',
    image: '/yeongjun-portfolio/images/53618095933_87aaf22e57_b.jpg',
    description: '이벤트를 위한 시선을 사로잡는 포스터 디자인',
    tools: ['Photoshop', 'Illustrator']
  },
  {
    id: '2',
    title: 'Album Artwork',
    category: 'Album Cover',
    year: '2024',
    image: '/yeongjun-portfolio/images/53618156348_73505003d3_b.jpg',
    description: '음악의 분위기를 시각적으로 표현한 앨범 커버',
    tools: ['Photoshop', 'Cinema 4D']
  },
  {
    id: '3',
    title: 'Brand Identity',
    category: 'Branding',
    year: '2024',
    image: '/yeongjun-portfolio/images/53618210828_888417f683_b.jpg',
    description: '브랜드의 핵심 가치를 담은 아이덴티티 디자인',
    tools: ['Illustrator', 'Figma']
  }
];

export const VIDEO_ITEMS: VideoItem[] = [
  {
    id: '1',
    title: '매경미디어 AI 영상 광고·숏폼 공모전 우수상',
    url: 'https://youtu.be/m-AkFwNKQ0g',
    description: 'AI 기술을 활용한 영상 광고 작품',
  },
  {
    id: '2',
    title: 'Video Work #1',
    url: 'https://youtu.be/fjNR4wO0FJs',
  },
  {
    id: '3',
    title: 'Video Work #2',
    url: 'https://youtu.be/w2A6CQx3a_4',
  },
  {
    id: '4',
    title: 'Video Work #3',
    url: 'https://youtu.be/NPQOn0qgf2c',
  },
  {
    id: '5',
    title: 'Video Work #4',
    url: 'https://youtu.be/QGGO0S3SYt8',
  },
  {
    id: '6',
    title: 'Video Work #5',
    url: 'https://youtu.be/rlQ0LoJlDGo',
  },
  {
    id: '7',
    title: 'Video Work #6',
    url: 'https://youtu.be/DRTQZL__0V4',
  },
  {
    id: '8',
    title: 'Video Work #7',
    url: 'https://youtu.be/i4ApsMQyN_w',
  },
  {
    id: '9',
    title: 'Video Work #8',
    url: 'https://youtu.be/1JiDGFv7uzg',
  },
];

export const DEV_PROJECTS: DevProject[] = [
  {
    id: 'dev-1',
    title: 'Auto Shop Manager',
    subtitle: 'BIGS MOTORS 정비소 관리 시스템',
    description: '실제 자동차 정비소의 예약, 고객, 견적, 재고, 매출을 통합 관리하는 풀스택 시스템. Google Calendar/Sheets 양방향 연동과 37개 API 라우트를 갖춘 프로덕션 레벨 서비스.',
    image: '/yeongjun-portfolio/images/dev-projects/auto-shop-dashboard.png',
    gallery: [
      '/yeongjun-portfolio/images/dev-projects/auto-shop-dashboard.png',
      '/yeongjun-portfolio/images/dev-projects/auto-shop-reservations.png',
      '/yeongjun-portfolio/images/dev-projects/auto-shop-customers.png',
    ],
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'Prisma', 'Tailwind CSS', 'Zustand'],
    features: ['Google Calendar 양방향 동기화', '37개 REST API', '실시간 재고 알림', '견적서 생성/공유', '매출 분석 대시보드'],
    githubUrl: 'https://github.com/aijunny0604-alt/auto-shop-manager',
  },
  {
    id: 'dev-2',
    title: 'POS System',
    subtitle: 'MOVE MOTORS 실시간 POS 시스템',
    description: '자동차 튜닝 파츠 판매를 위한 실시간 POS 시스템. AI 자연어 주문 인식, WebSocket 실시간 동기화, 주문 자동 병합 등 12개 페이지로 구성된 업무용 솔루션.',
    image: '/yeongjun-portfolio/images/dev-projects/pos-dashboard.png',
    gallery: [
      '/yeongjun-portfolio/images/dev-projects/pos-dashboard.png',
      '/yeongjun-portfolio/images/dev-projects/pos-order.png',
      '/yeongjun-portfolio/images/dev-projects/pos-orders.png',
    ],
    techStack: ['React', 'Vite', 'Supabase', 'Tailwind CSS', 'Google Gemini AI', 'ExcelJS'],
    features: ['AI 자연어 주문 인식', 'WebSocket 실시간 동기화', 'API 호출 78% 최적화', '배송라벨 Excel 출력', '주문 자동 병합'],
    githubUrl: 'https://github.com/aijunny0604-alt/pos-calculator-web',
  },
  {
    id: 'dev-3',
    title: 'Move Automotive',
    subtitle: 'D1 LIGHTS 드리프트팀 스폰서십 사이트',
    description: 'D1 LIGHTS 드리프트 대회 참가팀의 스폰서 유치를 위한 프로모션 웹사이트. 3D 별빛 배경, 360도 차량 뷰어, 4개국어 지원으로 몰입감 있는 경험 제공.',
    image: '/yeongjun-portfolio/images/dev-projects/move-auto-enter.png',
    gallery: [
      '/yeongjun-portfolio/images/dev-projects/move-auto-enter.png',
      '/yeongjun-portfolio/images/dev-projects/move-auto-driver.png',
      '/yeongjun-portfolio/images/dev-projects/move-auto-media.png',
    ],
    techStack: ['HTML/CSS/JS', 'Lenis', 'GitHub API', 'GitHub Pages'],
    features: ['360도 인터랙티브 차량 뷰어', '4개국어 동적 전환', '3D 별빛 패럴랙스 효과', 'GitHub API 갤러리 관리', '스폰서 존 매핑'],
    githubUrl: 'https://github.com/aijunny0604-alt/move-auto',
    liveUrl: 'https://aijunny0604-alt.github.io/move-auto/',
  }
];

export const ABOUT_TEXT = `
  사진과 영상으로 순간을 포착하고, AI 기술로 상상을 현실로 만들며,
  프로그래밍으로 아이디어를 서비스로 구현합니다.
  미디어 제작부터 AI 활용, 풀스택 개발까지 —
  다양한 분야의 경험을 융합하여 새로운 가치를 창출하는 크리에이터입니다.
`;

export const SOCIAL_LINKS = [
  { name: 'Instagram', url: 'https://www.instagram.com/d_concepts2/', icon: 'instagram' },
  { name: 'YouTube', url: 'https://www.youtube.com/@dconcepts7777', icon: 'youtube' },
  { name: 'Flickr', url: 'https://www.flickr.com/photos/200364842@N07/', icon: 'flickr' },
  { name: 'Contact', url: 'mailto:lyjcg0604@naver.com', icon: 'mail' },
];
