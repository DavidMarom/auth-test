"use client"

import { gprovider } from '../services/firebase-config';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

export function googleSignup(): Promise<any> {
    return signInWithPopup(getAuth(), gprovider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);

            const token = credential?.idToken;
            const user = result.user;

            console.log(token, user);
        })
}

export async function googleSignOut() {
    try {
        await signOut(getAuth())
        console.log("Signed out");
    } catch (error) {
        console.log(error);
    }
};
