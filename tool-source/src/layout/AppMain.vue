<template>
  <section class="app-main">
    <RouterView v-slot="{ Component, route }">
      <Transition :name="transitionName" mode="out-in">
        <KeepAlive :include="cachedViews">
          <component :is="Component" :key="route.path" />
        </KeepAlive>
      </Transition>
    </RouterView>
  </section>
</template>

<script>
export default {
  name: "AppMain",
  setup() {},
};
</script>
