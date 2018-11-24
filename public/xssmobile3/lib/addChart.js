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


// 基于准备好的dom，初始化echarts实例
var slide7_1 = echarts.init(document.getElementById('slide7-1'));
// 指定图表的配置项和数据
var option = {

  series: [{
    name: '部门总经理',
    type: 'pie',
    radius: ['100%', '0%'],
    avoidLabelOverlap: false,
    label: {
      normal: {
        show: true,
        position: 'inside'
      },
      emphasis: {
        show: true,
        textStyle: {
          fontSize: '30',
          fontWeight: 'bold'
        }
      }
    },
    labelLine: {
      normal: {
        show: false
      }
    },
    animationType: 'expansion',
    animationDuration : 1500,
    animationDelay :0,
    data: [{
        value: 20,
        name: '绩效管理工作组\n20%'
      },
      {
        value: 30,
        name: '公司总经理\n30%'
      },
      {
        value: 20,
        name: '其他班子成员\n20%'
      },
      {
        value: 30,
        name: '公司分管副总\n30%'
      }
    ]
  }]
};

// 使用刚指定的配置项和数据显示图表。
slide7_1.setOption(option);

// 基于准备好的dom，初始化echarts实例
var slide7_2 = echarts.init(document.getElementById('slide7-2'));
// 指定图表的配置项和数据
var option = {

  series: [{
    name: '部门副总经理',
    type: 'pie',
    radius: ['100%', '0%'],
    avoidLabelOverlap: false,
    label: {
      normal: {
        show: true,
        position: 'inside'
      },
      emphasis: {
        show: true,
        textStyle: {
          fontSize: '30',
          fontWeight: 'bold'
        }
      }
    },
    labelLine: {
      normal: {
        show: false
      }
    },
    animationType: 'expansion',
    animationDuration : 1500,
    animationDelay :1500,
    data: [

      {
        value: 60,
        name: '部门副总经理\n60%'
      },

      {
        value: 40,
        name: '公司分管副总\n40%'
      }
    ]
  }]
};

// 使用刚指定的配置项和数据显示图表。
slide7_2.setOption(option);

// 基于准备好的dom，初始化echarts实例
var slide7_3 = echarts.init(document.getElementById('slide7-3'));
// 指定图表的配置项和数据
var option = {

  series: [{
    name: '专业序列员工',
    type: 'pie',
    radius: ['100%', '0%'],
    avoidLabelOverlap: false,
    label: {
      normal: {
        show: true,
        position: 'inside'
      },
      emphasis: {
        show: true,
        textStyle: {
          fontSize: '30',
          fontWeight: 'bold'
        }
      }
    },
    labelLine: {
      normal: {
        show: false
      }
    },
    animationType: 'expansion',
    animationDuration : 1500,
    animationDelay :3000,
    data: [

      {
        value: 40,
        name: '部门总经理\n40%'
      },

      {
        value: 40,
        name: '部门分管副总\n40%'
      }
    ]
  }]
};

// 使用刚指定的配置项和数据显示图表。
slide7_3.setOption(option);


// 基于准备好的dom，初始化echarts实例
var slide8_1 = echarts.init(document.getElementById('slide8-1'));
// 指定图表的配置项和数据
var option = {

  series: [{
    name: '部门总经理',
    type: 'pie',
    radius: ['100%', '0%'],
    avoidLabelOverlap: false,
    label: {
      normal: {
        show: true,
        position: 'inside'
      },
      emphasis: {
        show: true,
        textStyle: {
          fontSize: '30',
          fontWeight: 'bold'
        }
      }
    },
    labelLine: {
      normal: {
        show: false
      }
    },
    animationType: 'expansion',
    animationDuration : 1500,
    animationDelay :0,
    data: [{
        value: 30,
        name: '部门内所有下级\n30%'
      },
      {
        value: 50,
        name: '公司总经理、分管副总、其他领导\n50%'
      },
      {
        value: 20,
        name: '公司同级人员\n20%'
      }
    ]
  }]
};

// 使用刚指定的配置项和数据显示图表。
slide8_1.setOption(option);

// 基于准备好的dom，初始化echarts实例
var slide8_2 = echarts.init(document.getElementById('slide8-2'));
// 指定图表的配置项和数据
var option = {

  series: [{
    name: '部门副总经理',
    type: 'pie',
    radius: ['100%', '0%'],
    avoidLabelOverlap: false,
    label: {
      normal: {
        show: true,
        position: 'inside'
      },
      emphasis: {
        show: true,
        textStyle: {
          fontSize: '30',
          fontWeight: 'bold'
        }
      }
    },
    labelLine: {
      normal: {
        show: false
      }
    },
    animationType: 'expansion',
    animationDuration : 1500,
    animationDelay :1500,
    data: [{
        value: 30,
        name: '部门内所有下级\n30%'
      },
      {
        value: 30,
        name: '部门总经理\n30%'
      },
      {
        value: 20,
        name: '部门同级人员\n20%'
      },
      {
        value: 20,
        name: '公司分管副总\n20%'
      }

    ]
  }]
};

// 使用刚指定的配置项和数据显示图表。
slide8_2.setOption(option);

// 基于准备好的dom，初始化echarts实例
var slide8_3 = echarts.init(document.getElementById('slide8-3'));
// 指定图表的配置项和数据
var option = {

  series: [{
    name: '专业序列员工',
    type: 'pie',
    radius: ['100%', '0%'],
    avoidLabelOverlap: false,
    label: {
      normal: {
        show: true,
        position: 'inside'
      },
      emphasis: {
        show: true,
        textStyle: {
          fontSize: '30',
          fontWeight: 'bold'
        }
      }
    },
    labelLine: {
      normal: {
        show: false
      }
    },
    animationType: 'expansion',
    animationDuration : 1500,
    animationDelay :3000,
    data: [

      {
        value: 40,
        name: '部门内其他人员\n40%'
      },

      {
        value: 20,
        name: '部门总经理\n20%'
      },

      {
        value: 10,
        name: '部门其他关键岗位\n10%'
      },

      {
        value: 30,
        name: '部门分管副总/总监\n30%'
      }
    ]
  }]
};

// 使用刚指定的配置项和数据显示图表。
slide8_3.setOption(option);