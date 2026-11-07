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
    // TODO Atividade Aplicada 1.1: Carregar a preferência de tema salva com AsyncStorage.getItem(THEME_STORAGE_KEY)
    void AsyncStorage;
    void THEME_STORAGE_KEY;
  }, []);

  const toggleTheme = () => {
    // TODO Atividade Aplicada 1.2: salvar a nova preferência no disco com AsyncStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(nextValue))
    setIsDark((prev) => !prev);
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
