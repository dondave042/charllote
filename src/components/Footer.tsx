import React, { useState } from 'react';
import { Shield, Heart, HelpCircle, FileLock2, ShieldAlert, Settings, Users, X, Key } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  userRole: 'fan' | 'admin' | 'creator';
  setUserRole: (role: 'fan' | 'admin' | 'creator') => void;
}

export default function Footer({ setActiveTab, userRole, setUserRole }: FooterProps) {
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  const handleRoleChange = (role: 'fan' | 'admin' | 'creator') => {
    setUserRole(role);
    if (role === 'fan') {
      setActiveTab('home');
    } else if (role === 'admin') {
      setActiveTab('admin');
    } else if (role === 'creator') {
      setActiveTab('dashboard');
    }
    setShowAdminPanel(false);
    alert(`Role switched to ${role.toUpperCase()} Mode! Directing to appropriate dashboard.`);
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 mt-20 text-left relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center cursor-pointer" onClick={() => setActiveTab('home')}>
              <div className="relative mr-3 bg-zinc-950 border border-red-600 p-1 rounded-lg shadow-lg shadow-red-600/10">
                <img src="/logo.jpeg" alt="XFans Logo" className="h-10 w-auto max-w-[120px] object-contain rounded" />
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight text-white font-sans uppercase">
                  XFans
                </span>
                <span className="text-[9px] font-black tracking-[0.2em] text-red-500 block -mt-0.5 uppercase">
                  18+ VIP PORTAL
                </span>
              </div>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed max-w-sm">
              XFans VIP is a secure, premium booking agency and safety protocol platform facilitating verified meetups between fans and content creators. We provide absolute privacy, secure escrow, and professional physical security details.
            </p>
            <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-bold bg-zinc-900 py-1.5 px-3 rounded-lg inline-block border border-zinc-800">
              <FileLock2 className="h-3.5 w-3.5 text-red-500" />
              Fully compliant with 18 U.S.C. § 2257 Record-Keeping Requirements.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Platform</h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <button onClick={() => setActiveTab('home')} className="hover:text-red-500 transition text-left cursor-pointer">
                  Home / Explore
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('creators')} className="hover:text-red-500 transition text-left cursor-pointer">
                  Creator Roster
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('book')} className="hover:text-red-500 transition text-left cursor-pointer">
                  Book a Meeting
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('tracker')} className="hover:text-red-500 transition text-left cursor-pointer">
                  Status Tracker
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('safety')} className="hover:text-red-500 transition text-left cursor-pointer">
                  Safety & Conduct
                </button>
              </li>
            </ul>
          </div>

          {/* Legal / Compliance */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Safety & Compliance</h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li className="flex items-center gap-1.5 text-red-500 font-bold">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                Strictly 18+ Only
              </li>
              <li>
                <span className="text-zinc-500 block">Vetting Partner:</span>
                <span className="text-white font-semibold">Aegis Security Group</span>
              </li>
              <li>
                <span className="text-zinc-500 block">Payment Escrow:</span>
                <span className="text-white font-semibold">XFans Verified Trust</span>
              </li>
              <li className="text-[10px] text-zinc-500 leading-relaxed pt-2">
                All creators on XFans operate as independent contractors. XFans coordinates security, identity vetting, and escrow services.
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-900 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <div className="flex flex-wrap items-center gap-4">
            <span>&copy; {new Date().getFullYear()} XFans VIP Meetups. All rights reserved.</span>
            
            {/* The Dedicated Admin/Portal Button Icon in the Footer! */}
            <button
              onClick={() => setShowAdminPanel(!showAdminPanel)}
              className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 hover:border-red-500/30 px-3 py-1.5 rounded-xl text-[10px] font-extrabold uppercase tracking-wider text-red-500 transition shadow-md cursor-pointer"
              title="Open Secret Portal Controls"
            >
              <ShieldAlert className="h-3.5 w-3.5 text-red-500" />
              Portal Control
            </button>
          </div>

          <div className="flex items-center gap-1.5 text-[10px]">
            Designed with
            <Heart className="h-3 w-3 text-red-500 fill-red-500" />
            for creator safety & peace of mind.
          </div>
        </div>
      </div>

      {/* POPUP OVERLAY: SECRET ADMIN PORTAL CONTROLS */}
      {showAdminPanel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-zinc-950 border border-red-500/30 rounded-2xl max-w-sm w-full p-6 text-center space-y-5 relative overflow-hidden shadow-2xl">
            {/* Hologram Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 via-transparent to-transparent pointer-events-none" />

            {/* Header */}
            <div className="flex justify-between items-center border-b border-zinc-900 pb-3">
              <div className="flex items-center gap-1.5 text-red-500">
                <Key className="h-4 w-4 text-red-500" />
                <span className="text-xs font-extrabold tracking-wider uppercase">System Controller</span>
              </div>
              <button 
                onClick={() => setShowAdminPanel(false)}
                className="p-1 text-zinc-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-serif font-black text-white">Switch Active Portal View</h3>
              <p className="text-[10px] text-zinc-400 leading-relaxed">
                Hiding the active role switcher in the footer keeps the public directory clean. Choose your role to simulate and inspect:
              </p>
            </div>

            {/* Selector Buttons */}
            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={() => handleRoleChange('fan')}
                className={`w-full py-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 border ${
                  userRole === 'fan'
                    ? 'bg-red-600 text-white border-red-500'
                    : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:bg-zinc-800'
                }`}
              >
                <Users className="h-4 w-4" />
                FAN MODE (Browse & Book)
              </button>

              <button
                onClick={() => handleRoleChange('admin')}
                className={`w-full py-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 border ${
                  userRole === 'admin'
                    ? 'bg-red-600 text-white border-red-500'
                    : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:bg-zinc-800'
                }`}
              >
                <ShieldAlert className="h-4 w-4" />
                ADMIN MODE (Manage Stars & Media)
              </button>

              <button
                onClick={() => handleRoleChange('creator')}
                className={`w-full py-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 border ${
                  userRole === 'creator'
                    ? 'bg-red-600 text-white border-red-500'
                    : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:bg-zinc-800'
                }`}
              >
                <Settings className="h-4 w-4" />
                CREATOR MODE (Manage Bookings)
              </button>
            </div>

            <p className="text-[9px] text-zinc-500 leading-relaxed">
              These controls are only available to accredited platform administrators and developers.
            </p>
          </div>
        </div>
      )}
    </footer>
  );
}
