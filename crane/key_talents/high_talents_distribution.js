module.exports = [
  {
    id: 'degree-analysis-icon',
    component: 'div',
    position: [40, 806],
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
    position: [74, 803],
    props: {
      $style: {
        color: '#fff',
        fontSize: '18px',
        fontWeight: '600',
        textAlign: 'left',
        letterSpacing: '1px',
      },
    },
    content: '高层次人才专业分布',
  },
  {
    component: '@byzanteam/vis-components/data-loader',
    position: [30, 841],
    props: {
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
            $tooltip: {
              trigger: 'item',
              $formatter: "pieTooltipFormatterFunc",
              backgroundColor: '#566374f0',
            },
            $legend: {
              icon: 'circle',
              $itemWidth: 10,
              $itemHeight: 10,
              $right: 80,
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
            $series: "[{type: 'pie', left: -120, radius: ['35%', '60%'], label: {show: false}, labelLine: {show: false}, data: [{value: 1335, name: '电子信息'}, {value: 30, name: '机械电气'}, {value: 934, name: '精细化工'}, {value: 735, name: '生物医药'}, {value: 548, name: '劳动经济'}, {value: 220, name: '经济计划'}]}]"
          }
        }
      }
    ]
  },
]
