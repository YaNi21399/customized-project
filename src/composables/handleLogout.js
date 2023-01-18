import { ref } from "vue";
import { useRouter } from "vue-router";
import { getAuth, signOut } from "firebase/auth";

const handleLogout = () => {
    const isLogin = ref(false);
    const auth = getAuth();
    const router = useRouter();
    const logout = () => {
        signOut(auth)
            .then(() => router.push("/"))
            .catch((err) => console.log(err.message));
    };

    return { isLogin, logout }
}
export default handleLogout