var util = require('../../../utils/util.js');
var m = require('competitionState.m.js');
//获取应用实例
const app = getApp();
Page({
  data: {
    lastLanqiaobeiData: [{
        id: '201705220000',
        name: '2017蓝桥杯国赛',
        state: '已结束',
        date: '2017/5/22',
        teachers: [{
            teacher_no: '2004565635',
            name: '郭娟',
            post: '信计系',
            remark: '认真负责，经验丰富',
            isLeader: true
          },
          {
            teacher_no: '2003565635',
            name: '方欢',
            post: '信计系',
            remark: '扎根C/C++，有独特见解',
            isLeader: false
          }
        ],
        students: [{
          student_no: '2014356458',
          name: '田宇明',
          academy: '数大学院',
          class: '信计14-1',
          awards: '国赛二等奖'
        }]
      },
      {
        id: '201805260000',
        name: '2018蓝桥杯国赛',
        state: '已结束',
        date: '2018/5/26',
        teachers: [{
            teacher_no: '2004565635',
            name: '郭娟',
            post: '信计系',
            remark: '认真负责，经验丰富',
            isLeader: true
          },
          {
            teacher_no: '2003565635',
            name: '方欢',
            post: '信计系',
            remark: '扎根C/C++，有独特见解',
            isLeader: false
          }
        ],
        students: [{
            student_no: '2015304458',
            name: '孙露明',
            academy: '数大学院',
            class: '信计15-1',
            awards: '国赛二等奖'
          },
          {
            student_no: '2016334458',
            name: '尹诗玉',
            academy: '数大学院',
            class: '信计16-1',
            awards: '国赛优秀奖'
          }
        ]
      },
    ],
    nowLanqiaobeiData: [{
        id: '201910150000',
        name: '2019蓝桥杯校赛',
        state: '已结束',
        date: '2018/10/15',
        teachers: [],
        students: [{
          student_no: '2014356458',
          name: '田宇明',
          academy: '数大学院',
          class: '信计14-1',
          awards: ''
        }, {
            student_no: '2014356458',
            name: '田宇明',
            academy: '数大学院',
            class: '信计14-1',
            awards: ''
          }, {
            student_no: '2014356458',
            name: '田宇明',
            academy: '数大学院',
            class: '信计14-1',
            awards: ''
          }, {
            student_no: '2014356458',
            name: '田宇明',
            academy: '数大学院',
            class: '信计14-1',
            awards: ''
          }, {
            student_no: '2014356458',
            name: '田宇明',
            academy: '数大学院',
            class: '信计14-1',
            awards: ''
          }, {
            student_no: '2014356458',
            name: '田宇明',
            academy: '数大学院',
            class: '信计14-1',
            awards: ''
          }, {
            student_no: '2014356458',
            name: '田宇明',
            academy: '数大学院',
            class: '信计14-1',
            awards: ''
          }]
      },
      {
        id: '201903150000',
        name: '2019蓝桥杯省赛',
        state: '未开始',
        date: '2019/03/15',
        teachers: [],
        students: []
      },
      {
        id: '201905200000',
        name: '2019蓝桥杯国赛',
        state: '未开始',
        date: '2019/05/20',
        teachers: [],
        students: []
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    m.getMock().then(res => {
      console.log(res)
    })
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var _this=this
  },
  initData: function() {

  },
  jumpCompetitionDetail: function() {
    wx.navigateTo({
      url: '../competitionDetail/competitionDetail'
    })
  },
  joinCompetition: function(e) {
    var _this=this
    if (e.currentTarget.id && app.globalData.userId){
      console.log('调报名接口')
      wx.showToast({
        title: '报名成功',
        icon: 'success',
        duration: 1000,
        mask: true
      });
      _this.initData()
    } else {
      wx.showToast({
        title: '不具备报名资格',
        image: '/icon&image/失败.png',
        duration: 1000,
        mask: true
      });
    }
    
  }
})