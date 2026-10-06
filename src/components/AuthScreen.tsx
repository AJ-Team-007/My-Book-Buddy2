import React, { useState } from 'react';
import {
  BookOpen,
  Sparkles,
  ShieldCheck,
  GraduationCap,
  Tag,
  Users,
  CheckCircle2,
  FlaskConical,
} from 'lucide-react';
import { HERO_BOOKS_IMAGE } from '../data/mockData';
import { BrandLogo } from './BrandLogo';

interface AuthScreenProps {
  onGoogleSignIn: () => Promise<void>;
  onEnterDemoMode: () => void;
  authError: string | null;
}

export const AuthScreen: React.FC<AuthScreenProps> = ({
  onGoogleSignIn,
  onEnterDemoMode,
  authError,
}) => {
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      await onGoogleSignIn();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#070A18] text-white flex flex-col justify-between relative overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#7B3FE4]/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#FF2E93]/20 blur-3xl" />

      {/* Top Bar */}
      <header className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-8 py-5 flex items-center justify-between">
        <BrandLogo size="md" />
        <span className="px-3.5 py-1.5 rounded-full bg-[#121836] border border-[#7B3FE4]/50 text-[11px] font-extrabold text-[#FFD13B]">
          Created & Owned by Jaimin & Aarush
        </span>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-8 py-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Hero Branding */}
        <div className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-[#38BDF8]">
            <Sparkles className="w-3.5 h-3.5 text-[#FF2E93]" />
            <span>Verified Student-to-Student Used Book Marketplace</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.12]">
            Give Your Old Books to a{' '}
            <span className="bg-gradient-to-r from-[#00E5FF] via-[#FF2E93] to-[#7B3FE4] bg-clip-text text-transparent">
              New Student
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
            Buy and sell useful school books within your student community. Sign in with your Google account to list books, send buy requests, and chat with fellow students in real time.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {[
              { label: 'For Students', icon: GraduationCap, color: 'text-[#38BDF8]' },
              { label: 'Affordable Prices', icon: Tag, color: 'text-[#FFD13B]' },
              { label: 'Safe Exchange', icon: ShieldCheck, color: 'text-[#10B981]' },
              { label: 'Student Community', icon: Users, color: 'text-[#FF2E93]' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="p-3 rounded-2xl bg-[#0B0F26]/90 border border-white/10 flex items-center gap-2.5"
                >
                  <Icon className={`w-4 h-4 ${item.color} shrink-0`} />
                  <span className="text-xs font-bold text-slate-200">{item.label}</span>
                </div>
              );
            })}
          </div>

          <div className="hidden sm:block relative w-full max-w-md aspect-[16/9] rounded-2xl overflow-hidden border border-white/15 shadow-[0_0_35px_rgba(123,63,228,0.3)] bg-[#0B0F26]">
            <img
              src={HERO_BOOKS_IMAGE}
              alt="My Book Buddy Textbooks"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F26] via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-bold text-white px-3 py-1.5 rounded-xl bg-[#0B0F26]/80 backdrop-blur-md border border-white/10">
              <span>📚 Real-Time Multi-User Cloud Marketplace</span>
              <span className="text-[#10B981]">Firebase Live</span>
            </div>
          </div>
        </div>

        {/* Right Column: Sign In / Create Account Card */}
        <div className="lg:col-span-5">
          <div className="rounded-3xl bg-[#0B0F26] border border-[#7B3FE4]/50 p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.85)] space-y-6">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF2E93] via-[#7B3FE4] to-[#00E5FF] p-0.5 mx-auto shadow-[0_0_25px_rgba(255,46,147,0.45)]">
                <div className="w-full h-full bg-[#0B0F26] rounded-[14px] flex items-center justify-center">
                  <BookOpen className="w-7 h-7 text-[#00E5FF]" />
                </div>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                Sign In / Create Account
              </h2>
              <p className="text-xs text-slate-400">
                Use your Google Account to access the live student book marketplace
              </p>
            </div>

            {authError && (
              <div className="p-3.5 rounded-2xl bg-rose-500/15 border border-rose-500/40 text-xs font-bold text-rose-300 text-center">
                {authError}
              </div>
            )}

            <div className="space-y-3">
              <button
                type="button"
                disabled={loading}
                onClick={handleLogin}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#7B3FE4] via-[#2563EB] to-[#00E5FF] hover:brightness-110 disabled:opacity-60 text-white text-sm font-extrabold shadow-[0_10px_30px_rgba(0,229,255,0.35)] flex items-center justify-center gap-3 transition-all cursor-pointer"
              >
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>
                  {loading ? 'Signing in with Google...' : 'Continue with Google Sign-In'}
                </span>
              </button>

              <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-white/10" />
                <span className="flex-shrink mx-3 text-[11px] font-bold text-slate-500 uppercase">
                  Or Science Fair Preview
                </span>
                <div className="flex-grow border-t border-white/10" />
              </div>

              <button
                type="button"
                onClick={onEnterDemoMode}
                className="w-full py-3 px-5 rounded-2xl bg-[#121836] hover:bg-[#1E293B] border border-white/15 text-xs font-extrabold text-[#FFD13B] flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <FlaskConical className="w-4 h-4 text-[#FF2E93]" />
                <span>Explore Science Fair Demo Mode (Isolated Sample Data)</span>
              </button>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#121836]/80 border border-white/10 space-y-1.5 text-[11px] text-slate-400">
              <div className="font-bold text-slate-200 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                <span>Student Privacy Guarantee</span>
              </div>
              <p>
                Your private email address and phone number are never shown publicly. Only your student display name, class, board, and book listings are visible to other signed-in students.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-8 py-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
        <span>MY BOOK BUDDY • Buy • Sell • Share • Learn</span>
        <span className="text-[#FFD13B] font-bold">
          Created & Owned by Jaimin & Aarush
        </span>
      </footer>
    </div>
  );
};
