module.exports = {
  title: 'CSAUSK',
  repo: 'https://github.com/kokic/csausk',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/docs/guide/' },
      { text: 'External', link: 'https://kokic.github.io' },
    ],
    // sidebar: 'auto', 
    // collapsable: false,
    // sidebarDepth: 2,

    sidebar: [
      // '/', 
      // '/docs/views/', 

      {
        title: 'Guide', 
        sidebarDepth: 2, 
        collapsable: false,
        children: [
          
        ]
      },

      {
        title: 'References', 
        sidebarDepth: 2, 
        collapsable: false,
        children: [
          '/docs/references/perusal', 
          '/docs/references/demangle',  
        ]
      },

      {
        title: 'Views', 
        sidebarDepth: 2, 
        collapsable: false,
        children: [
          '/docs/views/curry-howard', 
          '/docs/views/closure-magic', 
          '/docs/views/java-reflect', 
        ]
      }
    ]

    // sidebar: {
    //   'guide/': [
    //     '',
    //     // 'one',
    //     // 'two',
    //   ],

    //   'references/': [
    //     '',
    //     'one',
    //   ],

    //   '/docs/views/': [
    //     'one',
    //     'next',
    //   ],

    //   '/': [
    //     '',
    //     'docs/guide/',
    //     'docs/references/',
    //     'docs/views/',
    //     'about',
    //   ]
    // }

  }
}
