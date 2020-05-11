exports.normal_digital_style = {
  $titleStyle: {
    color: '#367391',
    fontSize: '16px',
    fontWeight: 400,
  },
  $prefixStyle: {
    color: '#367391',
    fontSize: '16px',
    fontWeight: 400,
  },
  $suffixStyle: {
    color: '#367391',
    fontSize: '16px',
    fontWeight: 400,
  },
  $digitalStyle: {
    fontSize: '32px',
    color: '#FFFFFF',
    fontWeight: 400,
    fontFamily: 'Oswald-Regular',
    format: '11',
    letterSpacing: '0.8',
  },
};

exports.small_digital_style = {
  $titleStyle: {
    color: '#367391',
    fontSize: '16px',
    fontWeight: 400,
  },
  $digitalStyle: {
    fontSize: '32px',
    color: '#FFFFFF',
    fontWeight: 400,
    fontFamily: 'Oswald-Regular',
    format: '11',
    letterSpacing: '0.8',

  },
};

const chartTooltipOptions = {
  $tooltip: {
    $text: {
      align: 'center',
      baseline: 'middle',
      fill: '#FFFFFF',
      $size: 14,
      $weight: 400
    },
    $notation: {
      fill: '#367391',
      name: 'circle-small',
      $size: 14
    }
  },
  $tooltipOptions: {
    background: 'rgba(60, 71, 89, 0.9)',
    $text: {
      align: 'center',
      baseline: 'middle',
      fill: '#FFFFFF',
      $size: 14,
      $weight: 400
    },
    $title:{
      align: 'center',
      baseline: 'middle',
      fill: '#FFFFFF',
      $size: 14,
      $weight: 400
    },
  }
};
exports.chartTooltipOptions = chartTooltipOptions;