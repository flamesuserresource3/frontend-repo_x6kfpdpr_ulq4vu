import React from 'react';
import { Rocket, Wand2 } from 'lucide-react';

export default function IdeaWorkbench() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-slate-800 bg-slate-900/50 p-4">
      <div className="mb-3 flex items-center gap-2">
        <Rocket className="h-5 w-5 text-pink-400" />
        <h3 className="text-sm font-medium text-slate-200">Idea Workbench</h3>
      </div>

      <div className="rounded-lg border border-slate-800 bg-slate-950 p-3">
        <p className="text-xs uppercase tracking-wide text-slate-400">Problem</p>
        <p className="mt-1 text-sm text-slate-200">
          Freelancers struggle managing multi-client invoices.
        </p>
      </div>

      <div className="mt-4 space-y-3">
        <div>
          <label className="text-xs uppercase tracking-wide text-slate-400">AI Brief</label>
          <textarea
            rows={4}
            className="mt-1 w-full rounded-md border border-slate-800 bg-slate-950 p-3 text-sm text-slate-200 outline-none focus:border-indigo-500"
            defaultValue={
              'Turn this problem into a concrete SaaS concept with:
- ICP (who is it for)
- Key jobs-to-be-done
- 3 killer features
- Monetization approach'
            }
          />
        </div>

        <button className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-600/90">
          <Wand2 className="h-4 w-4" />
          Brainstorm with AI
        </button>

        <div className="rounded-lg border border-slate-800 bg-slate-950 p-3">
          <p className="text-xs uppercase tracking-wide text-slate-400">Concept</p>
          <div className="mt-2 space-y-2 text-sm text-slate-200">
            <p>
              InvoicePilot — a lightweight finance command center for freelancers
              serving 3–10 active clients.
            </p>
            <ul className="list-inside list-disc text-slate-300">
              <li>Automated invoice generation per client + currency</li>
              <li>Smart payment reminders via email + WhatsApp</li>
              <li>Tax-ready exports and quarterly summaries</li>
            </ul>
            <p className="text-slate-400">$12/mo starter, $29/mo pro</p>
          </div>
        </div>
      </div>
    </div>
  );
}
