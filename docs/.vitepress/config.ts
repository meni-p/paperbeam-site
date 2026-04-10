//Import VitePress configuration helper
import { defineConfig } from 'vitepress'

//Export main site configuration
export default defineConfig({
  //Site title displayed in navbar
  title: "PaperBeam",

  //Site description
  description: "Elevate Your Content Flow",
  
  themeConfig: {
    //Logo display
    logo: '/logo.png',

    //Top navigation bar links
    nav: [
      { text: 'Products', link: '/products' },
      { text: 'API', link: '/api' },
      
      //Dropdown menu for learning pages
      {
        text: 'Learning',
        items: [
          { text: 'Documentation', link: '/learning/docs' },
          { text: 'Guide', link: '/learning/guide' },
          { text: 'Examples', link: '/learning/examples' },
          { text: 'Videos', link: '/learning/videos' }
        ]
      },
      { text: 'Contact', link: '/contact' }
    ],

    //Sidebar navigation displayed on non-homepages
    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'Products', link: '/products' },
          { text: 'API', link: '/api' }
        ]
      },
      {
        text: 'Learning',
        items: [
          { text: 'Documentation', link: '/learning/docs' },
          { text: 'Guide', link: '/learning/guide' },
          { text: 'Examples', link: '/learning/examples' },
          { text: 'Videos', link: '/learning/videos' }
        ]
      }
    ],

    //Github link on navbar
    socialLinks: [
      { icon: 'github', link: 'https://github.com/meni-p/paperbeam-site.git' }
    ]
  }
})