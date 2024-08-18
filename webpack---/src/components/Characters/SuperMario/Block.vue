var render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_c('div',{class:[
    'mario-box',
    { '-jumped': _vm.hasTouched, '-full': _vm.hasCoins, '-off': _vm.hasFoundAllCoins },
  ],on:{"click":_vm.onTouchBlock}},[_c('div',{staticClass:"in"}),_vm._l((_vm.coinsToBeFound),function(item,i){return _c('SuperMarioCoin',{key:i,attrs:{"isPlaying":""}})})],2)])
}
var staticRenderFns = []

export { render, staticRenderFns }