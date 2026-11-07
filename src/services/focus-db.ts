// Exercício 5 (Parte B) — Persistência local em disco com expo-sqlite
// Onde: src/services/focus-db.ts

import * as SQLite from 'expo-sqlite';

export type FocusLog = {
  id: number;
  habitId: string;
  seconds: number;
};

export async function openFocusDb() {
  const db = await SQLite.openDatabaseAsync('habits.db');
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS focus_logs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      habitId TEXT NOT NULL,
      seconds INTEGER NOT NULL
    );
  `);
  return db;
}

export async function saveFocusSession(habitId: string, seconds: number) {
  const db = await openFocusDb();
  await db.runAsync('INSERT INTO focus_logs (habitId, seconds) VALUES (?, ?)', habitId, seconds);
}

export async function listFocusSessions(): Promise<FocusLog[]> {
  const db = await openFocusDb();
  return db.getAllAsync<FocusLog>('SELECT id, habitId, seconds FROM focus_logs');
}
