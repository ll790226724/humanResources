module.exports = [
  {
    id: 'degree-analysis-icon',
    component: 'div',
    position: [1504, 717],
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
    id: 'degree-analysis-title',
    component: 'div',
    position: [1536, 714],
    props: {
      $style: {
        color: '#fff',
        fontSize: '18px',
        fontWeight: '600',
        textAlign: 'left',
        letterSpacing: '1px',
      },
    },
    content: '学历职称分析',
  },
  {
    component: '@byzanteam/vis-components/brick-tabs',
    position: [1586, 764],
    directive: {
      model: 'craneStates.chartTabCurrent',
    },
    props: {
      $tabNavs: 'craneStates.chartTabNavs',
      $activeTab: 'craneStates.chartTabCurrent'
    }
  },
  {
    component: '@byzanteam/vis-components/data-loader',
    position: [1490, 822],
    exports: {
      results: 'results',
    },
    props: {
      'v-if': 'craneStates.chartTabCurrent === craneStates.chartTabNavs[0]',
      $url: "`/v1/components/10b74ddd-39de-493f-84ab-9d87fcf23fee/data?year=${generateYear}&job=${craneStates.currentJob || ''}&area=${currentRegion}`",
      method: 'get',
      $data: "[[0, '暂无数据']]",
      $style: {
        width: '400px',
        height: '218px',
        overflow: 'scroll'
      }
    },
    children: [
      {
        component: 'v-chart',
        props: {
          $options: {
            backgroundColor: 'transparent',
            $legend: {
              type: 'scroll',
              icon: 'circle',
              $itemWidth: 10,
              $itemHeight: 10,
              $right: 75,
              top: 'middle',
              $itemGap: 9,
              orient: 'vertical',
              $textStyle: {
                color: '#4b9bbe',
                $fontSize: 12
              },
              inactiveColor: '#1C4159',
            },
            $color: "['#6ad6ff', '#4b9bbe', '#367290', '#275570', '#1c4159', '#153349']",
            $series: "[{type: 'pie', left: -140, radius: ['35%', '62%'], label: {show: false}, labelLine: {show: false}, data: results ? results.map(item => ({value: item [0], name: item[1]})) : [{value: 0, name: '暂无数据'}]}]",
            $tooltip: {
              trigger: 'item',
              $formatter: "pieTooltipFormatterFunc",
              backgroundColor: '#566374f0',
            }
          }
        }
      }
    ]
  },
  {
    component: '@byzanteam/vis-components/data-loader',
    position: [1490, 822],
    exports: {
      results: 'results',
    },
    props: {
      'v-if': 'craneStates.chartTabCurrent === craneStates.chartTabNavs[1]',
      $url: "`/v1/components/11b74ddd-39de-493f-84ab-9d87fcf23fee/data?year=${generateYear}&job=${craneStates.currentJob || ''}&area=${currentRegion}`",
      method: 'get',
      $data: "[[0, '暂无数据']]",
      $style: {
        width: '400px',
        height: '218px',
        overflow: 'scroll'
      }
    },
    children: [
      {
        component: 'v-chart',
        props: {
          $options: {
            backgroundColor: 'transparent',
            $legend: {
              type: 'scroll',
              icon: 'circle',
              $itemWidth: 10,
              $itemHeight: 10,
              $right: 75,
              top: 'middle',
              $itemGap: 9,
              orient: 'vertical',
              $textStyle: {
                color: '#4b9bbe',
                $fontSize: 12
              },
              inactiveColor: '#1C4159',
            },
            $color: "['#6ad6ff', '#4b9bbe', '#367290', '#275570', '#1c4159', '#153349']",
            $series: "[{type: 'pie', left: -140, radius: ['35%', '62%'], label: {show: false}, labelLine: {show: false}, data: results ? results.map(item => ({value: item [0], name: item[1]})) : [{value: 0, name: '暂无数据'}]}]",
            $tooltip: {
              trigger: 'item',
              $formatter: "pieTooltipFormatterFunc",
              backgroundColor: '#566374f0',
            }
          }
        }
      }
    ]
  },
]
