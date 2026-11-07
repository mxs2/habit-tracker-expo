// Exercício 3 — useContext: Tema Claro/Escuro em todo o app
// Onde: src/screens/tela-configuracoes.tsx (rota: src/app/settings.tsx)

import { StyleSheet, Switch, Text, View } from 'react-native';
import { useTheme } from '../context/theme-context';

export function TelaConfiguracoes() {
  const { isDark, toggleTheme } = useTheme();
  const fundo = isDark ? '#121212' : '#FFFFFF';
  const texto = isDark ? '#F5F5F5' : '#1A1A1A';

  return (
    <View style={[styles.container, { backgroundColor: fundo }]}>
      <Text style={[styles.titulo, { color: texto }]}>Configurações</Text>
      <Text style={[styles.texto, { color: texto }]}>
        Gerencie preferências e o tema do aplicativo.
      </Text>

      <View style={[styles.linhaTema]}>
        <Text style={[styles.rotulo, { color: texto }]}>Modo Escuro</Text>
        <Switch value={isDark} onValueChange={toggleTheme} />
      </View>
    </View>
  );
}

export default TelaConfiguracoes;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 16, padding: 24 },
  titulo: { fontSize: 20, fontWeight: '700' },
  texto: { fontSize: 16, textAlign: 'center' },
  linhaTema: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  rotulo: { fontSize: 16, fontWeight: '600' },
});
