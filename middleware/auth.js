
export default function ({ store, route, redirect }) {
    if (!store.$fire.auth._delegate.currentUser) {
        if (route.path === '/') {
            return redirect('/login')
        }
    } else if (store.$fire.auth._delegate.currentUser) {
        if (route.path === '/login') {
            return redirect('/')
        } else {
        }
    }
}