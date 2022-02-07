import bus from '../utils/bus'

const useModal = () => {
    const EVENT_NAME = 'modal:toggle'

    const open = (payload = {}) => {
        bus.emit(EVENT_NAME, { status: true, ...payload })
    }

    const close = (payload = {}) => {
        bus.emit(EVENT_NAME, { status: false, ...payload })
    }

    const listen = (fn) => {
        bus.on(EVENT_NAME, fn)
    }

    const off = (fn) => {
        bus.on(EVENT_NAME, fn)
    }

    return { open, close, listen, off }
}

export default useModal
