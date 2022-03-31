import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
export function signInAPI() {
    return (dispatch) => {
        console.log("clicked");
        signInWithPopup(auth, provider).then((payload) => {
            console.log(payload);
        }).catch((error) => alert(error.message));
    }
}