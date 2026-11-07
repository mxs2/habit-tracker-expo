// Atividade Aplicada (Requisito 5) — Tela de Detalhe do Hábito + Cronômetro de Foco
// Onde: src/screens/tela-detalhe-habito.tsx (rota: src/app/habit/[id].tsx)

import { useLocalSearchParams, useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import FocusTimer from '../components/focus-timer';
import { useTheme } from '../context/theme-context';
import { useHabitStore } from '../store/use-habit-store';

export function TelaDetalheHabito() {
  // ⚠️ Regra dos Hooks: declare TODOS os hooks no topo, antes de qualquer return condicional!
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { isDark } = useTheme();

  const habit = useHabitStore((s) => s.habits.find((h) => h.id === id));
  const toggleHabit = useHabitStore((s) => s.toggleHabit);
  const removeHabit = useHabitStore((s) => s.removeHabit);

  const fundo = isDark ? '#121212' : '#FFFFFF';
  const texto = isDark ? '#F5F5F5' : '#1A1A1A';

  if (!habit) {
    return (
      <View style={[styles.container, { backgroundColor: fundo }]}>
        <Text style={[styles.titulo, { color: texto }]}>Hábito não encontrado</Text>
        <Pressable onPress={() => router.back()} style={[styles.botao, styles.botaoVoltar]}>
          <Text style={styles.textoBotao}>Voltar</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: fundo }]}>
      <Text style={[styles.titulo, { color: texto }]}>{habit.title}</Text>
      <Text style={styles.id}>Hábito ID: {id}</Text>
      <Text style={[styles.status, { color: texto }]}>
        Status: {habit.done ? '✅ Concluído' : '⬜ Pendente'}
      </Text>

      {/* Cronômetro de foco (Exercício 2) */}
      <FocusTimer />

      <View style={styles.acoes}>
        <Pressable onPress={() => toggleHabit(habit.id)} style={styles.botao}>
          <Text style={styles.textoBotao}>
            {habit.done ? 'Marcar como pendente' : 'Concluir hábito'}
          </Text>
        </Pressable>

        <Pressable
          onPress={() => {
            removeHabit(habit.id);
            router.back();
          }}
          style={[styles.botao, styles.botaoExcluir]}
        >
          <Text style={styles.textoBotao}>Excluir hábito</Text>
        </Pressable>

        <Pressable onPress={() => router.back()} style={[styles.botao, styles.botaoVoltar]}>
          <Text style={styles.textoBotao}>Voltar</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default TelaDetalheHabito;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 12, padding: 24 },
  titulo: { fontSize: 22, fontWeight: '700', textAlign: 'center' },
  id: { fontSize: 16, color: '#FF6002', fontWeight: '600' },
  status: { fontSize: 16, marginBottom: 8 },
  acoes: { width: '100%', gap: 10, marginTop: 16 },
  botao: {
    backgroundColor: '#FF6002',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  botaoExcluir: { backgroundColor: '#c62828' },
  botaoVoltar: { backgroundColor: '#555' },
  textoBotao: { color: '#fff', fontWeight: '700', fontSize: 16 },
});
