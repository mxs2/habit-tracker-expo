// Exercício 1 — useState: lista imutável e atualização funcional
// Onde: src/screens/tela-habitos-rapidos.tsx (rota: src/app/quick-habits.tsx)

import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

type HabitItem = {
  id: string;
  title: string;
  done: boolean;
};

export function QuickHabitsScreen() {
  const [text, setText] = useState('');
  const [totalClicks, setTotalClicks] = useState(0);
  const [habits, setHabits] = useState<HabitItem[]>([
    { id: '1', title: 'Beber água', done: false },
    { id: '2', title: 'Caminhar 20 min', done: true },
  ]);

  const handleAdd = () => {
    if (!text.trim()) return;
    const novo: HabitItem = { id: Date.now().toString(), title: text.trim(), done: false };
    setHabits((prev) => [...prev, novo]);
    setText('');
  };

  const handleToggle = (id: string) => {
    setHabits((prev) => prev.map((h) => (h.id === id ? { ...h, done: !h.done } : h)));
    setTotalClicks((prev) => prev + 1);
  };

  const handleRemove = (id: string) => {
    setHabits((prev) => prev.filter((h) => h.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>Interações hoje: {totalClicks}</Text>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Novo hábito..."
        />
        <Pressable style={styles.addBtn} onPress={handleAdd}>
          <Text style={styles.addBtnText}>+</Text>
        </Pressable>
      </View>

      <FlatList
        data={habits}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Pressable style={styles.cardTitle} onPress={() => handleToggle(item.id)}>
              <Text style={styles.titleText}>
                {item.done ? '✅' : '⬜'} {item.title}
              </Text>
            </Pressable>
            <Pressable onPress={() => handleRemove(item.id)}>
              <Text style={styles.deleteText}>Excluir</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}

export default QuickHabitsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  counter: { fontSize: 14, color: '#666', marginBottom: 12 },
  row: { flexDirection: 'row', gap: 8, marginBottom: 16 },
  input: { flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, paddingHorizontal: 12 },
  addBtn: { backgroundColor: '#FF6002', paddingHorizontal: 18, justifyContent: 'center', borderRadius: 8 },
  addBtnText: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  card: { flexDirection: 'row', alignItems: 'center', padding: 12, borderBottomWidth: 1, borderColor: '#eee' },
  cardTitle: { flex: 1 },
  titleText: { fontSize: 16 },
  deleteText: { color: '#c62828', fontWeight: 'bold' },
});
