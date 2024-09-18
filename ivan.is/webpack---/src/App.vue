var render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{class:_vm.$route.meta.bodyClass,attrs:{"id":"app"}},[_c('HeaderSection'),_c('transition',{attrs:{"appear":"","mode":"out-in","css":false},on:{"leave":_vm.leave,"enter":_vm.enter}},[_c('router-view')],1),_c('SpineLine',{attrs:{"isPlaying":_vm.isSpinePlaying}}),_c('div',{staticClass:"tweenerElement"}),_c('FooterSection')],1)
}
var staticRenderFns = []

export { render, staticRenderFns }