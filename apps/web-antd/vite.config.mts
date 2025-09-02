import { defineConfig } from '@vben/vite-config';

export default defineConfig(async () => {
  return {
    application: {},
    vite: {
      server: {
        proxy: {
          '/api': {
            changeOrigin: true,
            // 连接到金橙校园后端API
            target: 'http://localhost:3001',
            ws: true,
          },
        },
      },
    },
  };
});
