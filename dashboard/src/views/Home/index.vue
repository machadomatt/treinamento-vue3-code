<template>
    <HomeHeader @create-account="handleCreateAccount" @login="handleLogin" />
    <HomeContact />
    <div class="flex justify-center py-10 bg-brand-gray">
        <p class="font-medium text-center text-gray-800">
            Feedbacker &copy; 2022
        </p>
    </div>
</template>

<script>
import HomeHeader from './HomeHeader.vue'
import HomeContact from './HomeContact.vue'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useModal } from '../../hooks'

export default {
    components: {
        HomeHeader,
        HomeContact
    },
    setup() {
        const router = useRouter()
        const modal = useModal()

        onMounted(() => {
            const token = window.localStorage.getItem('token')
            if (token) {
                router.push({ name: 'feedbacks' })
            }
        })

        const handleLogin = () => {
            modal.open({
                component: 'ModalLogin'
            })
        }
        const handleCreateAccount = () => {
            modal.open({
                component: 'ModalCreateAccount'
            })
        }

        return { handleLogin, handleCreateAccount }
    }
}
</script>
