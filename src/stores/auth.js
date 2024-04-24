import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: localStorage.getItem('api_token') || null,
        isLoggedIn: !!localStorage.getItem('api_token')
    }),
    actions: {
        setToken(token) {
            this.token = token;
            this.isLoggedIn = !!token;
            if (token) {
                localStorage.setItem('api_token', token);
            } else {
                localStorage.removeItem('api_token');
            }
        },
        logout() {
            this.setToken(null);
        }
    }
});