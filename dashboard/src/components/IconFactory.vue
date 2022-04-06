<template>
    <component :is="name" v-bind="$props" />
</template>

<script>
import Loading from './IconLoading.vue'
import Copy from './IconCopy.vue'
export default {
    components: { Loading, Copy },
    props: {
        name: {
            type: String,
            required: true
        }
    }
}
</script>
