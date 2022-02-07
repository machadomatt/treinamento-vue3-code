<template>
    <header class="h-[700px] bg-brand-main w-full flex justify-center">
        <div
            class="flex flex-col w-4/5 max-w-6xl sm:bg-[url('../../assets/images/blue-balloons.png')] bg-[length:628px] bg-[90%_bottom] bg-no-repeat"
        >
            <div class="flex items-center justify-between py-10">
                <div class="w-28 lg:w-36">
                    <img
                        class="w-full"
                        src="../../assets/images/logo-white.png"
                        alt="Feedbacker"
                    />
                </div>
                <div class="flex">
                    <button
                        @click="() => emit('createAccount')"
                        class="px-3 py-2 text-xs font-bold text-white rounded-full sm:text-base sm:px-6 focus:outline-none"
                    >
                        Crie uma conta
                    </button>
                    <button
                        @click="() => emit('login')"
                        class="px-3 py-2 text-xs font-bold bg-white rounded-full sm:text-base sm:px-6 text-brand-main focus:outline-none"
                    >
                        Entrar
                    </button>
                </div>
            </div>
            <div class="flex flex-col mt-28">
                <h1 class="mb-3 text-4xl font-black text-white">
                    Tenha um feedback. <br />
                    E faça seus clientes mais
                    <br class="hidden lg:inline-block" />
                    felizes!
                </h1>
                <p class="mb-6 text-lg font-normal text-white">
                    Receba ideias, reclamações e feedbacks com um
                    <br class="hidden lg:inline-block" />simples widget na
                    página.
                </p>
                <div>
                    <button
                        class="px-6 py-2 font-bold bg-white rounded-full text-brand-main focus:outline-none"
                    >
                        Crie uma conta grátis
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    setup(props, { emit }) {
        return { emit }
    }
}
</script>
