# Cobana - 암호화폐 거래소 수수료 할인 허브

![Cobana Logo](https://img.shields.io/badge/Cobana-🍌_Crypto_Exchange_Hub-orange?style=for-the-badge)

## 🌟 프로젝트 소개

Cobana는 다양한 암호화폐 거래소들의 수수료 할인 혜택을 한곳에서 비교하고 선택할 수 있는 플랫폼입니다. 바이비트, 바이낸스, OKX, 비트겟, 게이트아이오, 빙엑스 등 주요 거래소들의 최고 할인 혜택을 제공합니다.

### 🎯 주요 특징

- **6개 주요 거래소 지원**: 바이비트, 바이낸스, OKX, 비트겟, 게이트아이오, 빙엑스
- **차별화된 할인율**: 20%~50% 거래소별 최고 할인 혜택
- **실시간 비교**: 모든 거래소 할인율을 한눈에 비교
- **평생 할인**: 가입 후 영구 할인 혜택 제공
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 완벽 지원

## 🚀 기술 스택

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Shadcn/ui** component library
- **TanStack Query** for state management
- **Wouter** for routing

### Backend
- **Express.js** with TypeScript
- **Drizzle ORM** with PostgreSQL
- **Zod** for validation
- **Express Sessions** for session management

### Development
- **Vite** for development server
- **ESBuild** for production builds
- **Node.js 20** runtime
- **TypeScript** full stack

## 📦 설치 및 실행

### 1. 프로젝트 클론
```bash
git clone https://github.com/your-username/cobana.git
cd cobana
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 환경 변수 설정
```bash
# .env 파일 생성
DATABASE_URL="your-postgresql-connection-string"
```

### 4. 개발 서버 실행
```bash
npm run dev
```

### 5. 프로덕션 빌드
```bash
npm run build
npm run start
```

## 🏗️ 프로젝트 구조

```
cobana/
├── client/                 # Frontend React 애플리케이션
│   ├── src/
│   │   ├── components/     # UI 컴포넌트
│   │   ├── pages/         # 페이지 컴포넌트
│   │   ├── lib/           # 유틸리티 함수
│   │   └── hooks/         # 커스텀 훅
├── server/                # Backend Express 서버
│   ├── index.ts          # 서버 진입점
│   ├── routes.ts         # API 라우트
│   └── storage.ts        # 데이터 저장소
├── shared/               # 공유 스키마
│   └── schema.ts        # 데이터베이스 스키마
└── package.json         # 프로젝트 설정
```

## 🎨 주요 페이지

### 홈페이지
- 히어로 섹션: Cobana 브랜드 소개
- 거래소 배너: 6개 거래소 할인율 비교
- 혜택 섹션: 주요 특징 및 장점
- 사용법 안내: 3단계 간단 가입 절차
- 사용자 후기: 실제 이용자 리뷰
- FAQ: 자주 묻는 질문
- CTA: 가입 유도 섹션

## 🔧 배포

### Vercel 배포
```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel --prod
```

### Netlify 배포
```bash
# 빌드
npm run build

# dist 폴더를 Netlify에 업로드
```

### 환경 변수 설정
배포 플랫폼에서 다음 환경 변수를 설정하세요:
- `DATABASE_URL`: PostgreSQL 연결 문자열

## 📊 거래소별 할인율

| 거래소 | 할인율 | 상태 |
|--------|--------|------|
| 바이비트 | 20% | ✅ 운영중 |
| 게이트아이오 | 25% | 🚧 준비중 |
| 바이낸스 | 25% | 🚧 준비중 |
| 빙엑스 | 30% | 🚧 준비중 |
| OKX | 40% | 🚧 준비중 |
| 비트겟 | 50% | 🚧 준비중 |

## 🤝 기여하기

1. Fork 프로젝트
2. Feature 브랜치 생성 (`git checkout -b feature/AmazingFeature`)
3. 변경사항 커밋 (`git commit -m 'Add some AmazingFeature'`)
4. 브랜치에 Push (`git push origin feature/AmazingFeature`)
5. Pull Request 생성

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 📞 문의

프로젝트에 대한 질문이나 제안사항이 있으시면 언제든지 연락주세요.

---

**Cobana** - 모든 거래소 할인 혜택을 한곳에서 🍌