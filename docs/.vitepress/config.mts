import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/blog/',
  title: "お金の教養チャンネル",
  description: "知識＝希望。学校では教えてくれないお金の真実。",
  themeConfig: {
    nav: [
      { text: 'ホーム', link: '/' },
      { text: '記事一覧', link: '/posts/' },
    ],

    sidebar: [
      {
        text: '基礎知識編',
        items: [
          { text: '1. 複利の魔法', link: '/posts/compound-interest' },
          { text: '2. インフレの恐怖', link: '/posts/inflation' },
          { text: '3. アセットアロケーション', link: '/posts/asset-allocation' }
        ]
      }
    ],

    socialLinks: [
      //{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 お金の教養チャンネル'
    }
  }
})
