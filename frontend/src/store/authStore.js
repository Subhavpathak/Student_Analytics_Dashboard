import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import api from '../lib/api';

export const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,

      login: async (email, password) => {
        set({ isLoading: true });

        try {
          const response = await api.post('/auth/login', { email, password });

          if (response.data.success) {
            const { user, token } = response.data.data;

            localStorage.setItem('token', token);
            set({
              user,
              token,
              isAuthenticated: true,
              isLoading: false
            });

            return { success: true, user };
          } else {
            set({ isLoading: false });
            return {
              success: false,
              message: response.data.message
            };
          }
        } catch (error) {
          set({ isLoading: false });
          return {
            success: false,
            message: error.response?.data?.message || 'Login failed'
          };
        }
      },

      logout: () => {
        localStorage.removeItem('token');
        set({
          user: null,
          token: null,
          isAuthenticated: false
        });
      },

      checkAuth: async () => {
        const token = localStorage.getItem('token');

        if (!token) {
          return false;
        }

        try {
          const response = await api.get('/auth/profile');

          if (response.data.success) {
            set({
              user: response.data.data,
              token,
              isAuthenticated: true
            });
            return true;
          } else {
            localStorage.removeItem('token');
            set({
              user: null,
              token: null,
              isAuthenticated: false
            });
            return false;
          }
        } catch (error) {
          localStorage.removeItem('token');
          set({
            user: null,
            token: null,
            isAuthenticated: false
          });
          return false;
        }
      }
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated
      })
    }
  )
);