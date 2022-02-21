import store from '@/store'

const useStore = (module) => {
    if (module) {
        return store[module]
    }
    return store
}

export default useStore
