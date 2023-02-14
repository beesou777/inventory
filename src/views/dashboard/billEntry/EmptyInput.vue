<template>
     <div class="position-relative" v-if="isEmpty">
          <p
            class="
              position-absolute
              top-100
              end-0
              bg-danger
              p-3
              rounded-4
              text-light
            "
          >
            please enter the blank feild !!
          </p>
        </div>
</template>

<script setup>
import {ref} from 'vue'

const props = defineProps({
  isEmpty: Boolean,
});

</script>