const map = require('./map')
const activity = require('./activity_number_bar')
const highLevel = require('./high_level_talent_bar')
const intro = require('./introduce_place_pie')
const rank = require('./talent_rank_dount')

module.exports = {
  route: {
    name: 'introduction',
    path: ''
  },
  title: '人才引进专题',
  states: [
    {
      id: 'options',
      value: {
        backgroundColor: 'transparent',
        tooltip: {
          trigger: 'item',
          formatter: '{b}<br/>人才数量（人）：{c}'
        },
        visualMap: {
          type:'piecewise',
          pieces: [
            {gt: 1500, label: '1500人及以上'},
            {gt: 1000, lte: 1500, label: '1000-1500人'},
            {gt: 100, lte: 999, label: '100-999人'},
            {gt: 10, lte: 99, label: '10-99人'},
            {gt: 1, lt: 9, label: '1-9人'}
          ],
          orient: 'horizontal',
          bottom: '6%',
          left: '26%',
          inRange: {
            color: ['lightskyblue', 'yellow', 'orangered']
          }
        },
        series: [
          {
            type: 'map',
            mapType: 'Liuzhou',
            label: {
              show: true
            },
            data: [
              {name: '鼓楼区', value: 4},
              {name: '台江区', value: 15},
              {name: '仓山区', value: 31},
              {name: '马尾区', value: 69},
              {name: '晋安区', value: 1440},
              {name: '长乐区', value: 4068},
              {name: '闽侯县', value: 376},
              {name: '连江县', value: 45},
              {name: '罗源县', value: 55},
              {name: '闽清县', value: 2},
              {name: '永泰县', value: 677},
              {name: '平潭县', value: 677},
              {name: '福清市', value: 677},
            ],
          }
        ]
      }
    }
  ],
  components: [
    {
      id: 'background',
      component: 'img',
      position: [0, 0],
      props: {
        src: '/static/images/Bg.png'
      },
    },

    map,

    {
      id: 'title-bg',
      component: 'img',
      position: [607, 0],
      props: {
        $style: {
          width: '701px',
          height: '123px',
        },
        src: '/static/images/Title-Bg.png'
      },
    },

    {
      id: 'box-bg',
      component: 'img',
      position: [10, 10],
      props: {
        $style: {
          width: '440px',
          height: '1059px',
        },
        src: '/static/images/Box-Bg.png'
      },
    },

    {
      id: 'right-box-bg',
      component: 'img',
      position: [1471, 10],
      props: {
        $style: {
          width: '440px',
          height: '1059px',
        },
        src: '/static/images/Box-Bg.png'
      },
    },

    {
      id: 'page-title',
      component: 'div',
      content: '人才引进专题',
      position: [750, 27],
      props: {
        $style: {
          color: '#fff',
          fontSize: '42px',
          $fontWeight: '500',
          textAlign: 'center',
          letterSpacing: '1.2px',
        }
      }
    },

    {
      id: 'activity-number',
      component: 'div',
      position: [74, 155],
      props: {
        $style: {
          color: '#fff',
          fontSize: '18px',
          fontWeight: '600',
          textAlign: 'left',
          letterSpacing: '1px',
        },
      },
      content: '引才活动数量统计',
    },

    {
      id: 'high-level-talent',
      component: 'div',
      position: [74, 631],
      props: {
        $style: {
          color: '#fff',
          fontSize: '18px',
          fontWeight: '600',
          textAlign: 'left',
          letterSpacing: '1px',
        },
      },
      content: '高层次人才引进统计',
    },

    {
      id: 'introduce-place',
      component: 'div',
      position: [1536, 46],
      props: {
        $style: {
          color: '#fff',
          fontSize: '18px',
          fontWeight: '600',
          textAlign: 'left',
          letterSpacing: '1px',
        },
      },
      content: '引进渠道分析',
    },

    {
      id: 'talent-rank',
      component: 'div',
      position: [1536, 366],
      props: {
        $style: {
          color: '#fff',
          fontSize: '18px',
          fontWeight: '600',
          textAlign: 'left',
          letterSpacing: '1px',
        },
      },
      content: '引进人才职称分布',
    },

    {
      id: 'talent-education',
      component: 'div',
      position: [1536, 691],
      props: {
        $style: {
          color: '#fff',
          fontSize: '18px',
          fontWeight: '600',
          textAlign: 'left',
          letterSpacing: '1px',
        },
      },
      content: '引进人才学历分布',
    },

    {
      id: 'activity-number-icon',
      component: 'div',
      position: [40, 155],
      props: {
        $style: {
          color: '#6ad6ff',
          fontSize: '14px',
          fontWeight: 400,
          textAlign: 'left',
        },
      },
      content: '>>',
    },

    {
      id: 'high-level-talent-icon',
      component: 'div',
      position: [40, 634],
      props: {
        $style: {
          color: '#6ad6ff',
          fontSize: '14px',
          fontWeight: 400,
          textAlign: 'left',
        },
      },
      content: '>>',
    },

    {
      id: 'introduce-place-icon',
      component: 'div',
      position: [1504, 49],
      props: {
        $style: {
          color: '#6ad6ff',
          fontSize: '14px',
          fontWeight: 400,
          textAlign: 'left',
        },
      },
      content: '>>',
    },

    {
      id: 'talent-rank-icon',
      component: 'div',
      position: [1504, 369],
      props: {
        $style: {
          color: '#6ad6ff',
          fontSize: '14px',
          fontWeight: 400,
          textAlign: 'left',
        },
      },
      content: '>>',
    },

    {
      id: 'talent-education-icon',
      component: 'div',
      position: [1504, 694],
      props: {
        $style: {
          color: '#6ad6ff',
          fontSize: '14px',
          fontWeight: 400,
          textAlign: 'left',
        },
      },
      content: '>>',
    },

    {
      id: 'activity-number-circle',
      component: 'div',
      position: [128, 247],
      props: {
        $style: {
          height:'10px',
          width: '10px',
          borderRadius: '10px',
          borderWidth: '1px',
          borderColor: '#6ad6ff',
          borderStyle: 'solid',
        }
      },
    },

    {
      id: 'high-level-talent-circle',
      component: 'div',
      position: [104, 722],
      props: {
        $style: {
          height:'10px',
          width: '10px',
          borderRadius: '10px',
          borderWidth: '1px',
          borderColor: '#6ad6ff',
          borderStyle: 'solid',
        }
      },
    },

    {
      id: 'activity-bg',
      component: 'div',
      position: [30, 218],
      props: {
        $style: {
          height: '50px',
          width: '400px',
          backgroundColor: '#6ad6ff05',
          borderRadius: '5px',
        }
      }
    },

    {
      id: 'high-level-bg',
      component: 'div',
      position: [30, 693],
      props: {
        $style: {
          height: '50px',
          width: '400px',
          backgroundColor: '#6ad6ff05',
          borderRadius: '5px',
        }
      }
    },

    {
      id: 'departments-loader',
      component: '@byzanteam/vis-components/data-loader',
      position: [929, 125],
      exports: {
        results: 'results',
      },
      props: {
        // $url: "`/v1/components/d9b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=${craneStates.filterRange[0]}&end=${craneStates.filterRange[1]}`",
        // method: 'get',
      },
      children: [
        {
          id: 'departments-select',
          component: '@byzanteam/vis-components/vis-select',
          props: {
            // 'v-if': 'results',
            // $options: 'results.map( (item, index) => { return {label: item[0], uuid: index } } )',
            $options: "[{label: '福州', uuid: '0'}, {label: '全国', uuid: '1'}, {label: '陕西省', uuid: '2'}, {label: '江苏省', uuid: '3'}, {label: '福建省', uuid: '4'}, {label: '浙江省', uuid: '5'},]",
            'v-model': 'craneStates.department',
            placeholder: '福州',
          },
        },
      ],
    },

    activity,

    highLevel,

    intro,

    rank,
  ]
}