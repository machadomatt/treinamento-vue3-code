<template>
    <router-view />
    <ModalFactory />
</template>

<script>
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import services from '@/services'
import { setCurrentUser } from '@/store/user'
import ModalFactory from './components/ModalFactory'

export default {
    components: {
        ModalFactory
    },
    setup() {
        const router = useRouter()
        const route = useRoute()

        watch(
            () => route.path,
            async () => {
                if (route.meta.hasAuth) {
                    const token = window.localStorage.getItem('token')

                    if (!token) {
                        router.push({ name: 'home' })
                        return
                    }

                    const { data } = await services.users.getMe()
                    setCurrentUser(data)
                }
            }
        )
    }
}
</script>
