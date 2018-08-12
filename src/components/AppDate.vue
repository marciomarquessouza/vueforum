<template>
  <span :title="timestamp | humanFriendlyDate">
      {{ timestamp | difForHuman }}
  </span>
</template>

<script>

import moment from 'moment';

export default {
  props: {
    timestamp: {
      required: true,
      type: Number,
    },
  },
  filters: {
    humanFriendlyDate(date) {
      return moment.unix(date).locale('pt-br').format('D MMMM YYYY, h:mm:ss a');
    },
    difForHuman(date) {
      return moment.unix(date).locale('pt-br').fromNow();
    },
  },
};

</script>
