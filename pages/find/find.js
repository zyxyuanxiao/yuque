// pages/find/find.js
import Find from '../../models/find'

import pageState, { navigateBack, reload } from '../../utils/pageState'

const state = pageState(this)
Page({
    /**
     * 页面的初始数据
     */
    data: {
        list: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.findList()
    },
    changeItem(event) {
        wx.navigateTo({
            url: `/pages/detail/detail?id=${event.currentTarget.dataset.id}&bookid=${event.currentTarget.dataset.bookid}`
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {},
    findList: async function() {
        const list = await Find.getFind().then(null, state.fail)
        this.setData({
            list: list.data.docs
        })
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {},

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {},

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {},

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {
        this.findList()

        wx.stopPullDownRefresh() //停止下拉刷新
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {},

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {}
})
