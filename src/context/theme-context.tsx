// Exercício 3 — useContext: Tema Claro/Escuro em todo o app
// Atividade Aplicada (Requisito 1) — Tema Global Persistido (useContext + AsyncStorage)
// Onde: src/context/theme-context.tsx

import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect, useState, type PropsWithChildren } from 'react';

type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
};

const THEME_STORAGE_KEY = '@habits:theme';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: PropsWithChildren) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    let ativo = true;
    AsyncStorage.getItem(THEME_STORAGE_KEY)
      .then((valor) => {
        if (ativo && valor !== null) setIsDark(JSON.parse(valor) === true);
      })
      .catch((erro) => console.warn('Falha ao carregar o tema', erro));
    return () => {
      ativo = false;
    };
  }, []);

  const toggleTheme = () => {
    // setItem fora do updater: o StrictMode pode chamar o updater duas vezes
    const nextValue = !isDark;
    setIsDark((prev) => !prev);
    AsyncStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(nextValue)).catch((erro) =>
      console.warn('Falha ao salvar o tema', erro),
    );
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme deve ser usado dentro de um <ThemeProvider>');
  }
  return context;
}
