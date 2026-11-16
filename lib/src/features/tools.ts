import type { ExtensionAPI } from '@earendil-works/pi-coding-agent';
import { acquire } from '@kabaevroman/pi-code-core';
import { registerTools } from '../extensions/tools.ts';
export default function(pi: ExtensionAPI): void { const state = acquire(pi,'tools'); if (state) { const r = state.runtime; registerTools(r); } }
