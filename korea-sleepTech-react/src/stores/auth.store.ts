//? auth: 인증(authentication)

import { create } from "zustand";

//# 사용자 인증을 관리하는 스토어
interface AuthState {
  user: string | null; // 로그인 되어 있지 않은 경우 null값 저장
  isLogged: boolean;
  login: (user: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>(set => ({
  user: null,
  isLogged: false,
  // user 변수에 '홍길동'이 전달
  // >> user: '홍길동' (key: value)
  login: (user) => set({ user, isLogged: true }), 
  logout: () => set({ user: null, isLogged: false })
}));