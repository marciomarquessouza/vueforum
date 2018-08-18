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

import sourceData from '@/data.json';
import ForumList from './ForumList';

export default {
  data() {
    return {
      forums: Object.values(sourceData.forums),
    };
  },
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
    categoryForums() {
      const forumIds = Object.keys(this.category.forums);
      return Object.values(this.forums)
        .filter(forum => forumIds.includes(forum['.key']));
    },
  },
};
</script>
