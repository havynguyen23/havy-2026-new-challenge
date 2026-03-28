import { DiaryEntry } from './types';

// Entries Week 1
import * as entry20260314 from './2026-03-14';
import * as entry20260315 from './2026-03-15';
import * as entry20260316 from './2026-03-16';
import * as entry20260317 from './2026-03-17';
import * as entry20260318 from './2026-03-18';
import * as entry20260319 from './2026-03-19';
import * as entry20260320 from './2026-03-20';
import * as entry20260321 from './2026-03-21';

// Entries Week 2
import * as entry20260322 from './2026-03-22';
import * as entry20260323 from './2026-03-23';
import * as entry20260324 from './2026-03-24';
import * as entry20260325 from './2026-03-25';
import * as entry20260326 from './2026-03-26';
import * as entry20260327 from './2026-03-27';

// Entries Week 3
import * as entry20260328 from './2026-03-28';

export type { DiaryEntry };

// Add new imports at the top, newest first
const allEntries: Record<string, DiaryEntry>[] = [
  entry20260314,
  entry20260315,
  entry20260316,
  entry20260317,
  entry20260318,
  entry20260319,
  entry20260320,
  entry20260321,
  entry20260322,
  entry20260323,
  entry20260324,
  entry20260325,
  entry20260326,
  entry20260327,
  entry20260328,
];

export const diaryEntries: Record<string, DiaryEntry[]> = {
  vi: allEntries.map((e) => e.vi),
  en: allEntries.map((e) => e.en),
};
