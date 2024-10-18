const fs = require('fs')
const path = require('path')
function createRoute (dirName) {
  const notesArr = fs.readdirSync(path.resolve(__dirname, dirName))
  const result = []
  notesArr.forEach(n => {
    if (path.extname(n) === '.md') {
      let baseName = path.basename(n, '.md')
      if (baseName !== 'README') {
        result.push(baseName)
      }
    }
  })
  return result
}
module.exports = {
  "title": "Btoa",
  "description": "",
  "base": '/blog/',
  "dest": "dist",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "locales": {
    "/": {
      "lang": 'zh-CN'
    }
  },
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      // {
      //   "text": "文档",
      //   "icon": "reco-message",
      //   "link": "/blogs/other/guide",
      //   // "items": [
      //   //   {
      //   //     "text": "vuepress-reco",
      //   //     "link": "/docs/theme-reco/"
      //   //   }
      //   // ]
      // },
      {
        "text": "联系",
        "icon": "reco-message",
        "items": [
          {
            "text": "gitee",
            "link": "https://gitee.com/btoa",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/blogs/category/": createRoute('../blogs/category/'),
      "/blogs/tools/": createRoute('../blogs/tools/'),
      "/blogs/other/": createRoute('../blogs/other/'),
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "博客"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    // "friendLink": [
    //   {
    //     "title": "午后南杂",
    //     "desc": "Enjoy when you can, and endure when you must.",
    //     "email": "1156743527@qq.com",
    //     "link": "https://www.recoluan.com"
    //   },
    //   {
    //     "title": "vuepress-theme-reco",
    //     "desc": "A simple and beautiful vuepress Blog & Doc theme.",
    //     "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
    //     "link": "https://vuepress-theme-reco.recoluan.com"
    //   }
    // ],
    // "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Btoa",
    "authorAvatar": "/avatar.jpeg",
    "record": "",
    "startYear": "2017"
  },
  "markdown": {
    "lineNumbers": true
  }
}