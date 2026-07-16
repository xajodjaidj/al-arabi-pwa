import React, { useState, useEffect, useMemo, useRef } from 'react';
import { FileText, Loader2 } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-2xl text-center">
        <img src="https://app.zaro.ai/api/console/workspaces/oss/read?workspace_id=bcac0bc3-79be-467d-8814-edc1d77dfa74&object_id=public-af6fb64d-b33b-48ca-bf1e-99531f90d9fa"
             className="mx-auto w-24 h-24 object-contain mb-6" alt="Al-Arabi"/>
        <h1 className="text-2xl font-bold mb-2 text-[#0A4B9F]">Al-Arabi POR</h1>
        <p className="text-sm text-slate-600 mb-6">Your complete standalone PWA for employee management.</p>
        <div className="space-y-3">
          <a href="https://github.com/xajodjaidj/al-arabi-pwa" target="_blank" rel,"noreferrer"
             className="flex items-center justify-center gap-2 w-full py-3.5 bg-slate-900 text-white rounded-2xl font-bold transition-all">
            <FileText size={16}/> Go to GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
}
