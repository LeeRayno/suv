webpackJsonp([5], {EEYi: function(s, t, a) { 'use strict'; Object.defineProperty(t, '__esModule', {value: !0}); var v = {render: function() { this.$createElement; this._self._c; return this._m(0) }, staticRenderFns: [function() { var s = this, t = s.$createElement, a = s._self._c || t; return a('section', [a('h2', [s._v('Dialog 轻提示')]), s._v(' '), a('h3', [s._v('基本用法')]), s._v(' '), a('h4', [s._v('插件调用')]), s._v(' '), a('p', [s._v('引入 '), a('code', {pre: !0}, [s._v('Dialog')]), s._v(' 组件后，会自动在 '), a('code', {pre: !0}, [s._v('Vue')]), s._v(' 的 '), a('code', {pre: !0}, [s._v('prototype')]), s._v(' 上挂载 '), a('code', {pre: !0}, [s._v('$dialog')]), s._v(' 方法，便于在组件内调用。')]), s._v(' '), a('pre', {pre: !0}, [a('code', {attrs: {class: 'hljs language-html'}}, [a('span', {attrs: {class: 'hljs-tag'}}, [s._v('<'), a('span', {attrs: {class: 'hljs-name'}}, [s._v('template')]), s._v('>')]), s._v('\n  '), a('span', {attrs: {class: 'hljs-tag'}}, [s._v('<'), a('span', {attrs: {class: 'hljs-name'}}, [s._v('vov-button')]), s._v(' '), a('span', {attrs: {class: 'hljs-attr'}}, [s._v('@click')]), s._v('='), a('span', {attrs: {class: 'hljs-string'}}, [s._v('"handleClick"')]), s._v('>')]), s._v('弹框'), a('span', {attrs: {class: 'hljs-tag'}}, [s._v('</'), a('span', {attrs: {class: 'hljs-name'}}, [s._v('vov-button')]), s._v('>')]), s._v('\n'), a('span', {attrs: {class: 'hljs-tag'}}, [s._v('</'), a('span', {attrs: {class: 'hljs-name'}}, [s._v('template')]), s._v('>')]), s._v('\n\n'), a('span', {attrs: {class: 'hljs-tag'}}, [s._v('<'), a('span', {attrs: {class: 'hljs-name'}}, [s._v('script')]), s._v('>')]), a('span', {attrs: {class: 'javascript'}}, [s._v('\n  '), a('span', {attrs: {class: 'hljs-keyword'}}, [s._v('export')]), s._v(' '), a('span', {attrs: {class: 'hljs-keyword'}}, [s._v('default')]), s._v(' {\n    '), a('span', {attrs: {class: 'hljs-attr'}}, [s._v('methods')]), s._v(': {\n      handleClick() {\n        '), a('span', {attrs: {class: 'hljs-keyword'}}, [s._v('const')]), s._v(' vm = '), a('span', {attrs: {class: 'hljs-keyword'}}, [s._v('this')]), s._v('.$dialog({\n        '), a('span', {attrs: {class: 'hljs-attr'}}, [s._v('zIndex')]), s._v(': '), a('span', {attrs: {class: 'hljs-number'}}, [s._v('3000')]), s._v(',\n        '), a('span', {attrs: {class: 'hljs-attr'}}, [s._v('title')]), s._v(': '), a('span', {attrs: {class: 'hljs-string'}}, [s._v("'comfirm'")]), s._v(',\n        '), a('span', {attrs: {class: 'hljs-attr'}}, [s._v('type')]), s._v(': '), a('span', {attrs: {class: 'hljs-string'}}, [s._v("'confirm'")]), s._v(',\n        '), a('span', {attrs: {class: 'hljs-attr'}}, [s._v('msg')]), s._v(': '), a('span', {attrs: {class: 'hljs-string'}}, [s._v("'type 为 confirm'")]), s._v(',\n        handleCancel() {\n          '), a('span', {attrs: {class: 'hljs-built_in'}}, [s._v('console')]), s._v('.log('), a('span', {attrs: {class: 'hljs-string'}}, [s._v("'cancel'")]), s._v(')\n          vm.hide()\n        },\n        handleEnsure() {\n          '), a('span', {attrs: {class: 'hljs-built_in'}}, [s._v('console')]), s._v('.log('), a('span', {attrs: {class: 'hljs-string'}}, [s._v("'ensure'")]), s._v(')\n        }\n      })\n      }\n    }\n  }\n')]), a('span', {attrs: {class: 'hljs-tag'}}, [s._v('</'), a('span', {attrs: {class: 'hljs-name'}}, [s._v('script')]), s._v('>')]), s._v('\n')])]), s._v(' '), a('h4', [s._v('组件调用')]), s._v(' '), a('pre', {pre: !0}, [a('code', {attrs: {class: 'hljs language-html'}}, [a('span', {attrs: {class: 'hljs-tag'}}, [s._v('<'), a('span', {attrs: {class: 'hljs-name'}}, [s._v('template')]), s._v('>')]), s._v('\n  '), a('span', {attrs: {class: 'hljs-tag'}}, [s._v('<'), a('span', {attrs: {class: 'hljs-name'}}, [s._v('vov-button')]), s._v(' '), a('span', {attrs: {class: 'hljs-attr'}}, [s._v('@click')]), s._v('='), a('span', {attrs: {class: 'hljs-string'}}, [s._v('"handleClick"')]), s._v('>')]), s._v('组件调用'), a('span', {attrs: {class: 'hljs-tag'}}, [s._v('</'), a('span', {attrs: {class: 'hljs-name'}}, [s._v('vov-button')]), s._v('>')]), s._v('\n  '), a('span', {attrs: {class: 'hljs-tag'}}, [s._v('<'), a('span', {attrs: {class: 'hljs-name'}}, [s._v('vov-dialog')]), s._v('\n    '), a('span', {attrs: {class: 'hljs-attr'}}, [s._v('v-model')]), s._v('='), a('span', {attrs: {class: 'hljs-string'}}, [s._v('"dialog"')]), s._v('\n    '), a('span', {attrs: {class: 'hljs-attr'}}, [s._v(':close-on-click-btn')]), s._v('='), a('span', {attrs: {class: 'hljs-string'}}, [s._v('"false"')]), s._v('\n    '), a('span', {attrs: {class: 'hljs-attr'}}, [s._v('title')]), s._v('='), a('span', {attrs: {class: 'hljs-string'}}, [s._v('"组件调用"')]), s._v('\n    '), a('span', {attrs: {class: 'hljs-attr'}}, [s._v('@handleCancel')]), s._v('='), a('span', {attrs: {class: 'hljs-string'}}, [s._v('"handleCancel"')]), s._v('\n    '), a('span', {attrs: {class: 'hljs-attr'}}, [s._v('@handleEnsure')]), s._v('='), a('span', {attrs: {class: 'hljs-string'}}, [s._v('"handleEnsure"')]), s._v('>')]), s._v('\n    '), a('span', {attrs: {class: 'hljs-comment'}}, [s._v('\x3c!-- slot --\x3e')]), s._v('\n    '), a('span', {attrs: {class: 'hljs-tag'}}, [s._v('<'), a('span', {attrs: {class: 'hljs-name'}}, [s._v('input')]), s._v('\n      '), a('span', {attrs: {class: 'hljs-attr'}}, [s._v('v-model')]), s._v('='), a('span', {attrs: {class: 'hljs-string'}}, [s._v('"text"')]), s._v('\n      '), a('span', {attrs: {class: 'hljs-attr'}}, [s._v('type')]), s._v('='), a('span', {attrs: {class: 'hljs-string'}}, [s._v('"text"')]), s._v('\n      '), a('span', {attrs: {class: 'hljs-attr'}}, [s._v('placeholder')]), s._v('='), a('span', {attrs: {class: 'hljs-string'}}, [s._v('"请输入"')]), s._v('>')]), s._v('\n  '), a('span', {attrs: {class: 'hljs-tag'}}, [s._v('</'), a('span', {attrs: {class: 'hljs-name'}}, [s._v('vov-dialog')]), s._v('>')]), s._v('\n'), a('span', {attrs: {class: 'hljs-tag'}}, [s._v('</'), a('span', {attrs: {class: 'hljs-name'}}, [s._v('template')]), s._v('>')]), s._v('\n\n'), a('span', {attrs: {class: 'hljs-tag'}}, [s._v('<'), a('span', {attrs: {class: 'hljs-name'}}, [s._v('script')]), s._v('>')]), a('span', {attrs: {class: 'javascript'}}, [s._v('\n  '), a('span', {attrs: {class: 'hljs-keyword'}}, [s._v('export')]), s._v(' '), a('span', {attrs: {class: 'hljs-keyword'}}, [s._v('default')]), s._v(' {\n    data() {\n      '), a('span', {attrs: {class: 'hljs-keyword'}}, [s._v('return')]), s._v(' {\n        '), a('span', {attrs: {class: 'hljs-attr'}}, [s._v('dialog')]), s._v(': '), a('span', {attrs: {class: 'hljs-literal'}}, [s._v('false')]), s._v('\n      }\n    },\n    '), a('span', {attrs: {class: 'hljs-attr'}}, [s._v('methods')]), s._v(': {\n      handleClick() {\n        '), a('span', {attrs: {class: 'hljs-keyword'}}, [s._v('this')]), s._v('.dialog = '), a('span', {attrs: {class: 'hljs-literal'}}, [s._v('true')]), s._v('\n      }\n    }\n  }\n')]), a('span', {attrs: {class: 'hljs-tag'}}, [s._v('</'), a('span', {attrs: {class: 'hljs-name'}}, [s._v('script')]), s._v('>')]), s._v('\n')])]), s._v(' '), a('h3', [s._v('Attributes')]), s._v(' '), a('table', {staticClass: 'table'}, [a('thead', [a('tr', [a('th', [s._v('参数')]), s._v(' '), a('th', [s._v('说明')]), s._v(' '), a('th', [s._v('类型')]), s._v(' '), a('th', [s._v('可选值')]), s._v(' '), a('th', [s._v('默认值')])])]), s._v(' '), a('tbody', [a('tr', [a('td', [s._v('title')]), s._v(' '), a('td', [s._v('标题')]), s._v(' '), a('td', [s._v('string')]), s._v(' '), a('td', [s._v('—')]), s._v(' '), a('td', [s._v('—')])]), s._v(' '), a('tr', [a('td', [s._v('msg')]), s._v(' '), a('td', [s._v('内容')]), s._v(' '), a('td', [s._v('string')]), s._v(' '), a('td', [s._v('—')]), s._v(' '), a('td', [s._v('—')])]), s._v(' '), a('tr', [a('td', [s._v('type')]), s._v(' '), a('td', [s._v('弹框类型')]), s._v(' '), a('td', [s._v('string')]), s._v(' '), a('td', [a('code', {pre: !0}, [s._v('confirm')]), s._v(' '), a('code', {pre: !0}, [s._v('alter')])]), s._v(' '), a('td', [a('code', {pre: !0}, [s._v('confirm')])])]), s._v(' '), a('tr', [a('td', [s._v('showModal')]), s._v(' '), a('td', [s._v('是否显示遮罩')]), s._v(' '), a('td', [s._v('boolean')]), s._v(' '), a('td', [a('code', {pre: !0}, [s._v('true')]), s._v(' '), a('code', {pre: !0}, [s._v('false')])]), s._v(' '), a('td', [a('code', {pre: !0}, [s._v('false')])])]), s._v(' '), a('tr', [a('td', [s._v('cancelText')]), s._v(' '), a('td', [a('code', {pre: !0}, [s._v('取消')]), s._v('按钮文字')]), s._v(' '), a('td', [s._v('string')]), s._v(' '), a('td', [s._v('—')]), s._v(' '), a('td', [a('code', {pre: !0}, [s._v('取消')])])]), s._v(' '), a('tr', [a('td', [s._v('ensureText')]), s._v(' '), a('td', [a('code', {pre: !0}, [s._v('确认')]), s._v('按钮文字')]), s._v(' '), a('td', [s._v('string')]), s._v(' '), a('td', [s._v('—')]), s._v(' '), a('td', [a('code', {pre: !0}, [s._v('确认')])])]), s._v(' '), a('tr', [a('td', [s._v('closeOnClickBtn')]), s._v(' '), a('td', [s._v('是否点击按钮关闭弹框')]), s._v(' '), a('td', [s._v('boolean')]), s._v(' '), a('td', [a('code', {pre: !0}, [s._v('true')]), s._v(' '), a('code', {pre: !0}, [s._v('false')])]), s._v(' '), a('td', [a('code', {pre: !0}, [s._v('true')])])]), s._v(' '), a('tr', [a('td', [s._v('closeOnClickModal')]), s._v(' '), a('td', [s._v('是否点击遮罩关闭弹框')]), s._v(' '), a('td', [s._v('boolean')]), s._v(' '), a('td', [a('code', {pre: !0}, [s._v('true')]), s._v(' '), a('code', {pre: !0}, [s._v('false')])]), s._v(' '), a('td', [a('code', {pre: !0}, [s._v('true')])])]), s._v(' '), a('tr', [a('td', [s._v('handleCancel')]), s._v(' '), a('td', [s._v('点击'), a('code', {pre: !0}, [s._v('取消')]), s._v('按钮回调')]), s._v(' '), a('td', [s._v('function')]), s._v(' '), a('td', [s._v('—')]), s._v(' '), a('td', [s._v('—')])]), s._v(' '), a('tr', [a('td', [s._v('handleEnsure')]), s._v(' '), a('td', [s._v('点击'), a('code', {pre: !0}, [s._v('确定')]), s._v('按钮回调')]), s._v(' '), a('td', [s._v('function')]), s._v(' '), a('td', [s._v('—')]), s._v(' '), a('td', [s._v('—')])])])]), s._v(' '), a('h3', [s._v('Events')]), s._v(' '), a('table', {staticClass: 'table'}, [a('thead', [a('tr', [a('th', [s._v('事件名称')]), s._v(' '), a('th', [s._v('说明')]), s._v(' '), a('th', [s._v('回调参数')])])]), s._v(' '), a('tbody', [a('tr', [a('td', [s._v('handleCancel')]), s._v(' '), a('td', [s._v('点击'), a('code', {pre: !0}, [s._v('取消')]), s._v('按钮回调')]), s._v(' '), a('td', [s._v('$event')])]), s._v(' '), a('tr', [a('td', [s._v('handleEnsure')]), s._v(' '), a('td', [s._v('点击'), a('code', {pre: !0}, [s._v('确定')]), s._v('按钮回调')]), s._v(' '), a('td', [s._v('$event')])])])]), s._v(' '), a('h3', [s._v('Methods')]), s._v(' '), a('table', {staticClass: 'table'}, [a('thead', [a('tr', [a('th', [s._v('事件名称')]), s._v(' '), a('th', [s._v('说明')]), s._v(' '), a('th', [s._v('回调参数')])])]), s._v(' '), a('tbody', [a('tr', [a('td', [s._v('show')]), s._v(' '), a('td', [s._v('手动调用'), a('code', {pre: !0}, [s._v('dialog.show()')])]), s._v(' '), a('td', [s._v('—')])]), s._v(' '), a('tr', [a('td', [s._v('hide')]), s._v(' '), a('td', [s._v('手动调用'), a('code', {pre: !0}, [s._v('dialog.hide()')])]), s._v(' '), a('td', [s._v('—')])])])]), s._v(' '), a('h3', [s._v('slots')]), s._v(' '), a('table', {staticClass: 'table'}, [a('thead', [a('tr', [a('th', [s._v('name')]), s._v(' '), a('th', [s._v('说明')])])]), s._v(' '), a('tbody', [a('tr', [a('td', [s._v('slot')]), s._v(' '), a('td', [s._v('默认slot')])])])])]) }]}, _ = a('VU/8')(null, v, !1, null, null, null); t.default = _.exports }, dbIc: function(s, t, a) { s.exports = a('EEYi') }})
