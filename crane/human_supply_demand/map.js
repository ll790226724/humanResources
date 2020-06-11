module.exports = [
  {
    component: '@byzanteam/vis-components/data-loader',
    position: [876, 125],
    children: [
      {
        id: 'departments-select',
        component: '@byzanteam/vis-components/vis-select',
        props: {
          $options: "[{label: '福州', uuid: 'fuzhou'}, {label: '宁德', uuid: 'ningde'}, {label: '龙岩', uuid: 'longyan'}, {label: '莆田', uuid: 'putian'}, {label: '南平', uuid: 'nanping'}, {label: '三明', uuid: 'sanming'}, {label: '厦门', uuid: 'xiamen'}, {label: '漳州', uuid: 'zhangzhou'}, {label: '泉州', uuid: 'quanzhou'}]",
          'v-model': 'craneStates.department',
          placeholder: '福州',
        },
      },
    ],
  },
  {
    component: '@byzanteam/vis-components/data-loader',
    position: [410, 160],
    props: {
      $style: {
        width: '1100px',
        height: '900px'
      }
    },
    children: [
      {
        id: 'map',
        component: 'v-chart',
        props: {
          $options: {
            backgroundColor: 'transparent',
            $series: "[{type: 'map', mapType: craneStates.department.uuid || 'fuzhou', label: {show: true, fontSize: 14, color: 'white'}, itemStyle: {areaColor: 'rgba(106, 214, 255, .05)', borderColor: '#6ad6ff', borderType: 'solid', borderWidth: 0.5}, emphasis: {label: {color: 'white',fontWeight: 600}, itemStyle: {areaColor: '#4B9BBE'}}}]"
          }
        }
      }
    ]
  }
]
