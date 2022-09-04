
export default function ({ store, route, redirect }) {
    if (route.path !== '/login') {
        if (!store.$fire.auth.currentUser) {
            return redirect('/login')
        }
    } else if (route.path === '/login') {
        if (store.$fire.auth.currentUser) {
            return redirect('/')
        } else  {

        }
    }
}
