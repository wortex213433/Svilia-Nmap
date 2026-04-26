import React, { useState, useEffect, useRef } from 'react';
import { 
  ShieldCheck, 
  Terminal as TerminalIcon, 
  Globe, 
  Activity, 
  Settings, 
  Cpu, 
  Wifi, 
  Zap, 
  Search, 
  LayoutDashboard, 
  Server, 
  Database, 
  Crosshair, 
  Power,
  ChevronRight,
  Maximize2,
  RefreshCw,
  MoreVertical
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';

const SidebarItem = ({ icon: Icon, label, active, onClick }: { icon: any, label: string, active?: boolean, onClick?: () => void }) => (
  <button 
    id={`nav-${label.toLowerCase()}`}
    onClick={onClick}
    className={cn(
      "group relative flex items-center justify-center w-14 h-14 rounded-xl transition-all duration-300",
      active ? "bg-cyber-lime text-void shadow-[0_0_20px_rgba(204,255,0,0.4)]" : "text-slate-500 hover:text-white hover:bg-white/5"
    )}
  >
    <Icon className="w-6 h-6" />
    <span className="absolute left-16 px-3 py-1 bg-obsidian border border-glass-border rounded-md text-xs font-medium opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
      {label}
    </span>
  </button>
);

const HexagonBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
    <svg width="100%" height="100%" className="text-white">
      <defs>
        <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
          <path d="M25 0 L50 14.4 L50 28.8 L25 43.4 L0 28.8 L0 14.4 Z" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hexagons)" />
    </svg>
  </div>
);

const MetricCard = ({ icon: Icon, label, value, color }: { icon: any, label: string, value: string, color: string }) => (
  <div className="glass-panel p-4 flex items-center gap-4 group cursor-default">
    <div className={cn("p-2.5 rounded-lg transition-transform group-hover:scale-110", color)}>
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{label}</p>
      <p className="text-lg font-bold text-white tracking-tight">{value}</p>
    </div>
  </div>
);

const TerminalLine = ({ text, type = 'info' }: { text: string, type?: 'info' | 'success' | 'warn' | 'error' | 'cmd' }) => {
  const getColors = () => {
    switch (type) {
      case 'success': return 'text-cyber-lime';
      case 'warn': return 'text-amber-400';
      case 'error': return 'text-rose-500';
      case 'cmd': return 'text-electric-violet';
      default: return 'text-slate-400';
    }
  };

  return (
    <div className="flex gap-3 font-mono text-[13px] leading-relaxed animate-in fade-in slide-in-from-left-2 duration-300">
      <span className="text-slate-700 select-none shrink-0">[{new Date().toLocaleTimeString('en-GB', { hour12: false })}]</span>
      <span className={cn("shrink-0 font-bold uppercase text-[10px] py-0.5", getColors())}>
        {type === 'cmd' ? '>' : type}:
      </span>
      <span className={cn("break-all", type === 'cmd' ? 'text-white' : 'text-slate-300')}>{text}</span>
    </div>
  );
};

const CoreVisualizer = ({ isScanning }: { isScanning: boolean }) => (
  <div className="relative w-full aspect-square max-w-[400px] mx-auto flex items-center justify-center">
    <div className="absolute inset-0 border border-cyber-lime/10 rounded-full animate-[spin_30s_linear_infinite]" />
    <div className="absolute inset-10 border border-white/5 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
    <div className="absolute inset-20 border-t-2 border-r-2 border-cyber-lime/40 rounded-full animate-[spin_10s_linear_infinite]" />
    
    <div className="relative z-10 flex flex-col items-center">
      <motion.div 
        animate={isScanning ? { scale: [1, 1.1, 1], rotate: 360 } : {}}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="w-32 h-32 rounded-3xl bg-obsidian border-2 border-cyber-lime/50 flex items-center justify-center shadow-[0_0_50px_rgba(204,255,0,0.15)] overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-cyber-lime/20 to-transparent pointer-events-none" />
        <Cpu className={cn("w-16 h-16 transition-colors duration-500", isScanning ? "text-cyber-lime" : "text-slate-700")} />
      </motion.div>
      <div className="mt-8 text-center">
        <h3 className="text-xs uppercase tracking-[0.4em] font-bold text-slate-500">Processing Engine</h3>
        <p className="mt-1 text-sm font-bold text-white tracking-wide">CORE-X9 RECON</p>
      </div>
    </div>

    {isScanning && (
      <AnimatePresence>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            className="absolute inset-0 border-2 border-cyber-lime/30 rounded-full"
          />
        ))}
      </AnimatePresence>
    )}
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [target, setTarget] = useState('192.168.1.0/24');
  const [isScanning, setIsScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<any[]>([]);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const addLog = (text: string, type: 'info' | 'success' | 'warn' | 'error' | 'cmd' = 'info') => {
    setLogs(prev => [...prev.slice(-100), { text, type, id: Math.random() }]);
  };

  const handleStartScan = async () => {
    if (isScanning) return;
    
    setIsScanning(true);
    setProgress(0);
    addLog(`Initiating spectrum analysis on ${target}...`, 'cmd');
    addLog('Loading Nmap NSE scripts...', 'info');
    
    const steps = [
      { p: 10, msg: 'Resolver: ARP scan broadcasting...' },
      { p: 25, msg: 'Host Discovery: 14 active nodes detected.', type: 'success' },
      { p: 45, msg: 'Port Scanner: Initializing SYN stealth scan...', type: 'info' },
      { p: 60, msg: 'Service Fingerprinting: Analyzing payload signatures...', type: 'info' },
      { p: 85, msg: 'Security Audit: Running vulnerability heuristics...', type: 'warn' },
      { p: 100, msg: 'Process finalized. Generating integrity report.', type: 'success' }
    ];

    for (const step of steps) {
      await new Promise(r => setTimeout(r, 800 + Math.random() * 1200));
      setProgress(step.p);
      addLog(step.msg, step.p === 100 ? 'success' : (step.type as any || 'info'));
    }

    setIsScanning(false);
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  return (
    <div id="zenith-root" className="relative flex h-screen w-full bg-void overflow-hidden select-none">
      <HexagonBackground />

      <aside id="sidebar-discovery" className="relative z-20 flex flex-col items-center py-8 w-20 border-r border-glass-border bg-obsidian/50 backdrop-blur-md">
        <div id="branding-engine" className="w-12 h-12 mb-12 flex items-center justify-center rounded-xl bg-white/5 border border-glass-border">
          <Crosshair className="w-6 h-6 text-cyber-lime" />
        </div>
        
        <nav className="flex flex-col gap-6">
          <SidebarItem icon={LayoutDashboard} label="Dashboard" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
          <SidebarItem icon={Globe} label="Topology" active={activeTab === 'topology'} onClick={() => setActiveTab('topology')} />
          <SidebarItem icon={TerminalIcon} label="Terminal" active={activeTab === 'terminal'} onClick={() => setActiveTab('terminal')} />
          <SidebarItem icon={ShieldCheck} label="Audit" active={activeTab === 'audit'} onClick={() => setActiveTab('audit')} />
          <SidebarItem icon={Database} label="Inventory" active={activeTab === 'inventory'} onClick={() => setActiveTab('inventory')} />
        </nav>

        <div className="mt-auto flex flex-col gap-6">
          <SidebarItem icon={Settings} label="Settings" onClick={() => {}} />
          <SidebarItem icon={Power} label="Detach" onClick={() => {}} />
        </div>
      </aside>

      <main id="command-center" className="relative flex-1 flex flex-col h-full overflow-hidden">
        <header id="recon-header" className="h-20 border-b border-glass-border bg-obsidian/20 backdrop-blur-md px-8 flex items-center justify-between z-10">
          <div className="flex items-center gap-6">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-cyber-lime transition-colors" />
              <input 
                id="target-vector-input"
                type="text" 
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                placeholder="TARGET VECTOR (E.G. 192.168.0.1)"
                className="w-80 bg-white/5 border border-glass-border rounded-xl py-3 pl-12 pr-4 text-sm font-mono tracking-wider focus:outline-none focus:border-cyber-lime/50 focus:ring-1 focus:ring-cyber-lime/20 transition-all placeholder:text-slate-600"
              />
            </div>
            <div className="h-10 w-px bg-glass-border" />
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-white/5 border border-glass-border rounded-lg text-[10px] font-bold tracking-widest uppercase hover:bg-white/10 transition-colors">Quick Scan</button>
              <button className="px-4 py-2 bg-white/5 border border-glass-border rounded-lg text-[10px] font-bold tracking-widest uppercase hover:bg-white/10 transition-colors">OS Detect</button>
              <button className="px-4 py-2 bg-white/5 border border-glass-border rounded-lg text-[10px] font-bold tracking-widest uppercase hover:bg-white/10 transition-colors">Script Audit</button>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Scanner Status</p>
              <div className="flex items-center gap-2 mt-0.5">
                <div className={cn("w-1.5 h-1.5 rounded-full", isScanning ? "bg-cyber-lime animate-pulse" : "bg-slate-700")} />
                <p className="text-xs font-bold text-white uppercase tracking-wider">{isScanning ? 'Synchronizing' : 'Docked'}</p>
              </div>
            </div>
            
            <button 
              id="ignition-core-button"
              onClick={handleStartScan}
              disabled={isScanning}
              className={cn(
                "h-12 px-8 rounded-xl font-bold uppercase tracking-widest text-sm flex items-center gap-3 transition-all duration-500",
                isScanning 
                  ? "bg-slate-800 text-slate-500 cursor-not-allowed border border-white/5" 
                  : "bg-cyber-lime text-void shadow-[0_0_30px_rgba(204,255,0,0.3)] hover:scale-105 active:scale-95 group"
              )}
            >
              {isScanning ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Analyzing
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4 fill-current group-hover:animate-bounce" />
                  Ignite Recon
                </>
              )}
            </button>
          </div>
        </header>

        <div className="flex-1 p-8 overflow-y-auto custom-scrollbar bg-gradient-to-b from-transparent to-void/50">
          <div className="max-w-7xl mx-auto space-y-8">
            
            <div id="metrics-grid-system" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <MetricCard icon={Wifi} label="Active Interfaces" value="ETH0, WLAN0" color="bg-blue-500/20 text-blue-400" />
              <MetricCard icon={Activity} label="Bandwidth Load" value="42.8 MB/s" color="bg-cyber-lime/20 text-cyber-lime" />
              <MetricCard icon={Server} label="Nodes Discovered" value="14 Online" color="bg-violet-500/20 text-violet-400" />
              <MetricCard icon={ShieldCheck} label="Risk Index" value="Low Utility" color="bg-amber-500/20 text-amber-400" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                
                <section id="visualizer-field" className="glass-panel p-10 flex flex-col items-center justify-center min-h-[500px] relative overflow-hidden group">
                  <div className="absolute top-6 left-6 flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyber-lime rounded-full" />
                    <span className="text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase">Kinetic Engine Visualizer</span>
                  </div>
                  
                  <CoreVisualizer isScanning={isScanning} />

                  <div className="mt-12 w-full max-w-lg">
                    <div className="flex justify-between items-end mb-3">
                      <div>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Temporal Progress</span>
                        <h4 className="text-xl font-bold text-white tabular-nums tracking-tight">{Math.round(progress)}%</h4>
                      </div>
                      <span className="text-[10px] font-mono text-cyber-lime glow-text">X-VECTOR-SYNC_V2</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ type: "spring", damping: 20 }}
                        className="h-full bg-gradient-to-r from-electric-violet to-cyber-lime shadow-[0_0_20px_rgba(204,255,0,0.4)]"
                      />
                    </div>
                  </div>
                </section>

                <section id="inventory-matrix" className="glass-panel overflow-hidden">
                  <div className="px-6 py-4 border-b border-glass-border flex justify-between items-center bg-white/5">
                    <h3 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 text-slate-300">
                      <LayoutDashboard className="w-4 h-4" />
                      Protocol Inventory
                    </h3>
                    <div className="flex gap-2">
                       <button className="p-2 hover:bg-white/5 rounded-lg transition-colors"><Maximize2 className="w-4 h-4 text-slate-500" /></button>
                       <button className="p-2 hover:bg-white/5 rounded-lg transition-colors"><MoreVertical className="w-4 h-4 text-slate-500" /></button>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-obsidian/30 border-b border-glass-border">
                          <th className="px-6 py-4 text-[10px] uppercase font-bold tracking-tighter text-slate-500">Service Vector</th>
                          <th className="px-6 py-4 text-[10px] uppercase font-bold tracking-tighter text-slate-500">Port ID</th>
                          <th className="px-6 py-4 text-[10px] uppercase font-bold tracking-tighter text-slate-500">Latency</th>
                          <th className="px-6 py-4 text-[10px] uppercase font-bold tracking-tighter text-slate-500">Confidence</th>
                          <th className="px-6 py-4 text-[10px] uppercase font-bold tracking-tighter text-slate-500">Security</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-glass-border/50">
                        {[
                          { service: 'OpenSSH 8.2p1', port: '22', latency: '12ms', conf: '94%', risk: 'Safe' },
                          { service: 'Nginx 1.18.0', port: '80', latency: '45ms', conf: '81%', risk: 'Audit Req' },
                          { service: 'PostgreSQL 12', port: '5432', latency: '22ms', conf: '99%', risk: 'Safe' },
                          { service: 'Redis Server 6.x', port: '6379', latency: '5ms', conf: '88%', risk: 'Hardened' }
                        ].map((row, i) => (
                          <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                            <td className="px-6 py-4 text-sm font-medium text-white group-hover:text-cyber-lime transition-colors">{row.service}</td>
                            <td className="px-6 py-4 text-sm font-mono text-slate-400">{row.port}</td>
                            <td className="px-6 py-4 text-sm font-mono text-slate-400">{row.latency}</td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-bold text-white">{row.conf}</span>
                                <div className="flex-1 h-1 bg-white/5 w-12 rounded-full overflow-hidden">
                                  <div className="h-full bg-electric-violet" style={{ width: row.conf }} />
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <span className={cn(
                                "px-2 py-0.5 rounded text-[10px] font-bold uppercase",
                                row.risk === 'Safe' ? "bg-emerald-500/10 text-emerald-400" :
                                row.risk === 'Hardened' ? "bg-blue-500/10 text-blue-400" :
                                "bg-amber-500/10 text-amber-400"
                              )}>
                                {row.risk}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              </div>

              <aside id="terminal-stream" className="glass-panel flex flex-col h-full bg-void/40 overflow-hidden min-h-[700px]">
                <div className="px-6 py-4 border-b border-glass-border flex items-center justify-between bg-obsidian">
                  <div className="flex items-center gap-2">
                    <TerminalIcon className="w-4 h-4 text-cyber-lime" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">Live Recon Stream</span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/20 border border-rose-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/50" />
                  </div>
                </div>
                
                <div className="flex-1 p-6 space-y-3 overflow-y-auto custom-scrollbar font-mono">
                  {logs.length === 0 && (
                    <div className="h-full flex items-center justify-center text-center px-8 opacity-20 filter grayscale">
                      <p className="text-xs tracking-tighter leading-relaxed">
                        WAITING FOR IGNITION SEQUENCE...<br/>
                        SYSTEM IDLE // 0x00000000
                      </p>
                    </div>
                  )}
                  {logs.map((log) => (
                    <TerminalLine key={log.id} text={log.text} type={log.type} />
                  ))}
                  <div ref={terminalEndRef} />
                </div>

                <div className="p-4 border-t border-glass-border bg-obsidian/30">
                  <div className="relative flex items-center">
                    <ChevronRight className="absolute left-3 w-4 h-4 text-cyber-lime" />
                    <input 
                      type="text" 
                      placeholder="Enter command..."
                      className="w-full bg-transparent py-2 pl-10 pr-4 text-xs font-mono text-white focus:outline-none placeholder:text-slate-600"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          const val = (e.target as HTMLInputElement).value;
                          if (val) {
                            addLog(val, 'cmd');
                            (e.target as HTMLInputElement).value = '';
                          }
                        }
                      }}
                    />
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>

        <footer id="system-status-anchor" className="h-10 border-t border-glass-border bg-obsidian px-6 flex items-center justify-between z-10">
          <div className="flex items-center gap-6 text-[10px] font-bold tracking-widest text-slate-500">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-lime" />
              <span>ENGINE READY</span>
            </div>
            <div className="flex items-center gap-2">
              <Wifi className="w-3 h-3" />
              <span>SCANNER VERSION: V4.9.2-ALPHA</span>
            </div>
          </div>
          <div className="flex items-center gap-6 text-[10px] font-mono text-slate-500">
            <span>UPTIME: 14:22:04</span>
            <span>MEM: 12.4 GB</span>
            <span className="text-cyber-lime font-bold">STABLE BRAVO-9</span>
          </div>
        </footer>
      </main>
    </div>
  );
}

