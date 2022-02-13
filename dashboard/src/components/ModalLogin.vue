<template>
    <div class="flex justify-between">
        <h2 class="text-4xl font-black text-gray-800">Entre na sua conta</h2>
        <button @click="close" class="text-4xl text-gray-600">&times;</button>
    </div>
    <div class="mt-16">
        <form @submit.prevent="handleSubmit">
            <label for="email" class="block">
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
                Entrar
            </button>
        </form>
    </div>
</template>

<script>
import { useModal } from '@/hooks'
import { reactive } from 'vue'

export default {
    setup() {
        const modal = useModal()
        const state = reactive({
            hasErrors: false,
            isLoading: false,
            email: {
                value: '',
                errorMessage: ''
            },
            password: {
                value: '',
                errorMessage: ''
            }
        })

        const handleSubmit = () => {}

        return { state, close: modal.close, handleSubmit }
    }
}
</script>
