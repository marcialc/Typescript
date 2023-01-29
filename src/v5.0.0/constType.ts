
const routes = <const T>(routes: T[]) => {
    const addRedirect = (from: T, to: T) => {
        console.log(`Redirect ${from} --> ${to}`);
    }
    return {
        addRedirect
    }
}


const router = routes(['/users', '/posts', 'admin/users'])

router.addRedirect('', '')