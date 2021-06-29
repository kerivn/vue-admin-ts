<template
  name="vc-direct"
  value="Vue.directive('$directiveName$', {&#10; bind(el, binding, vnode) {&#10;  el.style.$arg$ = binding.value.$arg$;&#10; }&#10;});"
  description="Vue custom directive"
  toReformat="true"
  toShortenFQNames="true"
>
  <variable
    name="directiveName"
    expression=""
    defaultValue='"directiveName"'
    alwaysStopAt="true"
  />
  <variable name="arg" expression="" defaultValue='"arg"' alwaysStopAt="true" />
  <context />
</template>
