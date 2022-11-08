<template>
    <div class="flex justify-center w-full h-28 bg-brand-main">
        <HeaderLoggedIn />
    </div>

    <div class="flex flex-col items-center justify-center h-64 bg-brand-gray">
        <h1 class="text-4xl font-black text-center text-gray-800">
            Credenciais
        </h1>
        <p class="text-lg text-center text-gray-800">
            Guia de instalação e geração de suas credenciais
        </p>
    </div>

    <div class="flex justify-center w-full h-full">
        <div class="flex flex-col items-start w-4/5 max-w-6xl py-10">
            <h1 class="text-3xl font-black text-gray-800">
                Instalação e configuração
            </h1>
            <p class="mt-10 text-lg text-gray-800">
                Este aqui é a sua chave de api
            </p>
            <div
                class="flex items-center w-full px-5 py-3 mt-2 rounded lg:w-2/3 bg-brand-gray"
            >
                <span>{{ store.User.currentUser.apiKey }}</span>
                <div class="flex ml-auto">
                    <icon
                        name="copy"
                        size="24"
                        class="cursor-pointer text-brand-graydark"
                    />
                    <icon
                        name="loading"
                        size="24"
                        color="#C0BCB0"
                        class="ml-3 cursor-pointer"
                    />
                </div>
            </div>
            <p class="mt-5 text-lg text-gray-800">
                Coloque o script abaixo no seu site para começar a receber
                feedbacks
            </p>
            <div
                class="w-full py-3 pl-5 pr-20 mt-2 overflow-x-scroll rounded lg:w-2/3 bg-brand-gray"
            >
                <pre>
&lt;script src="https://machadomatt-feedbacker-widget.netlify.app?api_key={{
                        store.User.currentUser.apiKey
                    }}"&gt;&lt;/script&gt;</pre
                >
            </div>
        </div>
    </div>
</template>

<script>
import HeaderLoggedIn from '@/components/HeaderLoggedIn'
import Icon from '@/components/IconFactory'
import { useStore } from '@/hooks'

export default {
    components: { HeaderLoggedIn, Icon },
    setup() {
        const store = useStore()

        return { store }
    }
}
</script>
