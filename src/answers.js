export const answerConfigs = [
  {
    password: '741889069912ffe2c95aad40e8607e63df6efd2b67c9732e9131a11598fa2c95',
    title: 'The Traveller in Japan',
    intro: 'The Traveller seems to have a trip in Japan, your role will be to figure out where did he go. All answers should be in fully lowercase or you can convert it to lowercase.',
    questions: [
      {
        prompt: 'Based on the airplane photo, which city must he have landed(1 word answer)',
        fields: [
          { hashes: ['bc691003939b33f22ac89afc39417969b3240c6fba15b987c3e9a576cdb15b0b'] }
        ]
      },
      {
        prompt: 'Looking at the subsequent photo, where did he go after landing(3 word Answer)',
        fields: [
          { hashes: ['7a36acf312bf48940dbfa16484e62e3a88b11f98aebbc57596cb51e2fc5a774a'] }
        ]
      },
      {
        prompt: 'Immediately after visiting the previous destination, where did he go next',
        fields: [
          { hashes: ['c77aa319360d27d3c53300778c543ad657c835e72ad84f735fdb14b1d7495500'] }
        ]
      },
      {
        prompt: 'Based on the blog, When must this trip has occurred? (Enter in dd/mm/yyyy format)',
        fields: [
          { label: 'From', hashes: ['3a5053fe2ee2a0eb90f51686e82ed94c701b0379bd680cc2996be6f958fc2eb8'] },
          { label: 'To', hashes: ['4cd9cb1d9d6fb4a83d75b3a18f09a40e206b7dae4a0c61fd9cd4fe3fb2870222'] }
        ]
      },
      {
        prompt: 'Where did the traveller have an encounter with someone?(Hint:Webpages might hide information)',
        fields: [
          { hashes: ['c6913ac879f93ebdc710b40022559d9338da21d4adba3eb08614f9e6e4ec82b2'] }
        ]
      },
      {
        prompt: 'What is the hotel they stayed at(Hint:You might need to download the image)',
        fields: [
          { hashes: ['3a7bfb1524c850bc5914283e4dff394320c5b72893c6647f0fdfebe39d3a06f9'] }
        ]
      }
    ],
    completion: {
      heading: 'Thank you for trying out the demo?',
      body: "If you are interested, why don't you join us for the physical session on 27th September 2026?",
      url: 'https://www.onepa.gov.sg/events/pioneeryouths-decode-the-lamplight-e61914780'
    }
  },
  {
    password: '964e89e179b07537b00ee8d84876fc2b7316bc36a8f55c1221bb16517a8dfe0f',
    title: 'WORK IN PROGRES',
    intro: '',
    questions: [
      {
        prompt: '',
        fields: [
          { hashes: ['b11f203e8e6ce90d0ab5a01a37ac248669987afb2a50fe0224fa8b8c5c985a73'] }
        ]
      }
    ],
    completion: {
      heading: 'YOU WIN',
      body: '',
      url: ''
    }
  }
]
