<template>
    <div class="flex justify-between">
        <h2 class="text-4xl font-black text-gray-800">Cria uma conta</h2>
        <button @click="close" class="text-4xl text-gray-600">&times;</button>
    </div>
    <div class="mt-16">
        <form @submit.prevent="handleSubmit">
            <label for="name" class="block">
                <span class="text-lg font-medium text-gray-800">Nome</span>
                <input
                    v-model="state.name.value"
                    type="text"
                    id="name"
                    class="block w-full px-4 py-3 mt-1 text-lg bg-gray-100 border-2 border-transparent rounded"
                    :class="{
                        'border-brand-danger': !!state.name.errorMessage
                    }"
                    placeholder="John Doe"
                />
                <span
                    v-if="!!state.name.errorMessage"
                    class="block font-medium text-brand-danger"
                    >{{ state.name.errorMessage }}</span
                >
            </label>
            <label for="email" class="block mt-5">
                <span class="text-lg font-medium text-gray-800">E-mail</span>
                <input
                    v-model="state.email.value"
                    type="email"
                    id="email"
                    class="block w-full px-4 py-3 mt-1 text-lg bg-gray-100 border-2 border-transparent rounded"
                    :class="{
                        'border-brand-danger': !!state.email.errorMessage
                    }"
                    placeholder="john.doe@example.com"
                />
                <span
                    v-if="!!state.email.errorMessage"
                    class="block font-medium text-brand-danger"
                    >{{ state.email.errorMessage }}</span
                >
            </label>
            <label for="password" class="block mt-5">
                <span class="text-lg font-medium text-gray-800">Senha</span>
                <input
                    v-model="state.password.value"
                    type="password"
                    id="password"
                    class="block w-full px-4 py-3 mt-1 text-lg bg-gray-100 border-2 border-transparent rounded"
                    :class="{
                        'border-brand-danger': !!state.password.errorMessage
                    }"
                    placeholder="****************"
                />
                <span
                    v-if="!!state.password.errorMessage"
                    class="block font-medium text-brand-danger"
                    >{{ state.password.errorMessage }}</span
                >
            </label>

            <button
                :disabled="state.isLoading"
                type="submit"
                :class="{ 'opacity-50': state.isLoading }"
                class="px-8 py-3 mt-10 text-2xl font-bold text-white transition-all duration-150 rounded-full bg-brand-main focus:outline-none"
            >
                <icon
                    v-if="state.isLoading"
                    name="loading"
                    class="animate-spin"
                />
                <span v-else>Entrar</span>
            </button>
        </form>
    </div>
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useModal } from '@/hooks'
import { useField } from 'vee-validate'
import { useToast } from 'vue-toastification'
import { validateEmptyLength3, validateEmptyAndEmail } from '@/utils/validators'
import services from '@/services'
import Icon from './IconFactory.vue'

export default {
    components: {
        Icon
    },
    setup() {
        const router = useRouter()
        const modal = useModal()
        const toast = useToast()

        const { value: nameValue, errorMessage: nameErrorMessage } = useField(
            'name',
            validateEmptyLength3
        )

        const { value: emailValue, errorMessage: emailErrorMessage } = useField(
            'email',
            validateEmptyAndEmail
        )

        const { value: passwordValue, errorMessage: passwordErrorMessage } =
            useField('password', validateEmptyLength3)

        const state = reactive({
            hasErrors: false,
            isLoading: false,
            name: {
                value: nameValue,
                errorMessage: nameErrorMessage
            },
            email: {
                value: emailValue,
                errorMessage: emailErrorMessage
            },
            password: {
                value: passwordValue,
                errorMessage: passwordErrorMessage
            }
        })

        const login = async (email, password) => {
            const { data, errors } = await services.auth.login({
                email,
                password
            })

            if (!errors) {
                window.localStorage.setItem('token', data.token)
                router.push({ name: 'feedbacks' })
                modal.close()
                return
            }
            state.isLoading = false
        }

        const handleSubmit = async () => {
            try {
                toast.clear()
                state.isLoading = true
                const { data, errors } = await services.auth.register({
                    name: state.name.value,
                    email: state.email.value,
                    password: state.password.value
                })

                console.log(data, errors)

                if (!errors) {
                    await login(state.email.value, state.password.value)
                    return
                }

                if (errors.status === 400) {
                    toast.error('Ocorreu um erro ao criar a conta')
                }
                state.isLoading = false
            } catch (error) {
                state.isLoading = false
                state.hasErrors = !!error
                toast.error('Ocorreu um erro ao criar a conta')
            }
        }

        return { state, close: modal.close, handleSubmit }
    }
}
</script>
