<template>
  <div class="forum-list">
      <h2 class="list-title">
          <router-link
            :to="{name: 'Category', params: {id: category['.key']}}">
            {{ category.name }}
          </router-link>
      </h2>
      <ForumList :forums="categoryForums" />
  </div>
</template>

<script>

import ForumList from './ForumList';

export default {
  props: {
    category: {
      required: true,
      type: Object,
    },
  },
  components: {
    ForumList,
  },
  computed: {
    forums() {
      return Object.values(this.$store.state.forums);
    },
    categoryForums() {
      const forumIds = Object.keys(this.category.forums);
      return Object.values(this.forums)
        .filter(forum => forumIds.includes(forum['.key']));
    },
  },
};
</script>
