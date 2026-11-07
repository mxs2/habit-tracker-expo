// Exercício 4 (Tarefa 3) & Atividade Aplicada (Requisito 4) — Aba Estatísticas com Zustand e useTheme
// Onde: src/screens/tela-estatisticas.tsx (rota: src/app/(tabs)/stats.tsx)

import { StyleSheet, Switch, Text, View } from 'react-native';
import { useTheme } from '../context/theme-context';
import { useHabitStore } from '../store/use-habit-store';

export function TelaEstatisticas() {
  const habits = useHabitStore((state) => state.habits);
  const { isDark, toggleTheme } = useTheme();
  const fundo = isDark ? '#121212' : '#FFFFFF';
  const texto = isDark ? '#F5F5F5' : '#1A1A1A';

  const total = habits.length;
  const completed = habits.filter((h) => h.done).length;
  const pending = total - completed;
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <View style={[styles.container, { backgroundColor: fundo }]}>
      <Text style={[styles.titulo, { color: texto }]}>Estatísticas</Text>
      <Text style={[styles.texto, { color: texto }]}>Total de hábitos: {total}</Text>
      <Text style={[styles.texto, { color: texto }]}>Concluídos: {completed}</Text>
      <Text style={[styles.texto, { color: texto }]}>Pendentes: {pending}</Text>
      <Text style={styles.destaque}>Progresso: {percentage}%</Text>

      <View style={[styles.linhaTema]}>
        <Text style={[styles.texto, { color: texto }]}>Modo Escuro</Text>
        <Switch value={isDark} onValueChange={toggleTheme} />
      </View>
    </View>
  );
}

export default TelaEstatisticas;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10, padding: 24 },
  titulo: { fontSize: 22, fontWeight: '700', marginBottom: 8 },
  texto: { fontSize: 16 },
  destaque: { fontSize: 18, fontWeight: '700', color: '#FF6002', marginTop: 4 },
  linhaTema: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});
