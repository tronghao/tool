<template>
  <div class="mt-5 flex flex-wrap gap-10">
    <div class="max-w-[25rem]" v-for="(item, index) in modules" :key="index">
      <router-link :to="{ name: item.link }">
        <div class="w-[25rem] h-[25rem] wrap-modules rounded-xl">
          <img
            :src="item.image"
            class="w-full h-full object-cover cursor-pointer"
          />
        </div>
        <div class="text-center mt-2 font-bold cursor-pointer">
          {{ item.name }}
        </div>
      </router-link>
    </div>
  </div>
  <router-view />
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  setup() {
    const state = reactive({
      modules: [
        {
          image:
            "https://play-lh.googleusercontent.com/wNWvKE7vLWfLdLIu5l1Fc9NUvmKjOX8PkjUrEmtk3KMKTdtEin0b1u0R5u4K-XAPcql7",
          name: "Tool generate Memrise",
          link: "Memrise",
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzAa47pEHrBzuiTmA_AqnqwbWP3vXV9iBZ7w&usqp=CAU",
          name: "Tool translate",
          link: "Translate",
        },
        {
          image:
            "https://d4.alternativeto.net/ztPWLbSRqx3zLA3237NOI3tqwBsOO8VkPybrxx2BZes/rs:fill:280:280:0/g:ce:0:0/YWJzOi8vZGlzdC9pY29ucy9jaGVhdG9ncmFwaHlfNjYzOTQucG5n.png",
          name: "Cheat sheet Cheatography",
          link: "Cheatography",
        },
      ],
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss">
.wrap-modules {
  overflow: hidden;
  img {
    transition: 0.3s;
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
}
</style>
