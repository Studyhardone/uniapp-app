import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig, loadEnv } from 'vite'
export default defineConfig(() => {
  const root = process.cwd()
  const viteEnv = loadEnv('development', root)
  console.log(viteEnv['VITE_SERVOCE_HOST'])
  return {
    plugins: [
      uni(),
      AutoImport({
        vueTemplate: true,
        dts: './src/types/auto-imports.d.ts',
        eslintrc: {
          enabled: true
        },
        imports: ['vue', 'uni-app', 'pinia']
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['legacy-js-api']
        }
      }
    },
    server: {
      port: 3000,
      proxy: {
        '/api': {
          target: viteEnv['VITE_SERVOCE_HOST'],
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '/api')
        }
      }
    }
  }
})
