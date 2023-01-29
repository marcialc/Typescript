
const routes = <const T>(routes: T[]) => {
    const addRedirect = (from: T, to: T) => {
        console.log(`Redirect ${from} --> ${to}`);
    }
    return {
        addRedirect
    }
}

const router = routes(['/users', '/posts', 'admin/users'])

/**
 * you get autocomplete and type check for the only accepting those routes as params
 * T becomes type ['/users', '/posts', 'admin/users'] instead of before it was type string
 */
router.addRedirect('/posts', 'admin/users')