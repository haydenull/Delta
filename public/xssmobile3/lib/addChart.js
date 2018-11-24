// 基于准备好的dom，初始化echarts实例
var slide4_1 = echarts.init(document.getElementById('slide4-1'));
// 指定图表的配置项和数据
var option = {
  series: [{
    name: '树图',
    type: 'tree',
    orient: 'horizontal', // vertical horizontal
    top: 0,
    left: 0,
    // right: 0,
    // bottom: 0,
    width: '60%',
    // height: '100%',
    itemStyle: {
      color: '#3365b7',
      borderWidth: 0,
      // borderType: 'solid',
      // normal: {
      //   label: {
      //     show: true,
      //     position: 'inside',
      //     textStyle: {
      //       color: '#cc9999',
      //       fontSize: 15,
      //       fontWeight: 'bolder'
      //     }
      //   },
      //   lineStyle: {
      //     color: '#000',
      //     width: 1,
      //     type: 'broken' // 'curve'|'broken'|'solid'|'dotted'|'dashed'
      //   }
      // },
      // emphasis: {
      //   label: {
      //     show: true
      //   }
      // }
    },
    label: {
      normal: {
        color: '#fff',
        backgroundColor: '#3365b7',
        padding: [6, 1, 6, 1],
        borderRadius: 5,
        align: 'left',
        lineHeight: 100
      }
    },
    data: [{
      name: '部门总经理',
      value: 6,
      children: [{
          name: '组织绩效',
          value: 4,
          children: [{
              name: '工作业绩类指标',
              value: 4
            },
            {
              name: '组织类指标',
              value: 4,
            },
            {
              name: '业绩类指标',
              value: 4,
            }
          ]
        },
        {
          name: '能力素质类指标',
          value: 4,
          label: {
            position: 'bottom'
          }
        },
      ]
    }]
  }]
};
// 使用刚指定的配置项和数据显示图表。
slide4_1.setOption(option);


// 基于准备好的dom，初始化echarts实例
var slide9_1 = echarts.init(document.getElementById('slide9-1'));
// 指定图表的配置项和数据
var option = {
  series: [{
    name: '树图',
    type: 'tree',
    orient: 'horizontal', // vertical horizontal
    top: '5%',
    left: 0,
    // right: 0,
    bottom: 0,
    width: '60%',
    height: '100%',
    itemStyle: {
      color: '#3365b7',
      borderWidth: 0,
      // borderType: 'solid',
      // normal: {
      //   label: {
      //     show: true,
      //     position: 'inside',
      //     textStyle: {
      //       color: '#cc9999',
      //       fontSize: 15,
      //       fontWeight: 'bolder'
      //     }
      //   },
      //   lineStyle: {
      //     color: '#000',
      //     width: 1,
      //     type: 'broken' // 'curve'|'broken'|'solid'|'dotted'|'dashed'
      //   }
      // },
      // emphasis: {
      //   label: {
      //     show: true
      //   }
      // }
    },
    label: {
      normal: {
        color: '#fff',
        backgroundColor: '#3365b7',
        padding: [6, 1, 6, 1],
        borderRadius: 5,
        align: 'left',
        lineHeight: 100
      }
    },
    data: [{
      name: '部门总经理',
      value: 6,
      children: [{
          name: '其他部门',
          value: 4,
          children: [{
              name: '组织类',
              value: 4
            },
            {
              name: '能力素质',
              value: 4,
            }


          ]
        },
        {
          name: '部门副总经理',
          value: 6,
          children: [{
              name: '部门自选指标',
              value: 4,
            },
            {
              name: '个人重点工作',
              value: 4
            },
            {
              name: '能力素质',
              value: 4,
            }
          ]
        },
        {
          name: '专业序列员工',
          value: 6,
          children: [{
              name: '部门自选指标',
              value: 4,
            },
            {
              name: '个人重点工作',
              value: 4
            },
            {
              name: '能力素质',
              value: 4,
            }
          ]
        }
      ]
    }]
  }]
};
// 使用刚指定的配置项和数据显示图表。
slide9_1.setOption(option);



// 基于准备好的dom，初始化echarts实例
var slide10_1 = echarts.init(document.getElementById('slide10-1'));
// 指定图表的配置项和数据
var option = {
  series: [{
    name: '树图',
    type: 'tree',
    orient: 'horizontal', // vertical horizontal
    top: '10%',
    left: 0,
    right: 0,
    bottom: 0,
    width: '70%',
    height: '100%',
    itemStyle: {
      color: '#3365b7',
      borderWidth: 0,
      // borderType: 'solid',
      // normal: {
      //   label: {
      //     show: true,
      //     position: 'inside',
      //     textStyle: {
      //       color: '#cc9999',
      //       fontSize: 15,
      //       fontWeight: 'bolder'
      //     }
      //   },
      //   lineStyle: {
      //     color: '#000',
      //     width: 1,
      //     type: 'broken' // 'curve'|'broken'|'solid'|'dotted'|'dashed'
      //   }
      // },
      // emphasis: {
      //   label: {
      //     show: true
      //   }
      // }
    },
    label: {
      normal: {
        color: '#fff',
        backgroundColor: '#3365b7',
        padding: [6, 1, 6, 1],
        borderRadius: 5,
        align: 'left',
        lineHeight: 100
      }
    },
    data: [{
      name: '部门副总经理',
      value: 6,
      children: [{
          name: '部门总经理',
          value: 4,
          children: [{
              name: '能力素质',
              value: 4
            }


          ]
        },
        {
          name: '分管专业\n序列员工',
          value: 6,
          children: [{
              name: '部门自选指标',
              value: 4,
            },
            {
              name: '个人重点工作',
              value: 4
            },
            {
              name: '能力素质',
              value: 4,
            }
          ]
        }
      ]
    }]
  }]
};
// 使用刚指定的配置项和数据显示图表。
slide10_1.setOption(option);



// 基于准备好的dom，初始化echarts实例
var slide10_2 = echarts.init(document.getElementById('slide10-2'));
// 指定图表的配置项和数据
var option = {
  series: [{
    name: '树图',
    type: 'tree',
    orient: 'horizontal', // vertical horizontal
    top: '5%',
    left: 0,
    right: 0,
    bottom: 0,
    width: '70%',
    height: '100%',
    itemStyle: {
      color: '#3365b7',
      borderWidth: 0,
      // borderType: 'solid',
      // normal: {
      //   label: {
      //     show: true,
      //     position: 'inside',
      //     textStyle: {
      //       color: '#cc9999',
      //       fontSize: 15,
      //       fontWeight: 'bolder'
      //     }
      //   },
      //   lineStyle: {
      //     color: '#000',
      //     width: 1,
      //     type: 'broken' // 'curve'|'broken'|'solid'|'dotted'|'dashed'
      //   }
      // },
      // emphasis: {
      //   label: {
      //     show: true
      //   }
      // }
    },
    label: {
      normal: {
        color: '#fff',
        backgroundColor: '#3365b7',
        padding: [6, 1, 6, 1],
        borderRadius: 5,
        align: 'left',
        lineHeight: 100
      }
    },
    data: [{
      name: '专业序列员工',
      value: 6,
      children: [{
          name: '部门总经理',
          value: 4,
          children: [{
            name: '能力素质',
            value: 4,
          }]
        },
        {
          name: '部门副总经理',
          value: 6,
          children: [{
            name: '能力素质',
            value: 4,
          }]
        },
        {
          name: '专业序列员工',
          value: 6,
          children: [{
            name: '能力素质',
            value: 4,
          }]
        }
      ]
    }]
  }]
};
// 使用刚指定的配置项和数据显示图表。
slide10_2.setOption(option);