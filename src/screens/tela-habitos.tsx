// Atividade Aplicada (Requisito 3) — Aba Home conectada ao useHabitStore e useTheme
// Onde: src/screens/tela-habitos.tsx (rota: src/app/(tabs)/index.tsx)

import { useEffect, useState } from 'react';
import { Link, useRouter } from 'expo-router';
import { requestPermissionsAsync } from 'expo-notifications/build/NotificationPermissions';
import {
  addNotificationReceivedListener,
  addNotificationResponseReceivedListener,
} from 'expo-notifications/build/NotificationsEmitter';
import { setNotificationHandler } from 'expo-notifications/build/NotificationsHandler';
import { SchedulableTriggerInputTypes } from 'expo-notifications/build/Notifications.types';
import { scheduleNotificationAsync } from 'expo-notifications/build/scheduleNotificationAsync';
import {
  AppState,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { useTheme } from '../context/theme-context';
import { useHabitStore } from '../store/use-habit-store';
import { cores, espaco } from '../theme';

setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: true,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export function TelaHabitos() {
  const router = useRouter();
  const [novoHabitoTexto, setNovoHabitoTexto] = useState('');
  const [permissionGranted, setPermissionGranted] = useState(false);

  const { isDark } = useTheme();
  const fundo = isDark ? '#121212' : cores.fundo;
  const cartao = isDark ? '#1E1E1E' : cores.cartao;
  const texto = isDark ? '#F5F5F5' : cores.texto;
  const habits = useHabitStore((s) => s.habits);
  const addHabit = useHabitStore((s) => s.addHabit);
  const toggleHabit = useHabitStore((s) => s.toggleHabit);

  useEffect(() => {
    async function requestPermission() {
      const { status } = await requestPermissionsAsync();
      setPermissionGranted(status === 'granted');
    }

    requestPermission();

    const receivedListener = addNotificationReceivedListener((notification) => {
      console.log('Notificação recebida', notification);
    });

    const navegarParaDetalhe = (habitId: string) => {
      setTimeout(() => {
        router.push({
          pathname: '/habit/[id]',
          params: { id: habitId },
        });
      }, 300);
    };

    const responseListener = addNotificationResponseReceivedListener((response) => {
      console.log('Notificação tocada', response);
      const habitId = String(response?.notification?.request?.content?.data?.habitId ?? '1');

      if (AppState.currentState === 'active') {
        navegarParaDetalhe(habitId);
      } else {
        const appStateSub = AppState.addEventListener('change', (nextState) => {
          if (nextState === 'active') {
            appStateSub.remove();
            navegarParaDetalhe(habitId);
          }
        });
      }
    });

    return () => {
      receivedListener.remove();
      responseListener.remove();
    };
  }, [router]);

  async function agendarLembrete() {
    if (!permissionGranted) {
      const { status } = await requestPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permissão não concedida');
        return;
      }
      setPermissionGranted(true);
    }

    await scheduleNotificationAsync({
      content: {
        title: 'Hora do hábito!',
        body: 'Não esqueça de sua rotina.',
        data: { habitId: '1' },
      },
      trigger: {
        type: SchedulableTriggerInputTypes.TIME_INTERVAL,
        seconds: 5,
      },
    });
  }

  function handleAdicionarHabito() {
    if (!novoHabitoTexto.trim()) return;
    addHabit(novoHabitoTexto);
    setNovoHabitoTexto('');
  }

  function abrirDetalhe(id: string) {
    router.push({
      pathname: '/habit/[id]',
      params: { id },
    });
  }

  return (
    <View style={[styles.tela, { backgroundColor: fundo }]}>
      <View style={styles.conteudo}>
        <View style={styles.linhaInput}>
          <TextInput
            style={[styles.input, { backgroundColor: cartao, color: texto }]}
            placeholder="Novo hábito..."
            onSubmitEditing={handleAdicionarHabito}
            value={novoHabitoTexto}
            onChangeText={setNovoHabitoTexto}
          />
          <Pressable style={styles.botaoAdicionar} onPress={handleAdicionarHabito}>
            <Text style={styles.textoBotaoAdicionar}>+</Text>
          </Pressable>
        </View>

        <FlatList
          data={habits}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={styles.separador} />}
          renderItem={({ item }) => (
            <View style={[styles.card, { backgroundColor: cartao }]}>
              <Pressable onPress={() => toggleHabit(item.id)} style={styles.checkbox}>
                <Text style={styles.checkboxTexto}>{item.done ? '✅' : '⬜'}</Text>
              </Pressable>

              <Pressable onPress={() => abrirDetalhe(item.id)} style={styles.cardTitulo}>
                <Text
                  style={[
                    styles.tituloHabito,
                    { color: texto },
                    item.done && styles.tituloConcluido,
                  ]}
                >
                  {item.title}
                </Text>
              </Pressable>
            </View>
          )}
        />
      </View>

      <View style={styles.rodape}>
        <Pressable
          onPress={agendarLembrete}
          style={({ pressed }) => [styles.botaoNotificacao, pressed && styles.botaoPressionado]}
        >
          <Text style={styles.textoBotaoRota}>Agendar notificação em 5s</Text>
        </Pressable>

        <Link href="/about" style={styles.linkSobre}>
          Sobre o app
        </Link>
      </View>
    </View>
  );
}

export default TelaHabitos;

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: cores.fundo },
  conteudo: { flex: 1, padding: espaco.md },
  linhaInput: { flexDirection: 'row', gap: espaco.sm, marginBottom: espaco.md },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: cores.textoFraco,
    borderRadius: espaco.sm,
    paddingHorizontal: espaco.md,
    paddingVertical: espaco.sm,
    backgroundColor: cores.cartao,
    fontSize: 16,
  },
  botaoAdicionar: {
    backgroundColor: '#FF6002',
    paddingHorizontal: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: espaco.sm,
  },
  textoBotaoAdicionar: { color: '#fff', fontSize: 22, fontWeight: '700' },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: espaco.md,
    backgroundColor: cores.cartao,
    borderRadius: espaco.sm,
    gap: espaco.sm,
  },
  checkbox: { padding: 4 },
  checkboxTexto: { fontSize: 18 },
  cardTitulo: { flex: 1 },
  tituloHabito: { fontSize: 16, fontWeight: '600', color: cores.texto },
  tituloConcluido: { textDecorationLine: 'line-through', color: cores.textoFraco },
  separador: { height: espaco.sm },
  rodape: { padding: espaco.md, gap: espaco.sm },
  botaoNotificacao: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  textoBotaoRota: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  botaoPressionado: {
    opacity: 0.7,
  },
  linkSobre: {
    fontSize: 16,
    color: '#FF6002',
    textDecorationLine: 'underline',
    textAlign: 'center',
    paddingVertical: 4,
  },
});
