# Dev Works 섹션

AI를 활용하여 개발한 프로그래밍 프로젝트들을 소개하는 섹션.

## 구조

- **섹션 헤더** - "Dev Works" 타이틀 + "AI-Assisted Development" 서브텍스트
- **프로젝트 카드 (3열 그리드)** - 스크린샷, 제목, 기술 스택 태그
- **상세 모달** - 카드 클릭 시 전체화면 모달 (세로 스크롤)

## 프로젝트

### 1. Auto Shop Manager
- **설명**: BIGS MOTORS 정비소 예약/고객/견적/재고/매출 통합 관리 시스템
- **기술 스택**: Next.js, TypeScript, Supabase, Prisma, Tailwind CSS, Zustand
- **핵심 기능**: Google Calendar 양방향 동기화, 37개 REST API, 실시간 재고 알림

### 2. POS System
- **설명**: MOVE MOTORS 자동차 튜닝 파츠 판매용 실시간 POS 시스템
- **기술 스택**: React, Vite, Supabase, Tailwind CSS, Google Gemini AI, ExcelJS
- **핵심 기능**: AI 자연어 주문 인식, WebSocket 실시간 동기화, API 호출 78% 최적화

### 3. Move Automotive
- **설명**: D1 LIGHTS 드리프트팀 스폰서 유치용 프로모션 사이트
- **기술 스택**: HTML/CSS/JS, Lenis, GitHub API, GitHub Pages
- **핵심 기능**: 360도 차량 뷰어, 4개국어 지원, 3D 별빛 패럴랙스
- **Live Demo**: https://aijunny0604-alt.github.io/move-auto/

## 모달 동작

- Lenis 스무스 스크롤을 `stop()`하여 배경 스크롤 차단
- `data-lenis-prevent` 속성으로 모달 내부 네이티브 스크롤 보장
- 갤러리 이미지를 세로로 나열하여 스크롤로 탐색

## 컴포넌트

| 파일 | 설명 |
|------|------|
| `components/DevSection.tsx` | Dev Works 섹션 + 상세 모달 |
| `constants.ts` | `DEV_PROJECTS` 데이터 |
| `types.ts` | `DevProject` 인터페이스 |

## 스크린샷 이미지

`public/images/dev-projects/` 디렉토리에 저장:
- `auto-shop-dashboard.png`, `auto-shop-reservations.png`, `auto-shop-customers.png`
- `pos-dashboard.png`, `pos-order.png`, `pos-orders.png`
- `move-auto-enter.png`, `move-auto-driver.png`, `move-auto-media.png`
