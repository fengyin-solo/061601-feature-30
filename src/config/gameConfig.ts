import type { GameConfig } from '../types/game'

export const gameConfig: GameConfig = {
  title: '恋爱物语',
  initialResources: 100,
  maxActionsPerDay: 3,
  daysPerWeek: 7,
  maxAffinity: 100,
  minAffinity: -50,
  maxMood: 100,
  minMood: 0,
  moodDecayPerDay: 5,
  affinityDecayPerDay: 1,
  timeSlots: ['morning', 'afternoon', 'evening', 'night'],

  characters: [
    {
      id: 'linxiaoyu',
      name: '林小雨',
      avatar: '🌸',
      description: '温柔善良的图书馆管理员，喜欢读书和花草',
      personality: '温柔内向，有些害羞，但对喜欢的事物非常热情',
      favoriteGifts: ['flower', 'book', 'tea'],
      dislikedGifts: ['alcohol', 'game_console'],
      chatTopics: [
        { topic: '文学', affinity: 3 },
        { topic: '花草', affinity: 3 },
        { topic: '天气', affinity: 1 },
        { topic: '游戏', affinity: -1 },
        { topic: '运动', affinity: 0 }
      ],
      baseAffinity: 10,
      baseMood: 60,
      unlocked: true
    },
    {
      id: 'sufei',
      name: '苏菲',
      avatar: '🔥',
      description: '活泼开朗的咖啡馆女老板，热爱烘焙',
      personality: '热情外向，有点毒舌但内心温柔',
      favoriteGifts: ['coffee', 'dessert', 'game_console'],
      dislikedGifts: ['flower', 'book'],
      chatTopics: [
        { topic: '美食', affinity: 3 },
        { topic: '游戏', affinity: 3 },
        { topic: '天气', affinity: 1 },
        { topic: '文学', affinity: -1 },
        { topic: '运动', affinity: 2 }
      ],
      baseAffinity: 5,
      baseMood: 70,
      unlocked: true
    },
    {
      id: 'yeqing',
      name: '叶青',
      avatar: '🌙',
      description: '神秘的转学生，总是独来独往',
      personality: '冷静寡言，似乎藏着很多秘密',
      favoriteGifts: ['book', 'tea', 'music_box'],
      dislikedGifts: ['dessert', 'alcohol'],
      chatTopics: [
        { topic: '文学', affinity: 2 },
        { topic: '音乐', affinity: 3 },
        { topic: '天气', affinity: 0 },
        { topic: '游戏', affinity: 1 },
        { topic: '运动', affinity: -1 }
      ],
      baseAffinity: 0,
      baseMood: 50,
      unlocked: false,
      hidden: true,
      unlockCondition: 'unlock_yeqing'
    }
  ],

  gifts: [
    { id: 'flower', name: '鲜花', price: 30, icon: '🌹', description: '一束美丽的鲜花' },
    { id: 'book', name: '小说', price: 25, icon: '📚', description: '一本畅销小说' },
    { id: 'tea', name: '茶叶', price: 40, icon: '🍵', description: '上等的茶叶礼盒' },
    { id: 'coffee', name: '咖啡豆', price: 35, icon: '☕', description: '精品咖啡豆' },
    { id: 'dessert', name: '甜点', price: 20, icon: '🍰', description: '精致的手工甜点' },
    { id: 'game_console', name: '游戏机', price: 80, icon: '🎮', description: '最新款掌上游戏机' },
    { id: 'alcohol', name: '红酒', price: 60, icon: '🍷', description: '一瓶高档红酒' },
    { id: 'music_box', name: '音乐盒', price: 50, icon: '🎵', description: '精致的八音盒' }
  ],

  cards: [
    { id: 'linxiaoyu_common_1', name: '图书馆的邂逅', characterId: 'linxiaoyu', rarity: 'common', image: '📖', description: '第一次在图书馆见到小雨的场景', unlockCondition: 'meet_linxiaoyu' },
    { id: 'linxiaoyu_rare_1', name: '花田中', characterId: 'linxiaoyu', rarity: 'rare', image: '🌻', description: '小雨在花田中微笑的样子', unlockCondition: 'linxiaoyu_affinity_40' },
    { id: 'linxiaoyu_epic_1', name: '雨中伞', characterId: 'linxiaoyu', rarity: 'epic', image: '☂️', description: '一起在雨中撑伞回家', unlockCondition: 'linxiaoyu_affinity_70' },
    { id: 'linxiaoyu_legendary_1', name: '告白', characterId: 'linxiaoyu', rarity: 'legendary', image: '💝', description: '樱花树下的告白', unlockCondition: 'linxiaoyu_affinity_100' },
    { id: 'sufei_common_1', name: '咖啡馆的相遇', characterId: 'sufei', rarity: 'common', image: '☕', description: '第一次走进苏菲的咖啡馆', unlockCondition: 'meet_sufei' },
    { id: 'sufei_rare_1', name: '烘焙时光', characterId: 'sufei', rarity: 'rare', image: '🧁', description: '苏菲教你做蛋糕', unlockCondition: 'sufei_affinity_40' },
    { id: 'sufei_epic_1', name: '深夜游戏', characterId: 'sufei', rarity: 'epic', image: '🎮', description: '一起打游戏到深夜', unlockCondition: 'sufei_affinity_70' },
    { id: 'sufei_legendary_1', name: '夕阳下的吻', characterId: 'sufei', rarity: 'legendary', image: '🌅', description: '咖啡馆关门前的浪漫时刻', unlockCondition: 'sufei_affinity_100' },
    { id: 'yeqing_common_1', name: '月下身影', characterId: 'yeqing', rarity: 'common', image: '🌙', description: '月光下独自散步的叶青', unlockCondition: 'meet_yeqing' },
    { id: 'yeqing_rare_1', name: '琴音缭绕', characterId: 'yeqing', rarity: 'rare', image: '🎹', description: '叶青弹奏钢琴的样子', unlockCondition: 'yeqing_affinity_40' }
  ],

  events: [
    {
      id: 'intro_linxiaoyu',
      title: '图书馆的邂逅',
      description: '你在图书馆寻找一本书时，一位温柔的女生帮你找到了它。她叫林小雨，是这里的管理员。',
      characterId: 'linxiaoyu',
      triggerCondition: { minDay: 1, maxDay: 1, timeOfDay: 'morning' },
      choices: [
        {
          id: 'thankful',
          text: '道谢并和她聊聊天',
          effects: [{ characterId: 'linxiaoyu', affinityChange: 5, moodChange: 10 }],
          addCardId: 'linxiaoyu_common_1'
        },
        {
          id: 'hurry',
          text: '道谢后匆匆离开',
          effects: [{ characterId: 'linxiaoyu', affinityChange: 2 }]
        }
      ],
      once: true,
      priority: 100
    },
    {
      id: 'intro_sufei',
      title: '咖啡馆的偶遇',
      description: '你走进一家新开的咖啡馆，热情的女老板苏菲立刻迎了上来。"欢迎光临！今天想来点什么？"',
      characterId: 'sufei',
      triggerCondition: { minDay: 1, maxDay: 2, timeOfDay: 'afternoon' },
      choices: [
        {
          id: 'coffee',
          text: '点一杯招牌咖啡',
          effects: [{ characterId: 'sufei', affinityChange: 5, moodChange: 10 }],
          resourceChange: -10,
          addCardId: 'sufei_common_1'
        },
        {
          id: 'dessert',
          text: '点一份甜点尝尝',
          effects: [{ characterId: 'sufei', affinityChange: 7, moodChange: 15 }],
          resourceChange: -20
        }
      ],
      once: true,
      priority: 99
    },
    {
      id: 'rainy_day_1',
      title: '突如其来的暴雨',
      description: '天空突然下起了大雨，你看到林小雨站在屋檐下，似乎没带伞。',
      characterId: 'linxiaoyu',
      triggerCondition: { minDay: 3, timeOfDay: 'evening', minAffinity: 20, characterId: 'linxiaoyu' },
      choices: [
        {
          id: 'share_umbrella',
          text: '把伞借给她',
          effects: [{ characterId: 'linxiaoyu', affinityChange: 15, moodChange: 20 }]
        },
        {
          id: 'wait_together',
          text: '陪她等雨停',
          effects: [{ characterId: 'linxiaoyu', affinityChange: 10, moodChange: 10 }]
        },
        {
          id: 'leave',
          text: '假装没看到走开',
          effects: [{ characterId: 'linxiaoyu', affinityChange: -5, moodChange: -10 }]
        }
      ],
      once: true,
      priority: 90
    },
    {
      id: 'cafe_late_night',
      title: '深夜咖啡馆',
      description: '你路过咖啡馆，发现灯还亮着。苏菲一个人在店里，看起来有些疲惫。',
      characterId: 'sufei',
      triggerCondition: { minDay: 5, timeOfDay: 'night', minAffinity: 30, characterId: 'sufei' },
      choices: [
        {
          id: 'help',
          text: '进去帮帮忙',
          effects: [{ characterId: 'sufei', affinityChange: 12, moodChange: 15 }],
          resourceChange: -5
        },
        {
          id: 'company',
          text: '点杯咖啡陪陪她',
          effects: [{ characterId: 'sufei', affinityChange: 8, moodChange: 10 }],
          resourceChange: -15
        },
        {
          id: 'ignore',
          text: '不打扰她了',
          effects: [{ characterId: 'sufei', affinityChange: -3 }]
        }
      ],
      once: true,
      priority: 85
    },
    {
      id: 'mysterious_girl',
      title: '月下身影',
      description: '根据收集到的线索，你来到公园。月光下，一个熟悉的身影独自坐在长椅上。她就是你一直在寻找的人——叶青。',
      characterId: 'yeqing',
      triggerCondition: { minDay: 7, requiredFlags: ['yeqing_all_clues_collected'] },
      choices: [
        {
          id: 'approach',
          text: '上前打招呼，说出你对她的了解',
          effects: [
            { characterId: 'yeqing', affinityChange: 10 },
            { characterId: 'linxiaoyu', affinityChange: -2 },
            { characterId: 'sufei', affinityChange: -2 }
          ],
          unlockCharacterId: 'yeqing',
          addCardId: 'yeqing_common_1'
        },
        {
          id: 'observe',
          text: '在远处默默观察',
          effects: [{ characterId: 'yeqing', affinityChange: 3 }],
          addFlag: 'yeqing_observed'
        }
      ],
      once: true,
      priority: 95
    },
    {
      id: 'birthday_surprise_1',
      title: '小雨的生日',
      description: '你想起今天是林小雨的生日，要准备什么惊喜吗？',
      characterId: 'linxiaoyu',
      triggerCondition: { minDay: 14, minAffinity: 50, characterId: 'linxiaoyu' },
      choices: [
        {
          id: 'big_surprise',
          text: '准备一个大惊喜',
          effects: [{ characterId: 'linxiaoyu', affinityChange: 25, moodChange: 30 }],
          resourceChange: -50
        },
        {
          id: 'small_gift',
          text: '送一个小礼物',
          effects: [{ characterId: 'linxiaoyu', affinityChange: 10, moodChange: 15 }],
          resourceChange: -20
        },
        {
          id: 'forget',
          text: '算了，假装不知道',
          effects: [{ characterId: 'linxiaoyu', affinityChange: -10, moodChange: -20 }]
        }
      ],
      once: true,
      priority: 95
    },
    {
      id: 'conflict_1',
      title: '两人的邀约',
      description: '林小雨和苏菲同时邀请你周末出去，你该怎么办？',
      triggerCondition: { minDay: 10, minAffinity: 35 },
      choices: [
        {
          id: 'choose_xiaoyu',
          text: '答应小雨',
          effects: [
            { characterId: 'linxiaoyu', affinityChange: 10, moodChange: 15 },
            { characterId: 'sufei', affinityChange: -8, moodChange: -10 }
          ]
        },
        {
          id: 'choose_sufei',
          text: '答应苏菲',
          effects: [
            { characterId: 'sufei', affinityChange: 10, moodChange: 15 },
            { characterId: 'linxiaoyu', affinityChange: -8, moodChange: -10 }
          ]
        },
        {
          id: 'reject_both',
          text: '都拒绝，说有事',
          effects: [
            { characterId: 'linxiaoyu', affinityChange: -3 },
            { characterId: 'sufei', affinityChange: -3 }
          ]
        },
        {
          id: 'suggest_together',
          text: '建议三个人一起',
          effects: [
            { characterId: 'linxiaoyu', affinityChange: -2 },
            { characterId: 'sufei', affinityChange: -2 }
          ]
        }
      ],
      once: true,
      priority: 88
    },
    {
      id: 'library_bookmark',
      title: '图书馆的发现',
      description: '你在图书馆的一本书中发现了一张精致的书签，上面用清秀的字迹写着一句诗。',
      characterId: 'linxiaoyu',
      triggerCondition: { minDay: 3, maxDay: 6, timeOfDay: 'morning', minAffinity: 20, characterId: 'linxiaoyu' },
      choices: [
        {
          id: 'ask_xiaoyu',
          text: '问问小雨这是谁的',
          effects: [{ characterId: 'linxiaoyu', affinityChange: 3 }],
          addClueId: 'yeqing_clue_4',
          addFlag: 'library_bookmark_ask'
        },
        {
          id: 'keep_it',
          text: '先收起来，以后再说',
          effects: []
        }
      ],
      once: true,
      priority: 80
    },
    {
      id: 'night_piano',
      title: '深夜琴声',
      description: '深夜回家的路上，你听到公园深处传来优美的钢琴声，在月光下回荡。',
      triggerCondition: { minDay: 4, maxDay: 6, timeOfDay: 'night' },
      choices: [
        {
          id: 'investigate',
          text: '循着声音去看看',
          effects: [],
          addClueId: 'yeqing_clue_3'
        },
        {
          id: 'go_home',
          text: '太晚了，还是回家吧',
          effects: []
        }
      ],
      once: true,
      priority: 75
    },
    {
      id: 'transfer_student_rumor',
      title: '神秘转学生',
      description: '林小雨和苏菲闲聊时提到，最近学校来了一位神秘的转学生，总是独来独往。',
      triggerCondition: { minDay: 5, maxDay: 7, minAffinity: 30, characterId: 'linxiaoyu', requiredFlags: ['yeqing_clue_1_collected', 'yeqing_clue_2_collected'] },
      choices: [
        {
          id: 'ask_more',
          text: '详细问问关于她的事',
          effects: [
            { characterId: 'linxiaoyu', affinityChange: 2 },
            { characterId: 'sufei', affinityChange: 2 }
          ],
          addFlag: 'heard_about_transfer',
          addClueId: 'yeqing_clue_5'
        },
        {
          id: 'not_interested',
          text: '哦，听起来不太有趣',
          effects: []
        }
      ],
      once: true,
      priority: 85
    },
    {
      id: 'sufei_talk_about_customer',
      title: '咖啡馆的稀客',
      description: '苏菲整理杯子时忽然说：「说起来，最近有个很特别的客人呢...」',
      characterId: 'sufei',
      triggerCondition: { minDay: 3, maxDay: 5, timeOfDay: 'afternoon', minAffinity: 25, characterId: 'sufei' },
      choices: [
        {
          id: 'curious',
          text: '哦？是什么样的人？',
          effects: [{ characterId: 'sufei', affinityChange: 3 }],
          addClueId: 'yeqing_clue_2',
          addFlag: 'sufei_talk_about_customer_curious'
        },
        {
          id: 'busy',
          text: '我先点单吧',
          effects: []
        }
      ],
      once: true,
      priority: 82
    }
  ],

  actions: [
    { type: 'chat', name: '聊天', icon: '💬', description: '和角色聊聊天，增进感情', energyCost: 1 },
    { type: 'gift', name: '送礼', icon: '🎁', description: '送礼物给角色，效果因人而异', energyCost: 1 },
    { type: 'work', name: '打工', icon: '💼', description: '辛苦工作赚取代币', energyCost: 2 }
  ],

  workRewards: { min: 15, max: 35 },

  clues: [
    {
      id: 'yeqing_clue_1',
      name: '图书馆的神秘身影',
      description: '林小雨提到，最近图书馆常有一位气质清冷的女生，总是坐在靠窗的角落看书，很少与人说话。',
      icon: '📚',
      characterId: 'yeqing',
      hint: '和林小雨聊「文学」时或许能了解更多',
      unlockCondition: {
        type: 'chat',
        value: '文学',
        characterId: 'linxiaoyu',
        minAffinity: 15
      }
    },
    {
      id: 'yeqing_clue_2',
      name: '咖啡馆的稀客',
      description: '苏菲说有位奇怪的客人，每天傍晚都会来点一杯不加糖的美式，坐在角落里听音乐，从不和人交谈。',
      icon: '☕',
      characterId: 'yeqing',
      hint: '提升与苏菲的好感度，她可能会告诉你更多',
      unlockCondition: {
        type: 'event',
        value: 'sufei_talk_about_customer_curious'
      }
    },
    {
      id: 'yeqing_clue_3',
      name: '月夜的琴声',
      description: '深夜回家时，你听到公园深处传来优美的钢琴声，似乎有人在月光下弹奏。',
      icon: '🎹',
      characterId: 'yeqing',
      hint: '在第4天的夜晚外出或许会有奇遇',
      unlockCondition: {
        type: 'day',
        value: 4,
        minDay: 4,
        timeOfDay: 'night'
      }
    },
    {
      id: 'yeqing_clue_4',
      name: '遗落的书签',
      description: '你在图书馆捡到一张精致的书签，上面用清秀的字迹写着一句诗：「明月几时有，把酒问青天」。',
      icon: '🔖',
      characterId: 'yeqing',
      hint: '在图书馆的事件中仔细观察',
      unlockCondition: {
        type: 'event',
        value: 'library_bookmark_ask'
      }
    },
    {
      id: 'yeqing_clue_5',
      name: '转学生的传闻',
      description: '听说学校来了一位神秘的转学生，总是独来独往，有人说她在寻找什么重要的东西。',
      icon: '🌙',
      characterId: 'yeqing',
      hint: '和两位女主角的好感度都达到一定程度后，她们可能会聊起这件事',
      unlockCondition: {
        type: 'flag',
        value: 'heard_about_transfer',
        requiredFlags: ['heard_about_transfer']
      }
    }
  ]
}

export default gameConfig
