# Portfolio Anh Kiệt - React Version

Website portfolio cá nhân hiện đại với thiết kế glassmorphism, hiệu ứng 3D và animations mượt mà sử dụng React và Framer Motion.

## Tính năng

- **Thiết kế hiện đại**: Glassmorphism với backdrop-blur, gradient background, dark mode
- **Animations**: Framer Motion animations, scroll reveal, hover effects
- **Responsive**: Tối ưu cho mobile, tablet, desktop
- **Interactive**: Custom cursor, parallax scrolling, skill bars animation
- **One-page layout**: Smooth scrolling giữa các sections

## Cấu trúc dự án

```
react-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx      # Navigation bar với animations
│   │   ├── Hero.tsx        # Hero section với background động
│   │   ├── Skills.tsx      # Skills với progress bars
│   │   ├── Projects.tsx    # Portfolio projects grid
│   │   └── Contact.tsx     # Contact form và info
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── index.css           # Tailwind CSS và custom styles
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind configuration
├── vite.config.ts          # Vite configuration
└── package.json            # Dependencies
```

## Cách chạy

1. Cài đặt dependencies:
   ```bash
   npm install
   ```

2. Chạy development server:
   ```bash
   npm run dev
   ```

3. Mở `http://localhost:5174` trong trình duyệt

## Deploy lên Vercel / Netlify

1. Push code lên GitHub repository
2. Connect với Vercel hoặc Netlify
3. Deploy automatically

## Tùy chỉnh

- **Màu sắc**: Chỉnh sửa trong `tailwind.config.js` và components
- **Nội dung**: Sửa text trong các component React
- **Animations**: Tùy chỉnh Framer Motion trong components
- **Skills**: Thay đổi data trong `Skills.tsx`

## Công nghệ sử dụng

- **React 18**: Framework JavaScript
- **TypeScript**: Type safety
- **Framer Motion**: Animation library
- **Tailwind CSS**: Utility-first CSS
- **Vite**: Build tool và dev server
- **Lucide React**: Icons

## Scripts

- `npm run dev` - Development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

© 2024 Anh Kiệt. All rights reserved.

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
