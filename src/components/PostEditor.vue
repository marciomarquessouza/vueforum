<template>
  <form @submit.prevent="save">
    <div class="form-group">
          <textarea name=""
                    rows="10"
                    cols="30"
                    class="form-input"
                    v-model="text"></textarea>
    </div>
    <div class="form-actions">
      <button class="btn-blue">Submit post</button>
    </div>
  </form>
</template>

<script>

export default {
  data() {
    return {
      text: '',
    };
  },
  props: {
    threadId: {
      required: true,
    },
  },
  methods: {
    save() {
      const post = {
        text: this.text,
        publishedAt: Math.floor(Date.now() / 1000),
        threadId: this.threadId,
        userId: 'jUjmgCurRRdzayqbRMO7aTG9X1G2',
        '.key': '',
      };
      this.newPostText = '';
      this.$emit('save', { post });
      this.text = '';
    },
  },
};

</script>
