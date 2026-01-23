import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Code, Zap, Palette, Server, Database, Link, Shield, Layers, Radio, Rocket, Trophy } from 'lucide-react';
// Import character progression images
import phase1Image from './images/phase1.jpg';
import phase2Image from './images/phase2.jpg';
import phase3Image from './images/phase3.jpg';
import phase4Image from './images/phase4.jpg';
import phase5Image from './images/phase1.jpg';
import phase6Image from './images/phase1.jpg';
import phase7Image from './images/phase1.jpg';
import phase8Image from './images/phase1.jpg';
import phase9Image from './images/phase1.jpg';
import phase10Image from './images/phase1.jpg';
import phase11Image from './images/phase1.jpg';
import phase12Image from './images/phase1.jpg';
// Import library and wise man images
import libraryBackground from './images/library_background.png';
import wise1 from './images/wise1.jpg';
import wise2 from './images/wise2.jpg';
import wise3 from './images/wise3.jpg';
import wise4 from './images/wise4.jpg';
// Import roadmap and stage backgrounds
import worldMapBackground from './images/world_map.png';

// Import stage card backgrounds
import stage1Bg from './images/stage1.png';
import stage2Bg from './images/stage2.png';
import stage3Bg from './images/stage3.png';
import stage4Bg from './images/stage4.png';
import stage5Bg from './images/stage1.png';
import stage6Bg from './images/stage1.png';
import stage7Bg from './images/stage1.png';
import stage8Bg from './images/stage1.png';
import stage9Bg from './images/stage1.png';
import stage10Bg from './images/stage1.png';
import stage11Bg from './images/stage1.png';
import stage12Bg from './images/stage1.png';

// Import mission backgrounds - Stage 1 (3 missions)
import s1_m1 from './images/s1_m1.png';
import s1_m2 from './images/s1_m2.png';
import s1_m3 from './images/s1_m3.png';

// Stage 2 (3 missions)
import s2_m1 from './images/s2_m1.png';
import s2_m2 from './images/s2_m2.png';
import s2_m3 from './images/s2_m3.png';

// Stage 3 (4 missions)
import s3_m1 from './images/s3_m1.png';
import s3_m2 from './images/s3_m2.png';
import s3_m3 from './images/s3_m3.png';
import s3_m4 from './images/s3_m4.png';

// Stage 4 (3 missions)
import s4_m1 from './images/s4_m1.png';
import s4_m2 from './images/s4_m2.png';
import s4_m3 from './images/s4_m3.png';

// Stage 5 (3 missions)
import s5_m1 from './images/s5_m1.png';
import s5_m2 from './images/s5_m2.png';
import s5_m3 from './images/s5_m3.png';

// Stage 6 (3 missions)
import s6_m1 from './images/s6_m1.png';
import s6_m2 from './images/s6_m2.png';
import s6_m3 from './images/s6_m3.png';

// Stage 7 (2 missions)
import s7_m1 from './images/s7_m1.png';
import s7_m2 from './images/s7_m2.png';

// Stage 8 (3 missions)
import s8_m1 from './images/s1_m1.png';
import s8_m2 from './images/s1_m2.png';
import s8_m3 from './images/s1_m3.png';

// Stage 9 (2 missions)
import s9_m1 from './images/s1_m1.png';
import s9_m2 from './images/s1_m2.png';

// Stage 10 (2 missions)
import s10_m1 from './images/s1_m1.png';
import s10_m2 from './images/s1_m2.png';

// Stage 11 (1 mission)
import s11_m1 from './images/s1_m1.png';

// Stage 12 (4 missions)
import s12_m1 from './images/s1_m1.png';
import s12_m2 from './images/s1_m2.png';
import s12_m3 from './images/s1_m3.png';
import s12_m4 from './images/s3_m4.png';

const TabNavigation = ({ activeTab, setActiveTab, playSound }) => {
  const tabs = [
    { id: 'quest', label: 'QUEST LOG', icon: '📜', sound: 400 },
    { id: 'roadmap', label: 'ROADMAP', icon: '🗺️', sound: 450 },
    { id: 'loot', label: 'LOOT TABLE', icon: '🎁', sound: 500 },
    { id: 'achievements', label: 'ACHIEVEMENTS', icon: '🏆', sound: 575 },
    { id: 'wisdom', label: 'DAILY WISDOM', icon: '💬', sound: 625 },
    { id: 'endgame', label: 'ENDGAME', icon: '🔐', sound: 675 }
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b-4 border-purple-500">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex flex-wrap gap-2 justify-center">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => {
                playSound(tab.sound, 0.15, 'square', 0.2);
                setActiveTab(tab.id);
              }}
              className={`
                px-4 py-2 rounded-sm border-3 font-black pixel-text text-xs
                transition-all duration-300 transform hover:scale-105
                ${activeTab === tab.id 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white border-white shadow-lg scale-105' 
                  : 'bg-white/10 text-white/70 border-white/30 hover:bg-white/20 hover:text-white'
                }
              `}
              style={{ imageRendering: 'pixelated' }}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const QuestLogTab = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8 pt-24">
      <div className="max-w-4xl mx-auto">
        {/* Header with Pixel Art */}
        <div className="bg-black/60 backdrop-blur rounded-sm p-8 mb-8 border-8 border-purple-500/80 shadow-2xl">
          <div className="flex items-center gap-6 mb-6">
            <PixelArt type="sprout" className="w-24 h-24" />
            <div>
              <h1 className="text-4xl font-black text-white pixel-text mb-2">⚔️ QUEST LOG</h1>
              <p className="text-purple-300 pixel-text text-xs">YOUR JOURNEY BEGINS HERE</p>
            </div>
          </div>
          
          {/* Quest Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-white/10 p-4 rounded-sm border-3 border-purple-400">
              <p className="text-purple-300 pixel-text text-[10px] mb-1">QUEST:</p>
              <p className="text-white pixel-text text-xs">Web Dev → Cybersecurity</p>
            </div>
            <div className="bg-white/10 p-4 rounded-sm border-3 border-purple-400">
              <p className="text-purple-300 pixel-text text-[10px] mb-1">START DATE:</p>
              <p className="text-white pixel-text text-xs">February 2026</p>
            </div>
            <div className="bg-white/10 p-4 rounded-sm border-3 border-purple-400">
              <p className="text-purple-300 pixel-text text-[10px] mb-1">COMMITMENT:</p>
              <p className="text-white pixel-text text-xs">5-10 hrs/week</p>
            </div>
            <div className="bg-white/10 p-4 rounded-sm border-3 border-purple-400">
              <p className="text-purple-300 pixel-text text-[10px] mb-1">TIMELINE:</p>
              <p className="text-white pixel-text text-xs">6-9 months</p>
            </div>
          </div>
        </div>

        {/* How This Works */}
        <div className="bg-black/60 backdrop-blur rounded-sm p-6 mb-6 border-4 border-cyan-500/80">
          <h2 className="text-2xl font-black text-cyan-300 pixel-text mb-4">🎮 HOW THIS WORKS</h2>
          
          <div className="space-y-3 text-white pixel-text text-[10px] leading-relaxed">
            <div className="bg-cyan-900/30 p-3 rounded-sm border-2 border-cyan-400/50">
              <strong className="text-cyan-300">YOUR FILES:</strong>
              <div className="mt-2 space-y-1 ml-2">
                <div>📜 QUEST LOG ← You are here</div>
                <div>🗺️ ROADMAP ← Your daily guide (Phases 1-12)</div>
                <div>🎁 LOOT TABLE ← All resource links</div>
                <div>🏆 ACHIEVEMENTS ← Track your progress</div>
                <div>🔐 ENDGAME ← After Phase 12</div>
                <div>💬 DAILY WISDOM ← Random motivation</div>
              </div>
            </div>

            <div className="bg-cyan-900/30 p-3 rounded-sm border-2 border-cyan-400/50">
              <strong className="text-cyan-300">WEEKLY FLOW:</strong>
              <div className="mt-2 space-y-1 ml-2">
                <div>1. Monday: Check this week's tasks in ROADMAP</div>
                <div>2. Any day: Do 1-2 tasks (1 hour each)</div>
                <div>3. End of week: Check off completed tasks</div>
                <div>4. Every 2 weeks: Hit checkpoint, decide if ready</div>
              </div>
            </div>
          </div>
        </div>

        {/* Git Strategy */}
        <div className="bg-black/60 backdrop-blur rounded-sm p-6 mb-6 border-4 border-green-500/80">
          <h2 className="text-2xl font-black text-green-300 pixel-text mb-4">📁 GIT STRATEGY</h2>
          
          <div className="space-y-3">
            <div className="bg-green-900/30 p-3 rounded-sm border-2 border-green-400/50">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🗂️</span>
                <strong className="text-green-300 pixel-text text-xs">NEW REPO</strong>
              </div>
              <p className="text-white pixel-text text-[10px]">
                Full project → Create separate GitHub repo
              </p>
            </div>

            <div className="bg-green-900/30 p-3 rounded-sm border-2 border-green-400/50">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">📝</span>
                <strong className="text-green-300 pixel-text text-xs">PRACTICE</strong>
              </div>
              <p className="text-white pixel-text text-[10px]">
                Small exercise → Optional, keep local or in one practice repo
              </p>
            </div>

            <div className="bg-yellow-900/30 p-3 rounded-sm border-2 border-yellow-400/50 mt-3">
              <p className="text-yellow-200 pixel-text text-[10px]">
                <strong>RULE:</strong> If ROADMAP says "Project" = 🗂️ separate repo
              </p>
            </div>
          </div>
        </div>

        {/* Task Times */}
        <div className="bg-black/60 backdrop-blur rounded-sm p-6 mb-6 border-4 border-orange-500/80">
          <h2 className="text-2xl font-black text-orange-300 pixel-text mb-4">⏰ TASK TIMES</h2>
          
          <div className="space-y-2">
            <div className="bg-orange-900/30 p-2 rounded-sm border-2 border-orange-400/50">
              <p className="text-white pixel-text text-[10px]">
                <strong className="text-orange-300">(1 hour)</strong> = Quick task
              </p>
            </div>
            <div className="bg-orange-900/30 p-2 rounded-sm border-2 border-orange-400/50">
              <p className="text-white pixel-text text-[10px]">
                <strong className="text-orange-300">(2-3 hours)</strong> = Medium, maybe split into 2 sessions
              </p>
            </div>
            <div className="bg-orange-900/30 p-2 rounded-sm border-2 border-orange-400/50">
              <p className="text-white pixel-text text-[10px]">
                <strong className="text-orange-300">(3+ hours)</strong> = Big task, spread across days
              </p>
            </div>
          </div>
        </div>

        {/* Success */}
        <div className="bg-black/60 backdrop-blur rounded-sm p-6 mb-6 border-4 border-pink-500/80">
          <h2 className="text-2xl font-black text-pink-300 pixel-text mb-4">✅ SUCCESS = SHOWING UP</h2>
          
          <div className="space-y-3">
            <div className="bg-pink-900/30 p-3 rounded-sm border-2 border-pink-400/50">
              <p className="text-pink-200 pixel-text text-[10px] mb-2">YOU'RE WINNING IF:</p>
              <div className="space-y-1 ml-2 text-white pixel-text text-[9px]">
                <div>✓ You code most weeks (even 1 hour)</div>
                <div>✓ GitHub shows activity</div>
                <div>✓ Projects get easier over time</div>
                <div>✓ You're having fun</div>
              </div>
            </div>

            <div className="bg-red-900/30 p-3 rounded-sm border-2 border-red-400/50">
              <p className="text-red-200 pixel-text text-[10px] mb-2">NOT MEASURED BY:</p>
              <div className="space-y-1 ml-2 text-white pixel-text text-[9px]">
                <div>✗ Speed</div>
                <div>✗ Perfection</div>
                <div>✗ Comparing to others</div>
              </div>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-black/60 backdrop-blur rounded-sm p-6 border-4 border-red-500/80">
          <h2 className="text-2xl font-black text-red-300 pixel-text mb-4">🆘 STUCK? BEHIND? OVERWHELMED?</h2>
          
          <div className="space-y-2 text-white pixel-text text-[10px]">
            <div className="bg-red-900/30 p-2 rounded-sm border-2 border-red-400/50">
              <strong className="text-red-300">Stuck:</strong> Google the error, rewatch video, ask Reddit/Discord
            </div>
            <div className="bg-red-900/30 p-2 rounded-sm border-2 border-red-400/50">
              <strong className="text-red-300">Behind:</strong> No deadlines - just keep going
            </div>
            <div className="bg-red-900/30 p-2 rounded-sm border-2 border-red-400/50">
              <strong className="text-red-300">Overwhelmed:</strong> Do just ONE task today
            </div>
          </div>
        </div>

        {/* Next Step CTA */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 p-1 rounded-sm inline-block">
            <div className="bg-black px-8 py-4 rounded-sm">
              <p className="text-white pixel-text text-sm animate-pulse">
                🚀 OPEN ROADMAP → PHASE 1 → WEEK 1 → START! 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LootTableTab = () => {
  const resources = [
    {
      category: "🎥 BRO CODE",
      color: "from-red-600 to-orange-600",
      items: [
        { name: "HTML & CSS", url: "https://youtu.be/HGTJBPNC-Gw" },
        { name: "JavaScript (12hr)", url: "https://youtu.be/lfmg-EJ8gm4" },
        { name: "React", url: "https://youtu.be/CgkZ7MvWUAA" },
        { name: "Node.js", url: "https://youtu.be/f2EqECiTBL8" },
        { name: "Git", url: "https://youtu.be/tRZGeaHPoaw" }
      ]
    },
    {
      category: "📖 DOCUMENTATION",
      color: "from-blue-600 to-cyan-600",
      items: [
        { name: "CSS Flexbox", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" },
        { name: "CSS Grid", url: "https://css-tricks.com/snippets/css/complete-guide-grid/" },
        { name: "JavaScript.info", url: "https://javascript.info/" },
        { name: "React Docs", url: "https://react.dev/" },
        { name: "Tailwind Docs", url: "https://tailwindcss.com/docs" },
        { name: "Node.js Docs", url: "https://nodejs.org/docs/latest/api/" },
        { name: "Express Docs", url: "https://expressjs.com/" },
        { name: "Prisma Docs", url: "https://www.prisma.io/docs" },
        { name: "Socket.io Docs", url: "https://socket.io/docs/v4/" }
      ]
    },
    {
      category: "🛠️ TOOLS",
      color: "from-purple-600 to-pink-600",
      items: [
        { name: "VS Code", url: "https://code.visualstudio.com/" },
        { name: "Git", url: "https://git-scm.com/downloads" },
        { name: "GitHub", url: "https://github.com/" },
        { name: "Postman", url: "https://www.postman.com/downloads/" },
        { name: "MongoDB Atlas", url: "https://www.mongodb.com/cloud/atlas/register" }
      ]
    },
    {
      category: "🚀 DEPLOYMENT",
      color: "from-green-600 to-emerald-600",
      items: [
        { name: "Vercel", url: "https://vercel.com/" },
        { name: "Netlify", url: "https://www.netlify.com/" },
        { name: "Render", url: "https://render.com/" },
        { name: "Railway", url: "https://railway.app/" }
      ]
    },
    {
      category: "🔐 SECURITY (Phase 13+)",
      color: "from-red-600 to-pink-600",
      items: [
        { name: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/" },
        { name: "PortSwigger Academy", url: "https://portswigger.net/web-security" },
        { name: "TryHackMe", url: "https://tryhackme.com/" },
        { name: "HackTheBox", url: "https://www.hackthebox.com/" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 p-8 pt-24">
      <div className="max-w-6xl mx-auto">
        <div className="bg-black/60 backdrop-blur rounded-sm p-8 mb-8 border-8 border-yellow-500/80 shadow-2xl text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <PixelArt type="diamond" className="w-20 h-20" />
            <h1 className="text-5xl font-black text-yellow-300 pixel-text">🎁 LOOT TABLE</h1>
            <PixelArt type="diamond" className="w-20 h-20" />
          </div>
          <p className="text-yellow-200 pixel-text text-xs">ALL YOUR RESOURCE LINKS - BOOKMARK THIS PAGE</p>
        </div>

        <div className="space-y-6">
          {resources.map((category, idx) => (
            <div 
              key={idx}
              className="bg-black/60 backdrop-blur rounded-sm p-6 border-4 border-white/50 transform hover:scale-102 transition-all duration-300"
              style={{
                animation: `slideIn 0.5s ease-out ${idx * 0.1}s forwards`,
                opacity: 0
              }}
            >
              <h2 className={`text-xl font-black pixel-text mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.category}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {category.items.map((item, itemIdx) => (
                  <a
                    key={itemIdx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 p-3 rounded-sm border-2 border-white/30 hover:border-white/60 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
                  >
                    <p className="text-white pixel-text text-[10px] group-hover:text-yellow-300 transition-colors">
                      → {item.name}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gradient-to-r from-purple-600 to-pink-600 p-1 rounded-sm">
          <div className="bg-black px-6 py-4 rounded-sm text-center">
            <p className="text-white pixel-text text-xs">
              💡 TIP: CTRL+F TO SEARCH THIS PAGE QUICKLY
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const DailyWisdomTab = () => {
  const [currentQuote, setCurrentQuote] = useState(null);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentWiseMan, setCurrentWiseMan] = useState(wise1);
  const audioContextRef = useRef(null);
  const typingIntervalRef = useRef(null);

  const wiseManImages = [wise1, wise2, wise3, wise4];

  const quotes = [
    { text: "The secret to getting ahead is getting started.", author: "Mark Twain", category: "Starting" },
    { text: "Every expert was once a beginner.", author: "Anonymous", category: "Starting" },
    { text: "First, solve the problem. Then, write the code.", author: "John Johnson", category: "Coding" },
    { text: "Code never lies, comments sometimes do.", author: "Ron Jeffries", category: "Coding" },
    { text: "The only way to learn a new programming language is by writing programs in it.", author: "Dennis Ritchie", category: "Learning" },
    { text: "It's not that I'm so smart, it's just that I stay with problems longer.", author: "Albert Einstein", category: "Persistence" },
    { text: "Debugging is twice as hard as writing the code in the first place.", author: "Brian Kernighan", category: "Debugging" },
    { text: "Progress, not perfection.", author: "Anonymous", category: "Progress" },
    { text: "The expert in anything was once a beginner.", author: "Helen Hayes", category: "Motivation" },
    { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle", category: "Consistency" },
    { text: "Failure is simply the opportunity to begin again, this time more intelligently.", author: "Henry Ford", category: "Failure" },
    { text: "Focus on being productive instead of busy.", author: "Tim Ferriss", category: "Focus" },
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker", category: "Building" },
    { text: "Whether you think you can, or you think you can't – you're right.", author: "Henry Ford", category: "Growth" },
    { text: "The journey is the reward.", author: "Steve Jobs", category: "Journey" },
    { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds", category: "Coding" },
    { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler", category: "Coding" },
    { text: "Make it work, make it right, make it fast.", author: "Kent Beck", category: "Problem Solving" },
    { text: "Success is the sum of small efforts repeated day in and day out.", author: "Robert Collier", category: "Consistency" },
    { text: "You've got this.", author: "Everyone who believes in you", category: "Motivation" }
  ];

  useEffect(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
    };
  }, []);

  const playDialogueSound = () => {
    if (!audioContextRef.current) return;
    
    const oscillator = audioContextRef.current.createOscillator();
    const gainNode = audioContextRef.current.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContextRef.current.destination);
    
    // Randomize frequency for varied "talking" sound
    oscillator.frequency.value = 200 + Math.random() * 100;
    oscillator.type = 'square';
    
    gainNode.gain.value = 0.08;
    
    oscillator.start();
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContextRef.current.currentTime + 0.05);
    oscillator.stop(audioContextRef.current.currentTime + 0.05);
  };

  const typeWriter = (text, author) => {
    setIsTyping(true);
    setDisplayedText('');
    let index = 0;
    const fullText = `"${text}"\n\n- ${author}`;
    
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
    }
    
    typingIntervalRef.current = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.substring(0, index + 1));
        
        // Play sound every 2 characters (not on spaces)
        if (index % 2 === 0 && fullText[index] !== ' ') {
          playDialogueSound();
        }
        
        index++;
      } else {
        clearInterval(typingIntervalRef.current);
        setIsTyping(false);
      }
    }, 30); // Speed of typing (30ms per character)
  };

  const generateNewQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const randomWiseMan = wiseManImages[Math.floor(Math.random() * wiseManImages.length)];
    
    setCurrentQuote(randomQuote);
    setCurrentWiseMan(randomWiseMan);
    typeWriter(randomQuote.text, randomQuote.author);
  };

  useEffect(() => {
    generateNewQuote();
  }, []);

  return (
    <div 
      className="min-h-screen p-8 pt-24 relative overflow-hidden"
      style={{
        backgroundImage: `url(${libraryBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Floating candle lights effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-orange-400 rounded-full opacity-60 blur-sm"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + Math.random() * 60}%`,
              animation: `flicker ${1 + Math.random()}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-900/80 via-yellow-900/80 to-amber-900/80 backdrop-blur-sm rounded-sm p-6 mb-8 border-8 border-yellow-700/80 shadow-2xl text-center">
          <h1 className="text-4xl font-black text-yellow-200 pixel-text mb-2">
            📜 THE WISE ONE SPEAKS
          </h1>
          <p className="text-yellow-300/90 pixel-text text-xs">Seek wisdom from the ancient keeper of knowledge</p>
        </div>

        {/* Quote Display Box */}
        <div className="bg-gradient-to-br from-amber-950/90 via-stone-900/90 to-amber-950/90 backdrop-blur-md rounded-sm p-8 border-8 border-amber-700/90 shadow-2xl relative min-h-[400px]">
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-yellow-500"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-yellow-500"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-yellow-500"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-yellow-500"></div>

          <div className="flex items-start gap-6">
            {/* Quote Text Area */}
            <div className="flex-1 relative">
              {currentQuote && (
                <>
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-amber-800/50 border-2 border-amber-600 rounded-sm pixel-text text-[9px] text-amber-200">
                      {currentQuote.category.toUpperCase()}
                    </span>
                  </div>
                  
                  {/* Quote text with typewriter effect */}
                  <div className="bg-stone-950/60 border-4 border-amber-800/60 rounded-sm p-6 min-h-[250px] relative">
                    <pre className="text-amber-100 pixel-text text-xs leading-relaxed whitespace-pre-wrap font-mono">
                      {displayedText}
                      {isTyping && <span className="animate-pulse">▮</span>}
                    </pre>
                  </div>
                </>
              )}
            </div>

            {/* Wise Man Character - On the right */}
            <div className="flex-shrink-0">
              <div className="relative">
                <img 
                  src={currentWiseMan}
                  alt="Wise One"
                  className="w-48 h-48 object-cover rounded-lg border-6 border-amber-700/80 shadow-2xl"
                  style={{ 
                    imageRendering: 'pixelated',
                    filter: 'drop-shadow(0 0 20px rgba(251, 191, 36, 0.4))'
                  }}
                />
                {/* Glowing aura effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 to-transparent rounded-lg animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* New Quote Button */}
        <div className="mt-8 text-center">
          <button
            onClick={generateNewQuote}
            disabled={isTyping}
            className={`
              px-8 py-4 bg-gradient-to-r from-amber-700 to-yellow-600 
              hover:from-amber-600 hover:to-yellow-500 
              text-white font-black rounded-sm border-4 border-amber-900 
              pixel-text text-sm transform hover:scale-105 transition-all duration-300 
              shadow-lg hover:shadow-2xl
              ${isTyping ? 'opacity-50 cursor-not-allowed' : ''}
            `}
          >
            {isTyping ? '📖 THE WISE ONE IS SPEAKING...' : '🔮 SEEK NEW WISDOM'}
          </button>
        </div>

        {/* Quote Counter */}
        <div className="mt-8 text-center">
          <div className="inline-block bg-stone-900/60 px-6 py-3 rounded-sm border-2 border-amber-700/50 backdrop-blur-sm">
            <p className="text-amber-300 pixel-text text-[10px]">
              📚 {quotes.length} WISDOMS IN THE ANCIENT LIBRARY
            </p>
          </div>
        </div>
      </div>

      {/* Additional CSS for candle flicker animation */}
      <style jsx>{`
        @keyframes flicker {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
};

const PixelArt = ({ type, className = "" }) => {
  const arts = {
    sprout: (
      <svg viewBox="0 0 64 64" className={className}>
        <rect x="28" y="40" width="8" height="16" fill="#8B4513"/>
        <rect x="20" y="32" width="8" height="8" fill="#228B22"/>
        <rect x="28" y="24" width="8" height="16" fill="#32CD32"/>
        <rect x="36" y="28" width="8" height="12" fill="#228B22"/>
        <rect x="24" y="20" width="4" height="4" fill="#90EE90"/>
        <rect x="36" y="24" width="4" height="4" fill="#90EE90"/>
      </svg>
    ),
    lightning: (
      <svg viewBox="0 0 64 64" className={className}>
        <rect x="28" y="8" width="8" height="8" fill="#FFD700"/>
        <rect x="24" y="16" width="8" height="8" fill="#FFA500"/>
        <rect x="28" y="24" width="8" height="8" fill="#FFD700"/>
        <rect x="20" y="32" width="16" height="8" fill="#FFA500"/>
        <rect x="28" y="40" width="8" height="8" fill="#FF8C00"/>
        <rect x="32" y="48" width="8" height="8" fill="#FF6347"/>
      </svg>
    ),
    diamond: (
      <svg viewBox="0 0 64 64" className={className}>
        <rect x="28" y="12" width="8" height="4" fill="#00CED1"/>
        <rect x="24" y="16" width="16" height="4" fill="#48D1CC"/>
        <rect x="20" y="20" width="24" height="8" fill="#40E0D0"/>
        <rect x="24" y="28" width="16" height="8" fill="#00CED1"/>
        <rect x="28" y="36" width="8" height="8" fill="#008B8B"/>
      </svg>
    ),
    palette: (
      <svg viewBox="0 0 64 64" className={className}>
        <ellipse cx="32" cy="32" rx="20" ry="20" fill="#DB7093"/>
        <circle cx="24" cy="24" r="4" fill="#FF69B4"/>
        <circle cx="40" cy="24" r="4" fill="#FFB6C1"/>
        <circle cx="32" cy="36" r="4" fill="#FF1493"/>
        <rect x="36" y="40" width="12" height="8" fill="#C71585"/>
      </svg>
    ),
    terminal: (
      <svg viewBox="0 0 64 64" className={className}>
        <rect x="12" y="12" width="40" height="32" fill="#1a0033" stroke="#6a0dad" strokeWidth="2"/>
        <rect x="16" y="20" width="8" height="4" fill="#9370DB"/>
        <rect x="26" y="20" width="12" height="4" fill="#9370DB"/>
        <rect x="16" y="28" width="16" height="4" fill="#8A2BE2"/>
        <rect x="16" y="36" width="4" height="4" fill="#7B68EE"/>
      </svg>
    ),
    database: (
      <svg viewBox="0 0 64 64" className={className}>
        <ellipse cx="32" cy="20" rx="16" ry="8" fill="#1E3A8A"/>
        <rect x="16" y="20" width="32" height="20" fill="#1E40AF"/>
        <ellipse cx="32" cy="40" rx="16" ry="8" fill="#2563EB"/>
        <ellipse cx="32" cy="28" rx="16" ry="6" fill="#3B82F6"/>
      </svg>
    ),
    chain: (
      <svg viewBox="0 0 64 64" className={className}>
        <rect x="16" y="20" width="12" height="24" fill="#0891B2" rx="6"/>
        <rect x="36" y="20" width="12" height="24" fill="#06B6D4" rx="6"/>
        <rect x="24" y="28" width="16" height="8" fill="#14B8A6"/>
      </svg>
    ),
    shield: (
      <svg viewBox="0 0 64 64" className={className}>
        <path d="M32 8 L48 16 L48 32 Q48 48 32 56 Q16 48 16 32 L16 16 Z" fill="#B91C1C" stroke="#7F1D1D" strokeWidth="2"/>
        <path d="M32 16 L40 22 L40 32 Q40 42 32 48 Q24 42 24 32 L24 22 Z" fill="#DC2626"/>
        <rect x="30" y="28" width="4" height="12" fill="#FCA5A5"/>
        <rect x="26" y="32" width="12" height="4" fill="#FCA5A5"/>
      </svg>
    ),
    layers: (
      <svg viewBox="0 0 64 64" className={className}>
        <path d="M16 24 L32 16 L48 24 L32 32 Z" fill="#334155"/>
        <path d="M16 32 L32 24 L48 32 L32 40 Z" fill="#475569"/>
        <path d="M16 40 L32 32 L48 40 L32 48 Z" fill="#64748B"/>
      </svg>
    ),
    signal: (
      <svg viewBox="0 0 64 64" className={className}>
        <rect x="28" y="48" width="8" height="4" fill="#4338CA"/>
        <circle cx="32" cy="40" r="6" fill="#4F46E5" opacity="0.6"/>
        <circle cx="32" cy="32" r="10" fill="#6366F1" opacity="0.4"/>
        <circle cx="32" cy="24" r="14" fill="#818CF8" opacity="0.2"/>
      </svg>
    ),
    rocket: (
      <svg viewBox="0 0 64 64" className={className}>
        <rect x="28" y="16" width="8" height="24" fill="#4B5563"/>
        <polygon points="32,8 28,16 36,16" fill="#6B7280"/>
        <rect x="20" y="32" width="8" height="12" fill="#374151"/>
        <rect x="36" y="32" width="8" height="12" fill="#374151"/>
        <rect x="24" y="40" width="4" height="8" fill="#EF4444"/>
        <rect x="36" y="40" width="4" height="8" fill="#EF4444"/>
        <rect x="28" y="44" width="8" height="8" fill="#F59E0B"/>
      </svg>
    ),
    skull: (
      <svg viewBox="0 0 64 64" className={className}>
        <rect x="20" y="16" width="24" height="24" fill="#7F1D1D" rx="4"/>
        <rect x="24" y="24" width="6" height="8" fill="#1F2937"/>
        <rect x="34" y="24" width="6" height="8" fill="#1F2937"/>
        <rect x="28" y="36" width="8" height="4" fill="#1F2937"/>
        <rect x="24" y="44" width="4" height="8" fill="#991B1B"/>
        <rect x="30" y="44" width="4" height="8" fill="#991B1B"/>
        <rect x="36" y="44" width="4" height="8" fill="#991B1B"/>
      </svg>
    )
  };
  
  return arts[type] || null;
};

const AnimatedStageTitle = ({ title, onComplete }) => {
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [isAnimating, setIsAnimating] = useState(true);
  const audioContextRef = useRef(null);

  useEffect(() => {
    audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    
    let index = 0;
    const interval = setInterval(() => {
      if (index < title.length) {
        setDisplayedTitle(title.substring(0, index + 1));
        
        // Play sound effect for each character
        if (audioContextRef.current) {
          const oscillator = audioContextRef.current.createOscillator();
          const gainNode = audioContextRef.current.createGain();
          
          oscillator.connect(gainNode);
          gainNode.connect(audioContextRef.current.destination);
          
          // Higher pitched, more "digital" sound
          oscillator.frequency.value = 600 + (index * 50);
          oscillator.type = 'square';
          
          gainNode.gain.value = 0.1;
          
          oscillator.start();
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioContextRef.current.currentTime + 0.08);
          oscillator.stop(audioContextRef.current.currentTime + 0.08);
        }
        
        index++;
      } else {
        clearInterval(interval);
        setIsAnimating(false);
        if (onComplete) onComplete();
      }
    }, 60); // 60ms per character

    return () => {
      clearInterval(interval);
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, [title]);

  return (
    <h1 className="text-5xl font-black mb-3 text-white pixel-text drop-shadow-lg uppercase tracking-wider">
      {displayedTitle}
      {isAnimating && <span className="animate-pulse">▮</span>}
    </h1>
  );
};

const AudioManager = () => {
  const audioContextRef = useRef(null);
  
  useEffect(() => {
    audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    return () => audioContextRef.current?.close();
  }, []);

  const playSound = (frequency, duration, type = 'sine', volume = 0.3) => {
    if (!audioContextRef.current) return;
    
    const oscillator = audioContextRef.current.createOscillator();
    const gainNode = audioContextRef.current.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContextRef.current.destination);
    
    oscillator.type = type;
    oscillator.frequency.value = frequency;
    gainNode.gain.value = volume;
    
    oscillator.start();
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContextRef.current.currentTime + duration);
    oscillator.stop(audioContextRef.current.currentTime + duration);
  };

  return { playSound };
};

const AchievementsTab = ({ completedTasks, stages }) => {
  // Calculate total tasks and completed
  const totalTasks = stages.reduce((sum, stage) => {
    return sum + stage.missions.reduce((mSum, mission) => mSum + mission.tasks.length, 0);
  }, 0);
  
  const completedCount = Object.keys(completedTasks).filter(key => completedTasks[key]).length;
  const progressPercent = Math.round((completedCount / totalTasks) * 100);

  const projects = [
    { phase: 1, name: "Landing Page", emoji: "🍃", stage: "HTML/CSS" },
    { phase: 1, name: "Portfolio Website ⭐", emoji: "🌳", stage: "HTML/CSS" },
    { phase: 2, name: "Todo List App", emoji: "📝", stage: "JavaScript" },
    { phase: 2, name: "Calculator", emoji: "🔢", stage: "JavaScript" },
    { phase: 2, name: "Weather App", emoji: "🌤️", stage: "JavaScript" },
    { phase: 3, name: "Movie Search App", emoji: "🎬", stage: "React" },
    { phase: 4, name: "E-commerce Product Page", emoji: "🛍️", stage: "React + Tailwind" },
    { phase: 4, name: "Dashboard/Admin Panel", emoji: "📊", stage: "React + Tailwind" },
    { phase: 5, name: "CRUD API", emoji: "📡", stage: "Node.js" },
    { phase: 6, name: "Blog API", emoji: "📝", stage: "PostgreSQL" },
    { phase: 7, name: "Task Management API", emoji: "✅", stage: "Prisma" },
    { phase: 8, name: "Complete Auth System", emoji: "🔐", stage: "Auth" },
    { phase: 9, name: "Social Media/E-commerce App ⭐⭐", emoji: "🌐", stage: "Full-Stack" },
    { phase: 10, name: "Chat App/Whiteboard ⭐⭐", emoji: "💬", stage: "Real-Time" },
    { phase: 12, name: "Capstone Project ⭐⭐⭐", emoji: "👑", stage: "Final Boss" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-900 p-8 pt-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-black/60 backdrop-blur rounded-sm p-8 mb-8 border-8 border-yellow-500/80 shadow-2xl text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <PixelArt type="skull" className="w-20 h-20" />
            <h1 className="text-5xl font-black text-yellow-300 pixel-text">🏆 ACHIEVEMENTS</h1>
            <PixelArt type="skull" className="w-20 h-20" />
          </div>
          <p className="text-yellow-200 pixel-text text-xs">TRACK YOUR COMPLETED PROJECTS</p>
        </div>

        {/* Progress Overview */}
        <div className="bg-black/60 backdrop-blur rounded-sm p-6 mb-8 border-4 border-yellow-500/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-yellow-900/30 p-4 rounded-sm border-2 border-yellow-400/50 text-center">
              <p className="text-yellow-300 pixel-text text-[10px] mb-1">TOTAL PROJECTS</p>
              <p className="text-white pixel-text text-2xl">{projects.length}</p>
            </div>
            <div className="bg-green-900/30 p-4 rounded-sm border-2 border-green-400/50 text-center">
              <p className="text-green-300 pixel-text text-[10px] mb-1">COMPLETED</p>
              <p className="text-white pixel-text text-2xl">{completedCount}</p>
            </div>
            <div className="bg-blue-900/30 p-4 rounded-sm border-2 border-blue-400/50 text-center">
              <p className="text-blue-300 pixel-text text-[10px] mb-1">TOTAL TASKS</p>
              <p className="text-white pixel-text text-2xl">{totalTasks}</p>
            </div>
            <div className="bg-purple-900/30 p-4 rounded-sm border-2 border-purple-400/50 text-center">
              <p className="text-purple-300 pixel-text text-[10px] mb-1">PROGRESS</p>
              <p className="text-white pixel-text text-2xl">{progressPercent}%</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-black/40 rounded-sm p-2 border-2 border-white/30">
            <div className="h-8 bg-gray-800 rounded-sm border-2 border-gray-600 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-500 via-yellow-500 to-orange-500 transition-all duration-1000 flex items-center justify-center"
                style={{ width: `${progressPercent}%` }}
              >
                {progressPercent > 10 && (
                  <span className="text-white pixel-text text-xs font-black">{progressPercent}%</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, idx) => {
            const isCompleted = false; // You can enhance this later
            
            return (
              <div
                key={idx}
                className={`
                  bg-black/60 backdrop-blur rounded-sm p-4 border-4 transition-all duration-300
                  ${isCompleted 
                    ? 'border-green-500/80 shadow-lg shadow-green-500/50' 
                    : 'border-white/30 hover:border-white/60'
                  }
                  transform hover:scale-105
                `}
                style={{
                  animation: `slideIn 0.5s ease-out ${idx * 0.05}s forwards`,
                  opacity: 0
                }}
              >
                <div className="flex items-start gap-3">
                  <div className={`
                    w-12 h-12 rounded-sm border-3 flex items-center justify-center text-2xl flex-shrink-0
                    ${isCompleted ? 'bg-green-600 border-green-400' : 'bg-gray-700 border-gray-500'}
                  `}>
                    {project.emoji}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="text-white pixel-text text-[10px] font-black mb-1">
                          {project.name}
                        </p>
                        <p className="text-gray-400 pixel-text text-[8px]">
                          Phase {project.phase} • {project.stage}
                        </p>
                      </div>
                      
                      {isCompleted && (
                        <div className="w-6 h-6 bg-yellow-400 rounded-sm border-2 border-yellow-600 flex items-center justify-center">
                          <span className="text-xs">✓</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Placeholder for links */}
                    <div className="space-y-1">
                      <div className="bg-white/5 px-2 py-1 rounded text-[8px] pixel-text text-gray-500">
                        GitHub: [add link]
                      </div>
                      <div className="bg-white/5 px-2 py-1 rounded text-[8px] pixel-text text-gray-500">
                        Live: [add link]
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Milestones */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-black/60 backdrop-blur rounded-sm p-6 border-4 border-green-500/80">
            <h3 className="text-green-300 pixel-text text-sm mb-3">🎯 MILESTONES</h3>
            <div className="space-y-2 text-[10px] pixel-text">
              <div className="flex items-center gap-2">
                <span className="text-gray-500">□</span>
                <span className="text-white">Frontend Master - Complete projects 1-8</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">□</span>
                <span className="text-white">Backend Master - Complete projects 9-12</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">□</span>
                <span className="text-white">Full-Stack Hero - Complete projects 13-14</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">□</span>
                <span className="text-white">Ready for Jobs - All 15 complete!</span>
              </div>
            </div>
          </div>

          <div className="bg-black/60 backdrop-blur rounded-sm p-6 border-4 border-purple-500/80">
            <h3 className="text-purple-300 pixel-text text-sm mb-3">💼 RESUME HIGHLIGHT</h3>
            <div className="space-y-2 text-[10px] pixel-text text-white">
              <div className="bg-purple-900/30 p-2 rounded border-2 border-purple-400/50">
                1. [Capstone Project] ⭐⭐⭐
              </div>
              <div className="bg-purple-900/30 p-2 rounded border-2 border-purple-400/50">
                2. [Full-Stack App] ⭐⭐
              </div>
              <div className="bg-purple-900/30 p-2 rounded border-2 border-purple-400/50">
                3. [Real-Time App] ⭐⭐
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EndgameTab = () => {
  const paths = [
    {
      name: "Offensive Security (Pentesting)",
      emoji: "⚔️",
      color: "from-red-600 to-orange-600",
      timeline: "8-12 months",
      bestFor: "Breaking things, problem-solving",
      jobs: "Pentester, Red Team, Bug Bounty",
      certs: "eJPT ($250) → OSCP ($1,500)"
    },
    {
      name: "Defensive Security (Blue Team)",
      emoji: "🛡️",
      color: "from-blue-600 to-cyan-600",
      timeline: "6-10 months",
      bestFor: "Protecting systems, analysis",
      jobs: "SOC Analyst, Incident Response",
      certs: "Security+ ($370) → BTL1 ($400)"
    },
    {
      name: "Application Security",
      emoji: "🔐",
      color: "from-purple-600 to-pink-600",
      timeline: "8-13 months",
      bestFor: "Stay close to dev work",
      jobs: "AppSec Engineer, DevSecOps",
      certs: "Optional (focus on bug bounties)"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-950 to-black p-8 pt-24">
      <div className="max-w-6xl mx-auto">
        {/* Warning Header */}
        <div className="bg-red-900/60 backdrop-blur rounded-sm p-6 mb-8 border-8 border-red-500/80 shadow-2xl text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <PixelArt type="skull" className="w-24 h-24" />
            <div>
              <h1 className="text-5xl font-black text-red-300 pixel-text mb-2">🔐 ENDGAME</h1>
              <p className="text-red-200 pixel-text text-xs">CYBERSECURITY TRANSITION</p>
            </div>
            <PixelArt type="skull" className="w-24 h-24" />
          </div>
          
          <div className="mt-6 bg-red-950/50 p-4 rounded-sm border-4 border-red-400">
            <p className="text-red-200 pixel-text text-sm mb-2">⚠️ COME BACK LATER ⚠️</p>
            <p className="text-red-300 pixel-text text-[10px]">
              DON'T READ UNTIL PHASE 12 COMPLETE!
            </p>
          </div>
        </div>

        {/* Overview */}
        <div className="bg-black/60 backdrop-blur rounded-sm p-6 mb-8 border-4 border-purple-500/80">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-purple-900/30 p-4 rounded-sm border-2 border-purple-400/50">
              <p className="text-purple-300 pixel-text text-[10px] mb-1">YOU NEED:</p>
              <p className="text-white pixel-text text-xs">All 12 phases done</p>
            </div>
            <div className="bg-blue-900/30 p-4 rounded-sm border-2 border-blue-400/50">
              <p className="text-blue-300 pixel-text text-[10px] mb-1">YOU HAVE:</p>
              <p className="text-white pixel-text text-xs">Full-stack dev skills</p>
            </div>
            <div className="bg-green-900/30 p-4 rounded-sm border-2 border-green-400/50">
              <p className="text-green-300 pixel-text text-[10px] mb-1">NEXT STEP:</p>
              <p className="text-white pixel-text text-xs">Become cybersec pro</p>
            </div>
            <div className="bg-red-900/30 p-4 rounded-sm border-2 border-red-400/50">
              <p className="text-red-300 pixel-text text-[10px] mb-1">TIMELINE:</p>
              <p className="text-white pixel-text text-xs">8-13 months</p>
            </div>
          </div>
        </div>

        {/* Three Paths */}
        <h2 className="text-3xl font-black text-center text-white pixel-text mb-6">🎯 CHOOSE YOUR PATH</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {paths.map((path, idx) => (
            <div
              key={idx}
              className="bg-black/60 backdrop-blur rounded-sm p-6 border-4 border-white/50 hover:border-white/80 transform hover:scale-105 transition-all duration-300"
              style={{
                animation: `slideIn 0.5s ease-out ${idx * 0.2}s forwards`,
                opacity: 0
              }}
            >
              <div className={`text-6xl text-center mb-4`}>{path.emoji}</div>
              <h3 className={`text-lg font-black pixel-text text-center mb-4 bg-gradient-to-r ${path.color} bg-clip-text text-transparent`}>
                {path.name}
              </h3>
              
              <div className="space-y-3 text-[10px] pixel-text">
                <div className="bg-white/10 p-2 rounded-sm">
                  <strong className="text-cyan-300">Timeline:</strong>
                  <p className="text-white">{path.timeline}</p>
                </div>
                <div className="bg-white/10 p-2 rounded-sm">
                  <strong className="text-green-300">Best for:</strong>
                  <p className="text-white">{path.bestFor}</p>
                </div>
                <div className="bg-white/10 p-2 rounded-sm">
                  <strong className="text-yellow-300">Jobs:</strong>
                  <p className="text-white">{path.jobs}</p>
                </div>
                <div className="bg-white/10 p-2 rounded-sm">
                  <strong className="text-purple-300">Certs:</strong>
                  <p className="text-white">{path.certs}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Phases Overview */}
        <div className="space-y-6">
          <div className="bg-black/60 backdrop-blur rounded-sm p-6 border-4 border-red-500/80">
            <h3 className="text-2xl font-black text-red-300 pixel-text mb-4">📚 PHASE 13: WEB APP SECURITY</h3>
            <p className="text-white pixel-text text-xs mb-3">3-4 months</p>
            <div className="space-y-2 text-[10px] pixel-text text-white">
              <div className="bg-red-900/30 p-2 rounded">• Month 1: OWASP Top 10</div>
              <div className="bg-red-900/30 p-2 rounded">• Month 2: More Vulnerabilities</div>
              <div className="bg-red-900/30 p-2 rounded">• Month 3: Burp Suite Mastery</div>
              <div className="bg-red-900/30 p-2 rounded">• Month 4: Bug Bounty Prep</div>
            </div>
          </div>

          <div className="bg-black/60 backdrop-blur rounded-sm p-6 border-4 border-blue-500/80">
            <h3 className="text-2xl font-black text-blue-300 pixel-text mb-4">🌐 PHASE 14: NETWORK SECURITY</h3>
            <p className="text-white pixel-text text-xs mb-3">2-3 months</p>
            <div className="space-y-2 text-[10px] pixel-text text-white">
              <div className="bg-blue-900/30 p-2 rounded">• Month 1: Linux & Networking</div>
              <div className="bg-blue-900/30 p-2 rounded">• Month 2: Security Tools</div>
              <div className="bg-blue-900/30 p-2 rounded">• Month 3: Hands-On Practice</div>
            </div>
          </div>

          <div className="bg-black/60 backdrop-blur rounded-sm p-6 border-4 border-purple-500/80">
            <h3 className="text-2xl font-black text-purple-300 pixel-text mb-4">🎓 PHASE 15: CERTIFICATION</h3>
            <p className="text-white pixel-text text-xs mb-3">3-6 months</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-[10px] pixel-text">
              <div className="bg-purple-900/30 p-3 rounded">
                <strong className="text-red-300">Offensive:</strong>
                <p className="text-white mt-1">eJPT → OSCP</p>
              </div>
              <div className="bg-purple-900/30 p-3 rounded">
                <strong className="text-blue-300">Defensive:</strong>
                <p className="text-white mt-1">Security+ → BTL1</p>
              </div>
              <div className="bg-purple-900/30 p-3 rounded">
                <strong className="text-purple-300">AppSec:</strong>
                <p className="text-white mt-1">Skip certs, bug bounties</p>
              </div>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="mt-8 bg-black/60 backdrop-blur rounded-sm p-6 border-4 border-cyan-500/80">
          <h3 className="text-2xl font-black text-cyan-300 pixel-text mb-4">📖 ESSENTIAL RESOURCES</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-cyan-200 pixel-text text-xs mb-2">FREE PLATFORMS:</p>
              <div className="space-y-2 text-[10px] pixel-text">
                <a href="https://tryhackme.com/" target="_blank" rel="noopener noreferrer" 
                   className="block bg-cyan-900/30 p-2 rounded hover:bg-cyan-900/50 transition-colors">
                  → TryHackMe
                </a>
                <a href="https://portswigger.net/web-security" target="_blank" rel="noopener noreferrer"
                   className="block bg-cyan-900/30 p-2 rounded hover:bg-cyan-900/50 transition-colors">
                  → PortSwigger Academy
                </a>
                <a href="https://www.hackthebox.com/" target="_blank" rel="noopener noreferrer"
                   className="block bg-cyan-900/30 p-2 rounded hover:bg-cyan-900/50 transition-colors">
                  → HackTheBox
                </a>
              </div>
            </div>
            <div>
              <p className="text-green-200 pixel-text text-xs mb-2">PAID COURSES:</p>
              <div className="space-y-2 text-[10px] pixel-text">
                <a href="https://academy.tcm-sec.com/" target="_blank" rel="noopener noreferrer"
                   className="block bg-green-900/30 p-2 rounded hover:bg-green-900/50 transition-colors">
                  → TCM Security ($30)
                </a>
                <a href="https://security.ine.com/" target="_blank" rel="noopener noreferrer"
                   className="block bg-green-900/30 p-2 rounded hover:bg-green-900/50 transition-colors">
                  → INE Security
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Salary Info */}
        <div className="mt-8 bg-gradient-to-r from-green-600 to-emerald-600 p-1 rounded-sm">
          <div className="bg-black px-6 py-6 rounded-sm">
            <h3 className="text-2xl font-black text-green-300 pixel-text mb-4 text-center">💼 SALARY EXPECTATIONS (US)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[10px] pixel-text">
              <div className="text-center">
                <p className="text-green-300 mb-2">ENTRY-LEVEL</p>
                <p className="text-white">$60k-$90k</p>
              </div>
              <div className="text-center">
                <p className="text-yellow-300 mb-2">AFTER 2-3 YEARS</p>
                <p className="text-white">$90k-$140k</p>
              </div>
              <div className="text-center">
                <p className="text-orange-300 mb-2">AFTER 5+ YEARS</p>
                <p className="text-white">$130k-$200k+</p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-red-600 via-purple-600 to-pink-600 p-1 rounded-sm inline-block">
            <div className="bg-black px-8 py-4 rounded-sm">
              <p className="text-white pixel-text text-sm">
                🔥 YOUR CYBERSECURITY CAREER AWAITS 🔥
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const LearningRoadmap = () => {
  const [selectedStage, setSelectedStage] = useState(null);
  const [hoveredStage, setHoveredStage] = useState(null);
  const [selectedMission, setSelectedMission] = useState(null);
  const [currentMissionIndex, setCurrentMissionIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [completedTasks, setCompletedTasks] = useState({});
  const [expandedTasks, setExpandedTasks] = useState({});
  const { playSound } = AudioManager();
  const [activeTab, setActiveTab] = useState('roadmap');

  // Mission Card Component
  // REPLACE THE ENTIRE MissionCard COMPONENT (starts around line 47)
// Find this line: const MissionCard = ({ mission, mIdx, selectedStage...
// Replace everything from there until the closing }; of MissionCard

const MissionCard = ({ mission, mIdx, selectedStage, selectedMission, completedTasks, expandedTasks, setExpandedTasks, handleMissionClick, handleTaskComplete, className = "" }) => {
  const missionKey = `${selectedStage.id}-${mIdx}`;
  const isMissionOpen = selectedMission === missionKey;
  
  const toggleTaskExpansion = (taskIdx, e) => {
    e.stopPropagation();
    const key = `${missionKey}-${taskIdx}`;
    setExpandedTasks(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const PixelatedTitle = () => {
    const [displayedText, setDisplayedText] = useState('');
    const fullText = 'EPIC LEARNING JOURNEY';
    const audioContextRef = useRef(null);
  
    useEffect(() => {
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      let index = 0;
      
      const interval = setInterval(() => {
        if (index < fullText.length) {
          setDisplayedText(fullText.substring(0, index + 1));
          
          // Play pixel sound
          if (audioContextRef.current) {
            const oscillator = audioContextRef.current.createOscillator();
            const gainNode = audioContextRef.current.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContextRef.current.destination);
            
            oscillator.frequency.value = 800 + (index * 30);
            oscillator.type = 'square';
            gainNode.gain.value = 0.08;
            
            oscillator.start();
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContextRef.current.currentTime + 0.06);
            oscillator.stop(audioContextRef.current.currentTime + 0.06);
          }
          
          index++;
        } else {
          clearInterval(interval);
        }
      }, 80);
  
      return () => {
        clearInterval(interval);
        if (audioContextRef.current) {
          audioContextRef.current.close();
        }
      };
    }, []);
  
    return (
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center mb-8 md:mb-16 pixel-text text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] px-4"
          style={{
            textShadow: '4px 4px 0px #000, -2px -2px 0px rgba(255,255,255,0.3)',
            imageRendering: 'pixelated'
          }}>
        {displayedText}
        <span className="animate-pulse">_</span>
      </h1>
    );
  };
  
  return (
    <div
      className={`bg-black/40 backdrop-blur-md rounded-sm overflow-hidden border-4 border-white/70 shadow-2xl transform hover:scale-105 transition-all duration-300 ${className}`}
      style={{
        animation: `slideIn 0.5s ease-out ${mIdx * 0.15}s forwards`,
        opacity: 0,
        imageRendering: 'pixelated',
        boxShadow: '0 0 30px rgba(0,0,0,0.5), inset 0 0 20px rgba(255,255,255,0.1)'
      }}
    >
      {/* Mission Header - Enhanced */}
      <div
        onClick={() => handleMissionClick(selectedStage, mission, mIdx)}
        className={`
          p-6 cursor-pointer relative
          bg-gradient-to-br ${selectedStage.theme.bg}
          flex flex-col items-center justify-center text-center
          hover:brightness-110 transition-all duration-300
          ${isMissionOpen ? 'shadow-2xl scale-105' : ''}
          border-b-4 border-white/40
          min-h-[140px]
          overflow-hidden
        `}
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)',
          animation: 'slidePattern 20s linear infinite'
        }}></div>
        
        {/* Glowing corners */}
        <div className="absolute top-0 left-0 w-4 h-4 bg-white/60 rounded-br-sm"></div>
        <div className="absolute top-0 right-0 w-4 h-4 bg-white/60 rounded-bl-sm"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 bg-white/60 rounded-tr-sm"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 bg-white/60 rounded-tl-sm"></div>
        
        <div className="relative z-10">
          {/* Emoji with glow effect */}
          <div className="relative mb-3">
            <div className="absolute inset-0 blur-xl bg-white/40 rounded-full scale-150"></div>
            <div className="relative w-16 h-16 bg-black/40 rounded-sm border-4 border-white/60 flex items-center justify-center transform hover:scale-125 hover:rotate-12 transition-all duration-300 shadow-lg">
              <span className="text-4xl drop-shadow-lg">{mission.emoji}</span>
            </div>
          </div>
          
          {/* Mission name */}
          <h3 className="text-xs font-black text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] pixel-text uppercase leading-tight mb-2 tracking-wide">
            {mission.name}
          </h3>
          
          {/* Duration badge */}
          {mission.duration && (
            <div className="inline-block bg-black/50 px-3 py-1 rounded-sm border-2 border-white/50 mb-2">
              <p className="text-white/90 text-[9px] font-black pixel-text">
                ⏰ {mission.duration}
              </p>
            </div>
          )}
          
          {/* Tasks count with animation */}
          <div className="inline-block bg-white/20 px-4 py-1 rounded-sm border-2 border-white/60 backdrop-blur-sm">
            <p className="text-white font-black pixel-text text-[10px]">
              📋 {mission.tasks.length} TASKS
            </p>
          </div>
          
          {/* Expand arrow with pulse */}
          <div className={`
            transform transition-all duration-300 text-white font-black text-2xl mt-3
            ${isMissionOpen ? 'rotate-180 scale-125' : 'rotate-0 scale-100'}
            drop-shadow-lg
            ${isMissionOpen ? 'animate-pulse' : ''}
          `}>
            ▼
          </div>
        </div>
      </div>

      {/* Tasks Container - Enhanced */}
      <div className={`
        transition-all duration-500
        ${isMissionOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}
        overflow-hidden overflow-y-auto
      `}>
        <div className="p-4 space-y-3 bg-gradient-to-b from-black/60 to-black/80">
          {mission.tasks.map((task, tIdx) => {
            const taskKey = `${selectedStage.id}-${mIdx}-${tIdx}`;
            const isCompleted = completedTasks[taskKey];
            const isExpanded = expandedTasks[`${missionKey}-${tIdx}`];
            const hasDetails = task.details && task.details.length > 0;
            const hasResource = task.resource;
            
            return (
              <div
                key={tIdx}
                className={`
                  rounded-sm relative overflow-hidden
                  border-4
                  ${isCompleted 
                    ? `bg-gradient-to-br ${selectedStage.theme.bg} shadow-xl border-yellow-400 scale-105` 
                    : 'bg-gradient-to-br from-white/95 to-white/85 border-white/80 hover:border-white shadow-lg'
                  }
                  transform transition-all duration-300
                `}
                style={{
                  animation: isMissionOpen ? `slideIn 0.4s ease-out ${tIdx * 0.1}s forwards` : 'none',
                  opacity: isMissionOpen ? 1 : 0,
                  imageRendering: 'pixelated'
                }}
              >
                {/* Completed shine effect */}
                {isCompleted && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                )}
                
                {/* Task Header */}
                <div className="p-3 flex items-start gap-3">
                  {/* Checkbox - Enhanced */}
                  <div className="flex-shrink-0">
                    <div 
                      onClick={() => handleTaskComplete(selectedStage, mIdx, tIdx)}
                      className={`
                        w-8 h-8 rounded-sm border-4 border-black flex-shrink-0
                        flex items-center justify-center cursor-pointer
                        ${isCompleted ? 'bg-yellow-300 scale-110' : 'bg-black/30 hover:bg-black/40'}
                        transition-all duration-300 shadow-lg
                        hover:scale-125 active:scale-95
                      `}
                    >
                      {isCompleted && (
                        <span className="text-black font-black text-xl animate-bounce">✓</span>
                      )}
                    </div>
                  </div>
                  
                  {/* Task info */}
                  <div 
                    onClick={() => handleTaskComplete(selectedStage, mIdx, tIdx)}
                    className="flex-1 cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <span className={`
                          text-[11px] font-black pixel-text leading-tight block mb-1
                          ${isCompleted ? 'text-white line-through drop-shadow-lg' : 'text-black'}
                        `}>
                          {task.title}
                        </span>
                        {task.time && (
                          <div className={`
                            inline-block px-2 py-1 rounded-sm text-[9px] font-bold pixel-text
                            ${isCompleted ? 'bg-white/20 text-white/90 border border-white/40' : 'bg-black/10 text-gray-700 border border-gray-300'}
                          `}>
                            ⏱ {task.time}
                          </div>
                        )}
                      </div>
                      
                      {/* Expand button */}
                      {(hasDetails || hasResource) && (
                        <div 
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleTaskExpansion(tIdx, e);
                          }}
                          className={`
                            text-sm font-black transition-all duration-200 cursor-pointer
                            px-3 py-2 rounded-sm border-2
                            ${isCompleted 
                              ? 'text-white hover:bg-white/20 border-white/60 bg-white/10' 
                              : 'text-black hover:bg-black/10 border-black/30 bg-black/5'
                            }
                            ${isExpanded ? 'rotate-180 scale-110' : 'rotate-0'}
                            hover:scale-125 active:scale-95
                          `}
                        >
                          ▼
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Completion sparkle */}
                  {isCompleted && (
                    <div className="w-6 h-6 bg-yellow-400 rounded-sm border-3 border-yellow-600 flex items-center justify-center animate-pulse flex-shrink-0 shadow-lg">
                      <Sparkles className="w-4 h-4 text-yellow-900" />
                    </div>
                  )}
                </div>

                {/* Task Details - Enhanced */}
                {(hasDetails || hasResource) && (
                  <div className={`
                    transition-all duration-300 overflow-hidden
                    ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                  `}>
                    <div className={`
                      px-4 pb-3 text-[10px] pixel-text leading-relaxed
                      ${isCompleted ? 'text-white/95' : 'text-gray-900'}
                    `}>
                      {hasDetails && (
                        <div className={`
                          mb-3 space-y-1 p-3 rounded-sm border-2
                          ${isCompleted 
                            ? 'bg-white/10 border-white/30' 
                            : 'bg-black/5 border-gray-300'
                          }
                        `}>
                          {task.details.map((detail, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-2">
                              <span className={isCompleted ? 'text-yellow-300' : 'text-gray-600'}>▸</span>
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {hasResource && (
                        <div className={`
                          p-3 rounded-sm border-2
                          ${isCompleted 
                            ? 'bg-cyan-500/20 border-cyan-300/50' 
                            : 'bg-blue-50 border-blue-300'
                          }
                        `}>
                          {typeof task.resource === 'string' ? (
                            <>
                              <strong className={isCompleted ? 'text-cyan-200' : 'text-blue-800'}>📚 Resource:</strong>
                              <span className="ml-2">{task.resource}</span>
                            </>
                          ) : task.resource.url ? (
                            <>
                              <strong className={isCompleted ? 'text-cyan-200' : 'text-blue-800'}>📚 Resource:</strong>{' '}
                              <a 
                                href={task.resource.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={`
                                  underline font-bold transition-colors ml-2
                                  ${isCompleted ? 'text-yellow-200 hover:text-yellow-100' : 'text-blue-600 hover:text-blue-800'}
                                `}
                                onClick={(e) => e.stopPropagation()}
                              >
                                {task.resource.name || task.resource.url} →
                              </a>
                            </>
                          ) : (
                            <>
                              <strong className={isCompleted ? 'text-cyan-200' : 'text-blue-800'}>📚 Resource:</strong>
                              <span className="ml-2">{task.resource.name}</span>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Mission Checkpoint - Enhanced */}
          {mission.checkpoint && (
            <div className="mt-4 p-4 bg-gradient-to-br from-yellow-900/60 to-orange-900/60 border-4 border-yellow-500/80 rounded-sm shadow-xl backdrop-blur-sm relative overflow-hidden">
              {/* Checkpoint glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-yellow-500/20 animate-pulse"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-yellow-400 rounded-sm border-2 border-yellow-600 flex items-center justify-center">
                    <span className="text-lg">🎯</span>
                  </div>
                  <div className="text-[11px] font-black pixel-text text-yellow-100 uppercase">
                    {mission.checkpoint.title}
                  </div>
                </div>
                <div className="text-[10px] pixel-text text-yellow-50 space-y-2">
                  {mission.checkpoint.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-black/20 p-2 rounded-sm border border-yellow-600/30">
                      <span className="text-yellow-300">□</span>
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

  const stages = [
    {
      id: 1,
      title: "HTML/CSS FOUNDATION",
      icon: Code,
      emoji: "🌱",
      pixelArt: "sprout",
      characterImage: phase1Image,
      stageBg: stage1Bg,
      missionBackgrounds: [s1_m1, s1_m2, s1_m3],
      theme: {
        bg: "from-green-700 via-emerald-600 to-lime-700",
        card: "bg-gradient-to-br from-green-100 to-emerald-200",
        border: "border-green-600",
        glow: "shadow-green-500/50",
        particle: "bg-green-400"
      },
      sound: { freq: 523.25, type: 'sine' },
      missions: [
        {
          name: "Week 1: HTML/CSS Refresh & Setup",
          duration: "5-10 hours total",
          emoji: "🌿",
          taskSound: { freq: 500, type: 'sine' },
          tasks: [
            {
              title: "Install/Setup Development Environment",
              time: "1 hour",
              details: [
                "Install VS Code",
                "Install Git",
                "Setup folder structure for projects",
                "Create GitHub account if you don't have one"
              ],
              resource: {
                name: "Practice - No repo needed yet",
                url: null
              }
            },
            {
              title: "Semantic HTML5 Review",
              time: "1-1.5 hours",
              details: [
                "Review: header, nav, main, section, article, aside, footer",
                "Build a simple page structure using all semantic elements"
              ],
              resource: {
                name: "Bro Code HTML & CSS Full Course",
                url: "https://youtu.be/HGTJBPNC-Gw"
              }
            },
            {
              title: "CSS Flexbox Deep Dive",
              time: "2-2.5 hours",
              details: [
                "Watch Flexbox tutorial",
                "Build 3 different layouts: navigation bar, card grid, sidebar layout"
              ],
              resource: {
                name: "CSS-Tricks Flexbox Guide",
                url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
              }
            },
            {
              title: "CSS Grid Fundamentals",
              time: "2-2.5 hours",
              details: [
                "Learn Grid basics: grid-template-columns, grid-template-rows, gap",
                "Build a photo gallery (3x3 or 4x4 grid)",
                "Make it responsive with auto-fit/auto-fill"
              ],
              resource: {
                name: "CSS-Tricks Grid Guide",
                url: "https://css-tricks.com/snippets/css/complete-guide-grid/"
              }
            },
            {
              title: "Responsive Design with Media Queries",
              time: "1.5-2 hours",
              details: [
                "Learn mobile-first approach",
                "Take one of your flex/grid layouts and make it responsive",
                "Test on mobile view in Chrome DevTools",
                "Breakpoints: 640px (sm), 768px (md), 1024px (lg)"
              ]
            },
            {
              title: "Git Basics Practice",
              time: "1 hour",
              details: [
                "Review: git init, add, commit, push",
                "Create a test repo, make 5 commits with different messages",
                "Learn branching: git branch, git checkout, git merge"
              ],
              resource: {
                name: "Bro Code Git & GitHub Crash Course",
                url: "https://youtu.be/tRZGeaHPoaw"
              }
            }
          ],
          checkpoint: {
            title: "Week 1 Checkpoint",
            requirements: [
              "You can create a responsive layout with Flexbox",
              "You can create a responsive layout with Grid",
              "You've made at least 5 Git commits",
              "Your dev environment is set up and working"
            ]
          }
        },
        {
          name: "Week 2: Landing Page Project",
          duration: "5-10 hours total",
          emoji: "🍃",
          taskSound: { freq: 550, type: 'sine' },
          tasks: [
            {
              title: "Project Planning & Setup",
              time: "0.5 hours",
              details: [
                "Sketch out sections: Hero, Features, Pricing, Contact",
                "Create project folder: landing-page-project",
                "Initialize Git repo: git init",
                "Create .gitignore file",
                "First commit: 'Initial commit'"
              ]
            },
            {
              title: "HTML Structure",
              time: "1-1.5 hours",
              details: [
                "Write semantic HTML for all sections",
                "Add placeholder text (lorem ipsum okay for now)",
                "Make sure structure is logical",
                "Commit: 'Add HTML structure'"
              ]
            },
            {
              title: "CSS - Mobile First Styling",
              time: "2-3 hours",
              details: [
                "Create CSS file, link to HTML",
                "Style for mobile (375px width)",
                "Use CSS variables for colors",
                "Basic typography (font families, sizes)",
                "Commit: 'Add mobile styles'"
              ]
            },
            {
              title: "CSS - Layout with Flexbox/Grid",
              time: "1.5-2 hours",
              details: [
                "Hero section: centered content",
                "Features section: use Grid or Flexbox",
                "Add spacing, padding, margins",
                "Commit: 'Add layouts'"
              ]
            },
            {
              title: "CSS - Responsive Breakpoints",
              time: "1-2 hours",
              details: [
                "Add media queries for tablet (768px)",
                "Add media queries for desktop (1024px)",
                "Test in Chrome DevTools responsive mode",
                "Commit: 'Add responsive design'"
              ]
            },
            {
              title: "Polish & Push to GitHub",
              time: "0.5-1 hour",
              details: [
                "Add hover effects on buttons",
                "Check for any styling issues",
                "Create NEW repo on GitHub: landing-page-project",
                "Connect local repo to GitHub",
                "Push your code: git push -u origin main",
                "Commit: 'Final polish'"
              ]
            }
          ],
          checkpoint: {
            title: "Week 2 Checkpoint",
            requirements: [
              "Landing page looks good on mobile, tablet, desktop",
              "Code is on GitHub",
              "You used semantic HTML",
              "You made at least 6 commits with clear messages"
            ]
          }
        },
        {
          name: "Week 3-4: Portfolio Website",
          duration: "10-20 hours total",
          emoji: "🌳",
          taskSound: { freq: 600, type: 'sine' },
          tasks: [
            {
              title: "Planning & Wireframing",
              time: "1 hour",
              details: [
                "Sketch all 4 pages on paper",
                "Plan navigation structure",
                "Decide color scheme",
                "Create project folder: portfolio-website",
                "git init"
              ]
            },
            {
              title: "HTML - All Pages Structure",
              time: "2-3 hours",
              details: [
                "Create index.html (Home)",
                "Create about.html (About)",
                "Create projects.html (Projects)",
                "Create contact.html (Contact)",
                "Add navigation to all pages",
                "Use semantic HTML throughout",
                "Commit after each page"
              ]
            },
            {
              title: "CSS - Global Styles",
              time: "1.5-2 hours",
              details: [
                "Create styles.css",
                "CSS variables (colors, fonts, spacing)",
                "Reset/normalize styles",
                "Typography (headings, paragraphs)",
                "Navigation bar styling (mobile-first)",
                "Commit: 'Add global styles'"
              ]
            },
            {
              title: "CSS - Home Page",
              time: "2-3 hours",
              details: [
                "Hero section with your name/title",
                "Skills section (use Grid or Flexbox)",
                "Make it mobile-first, then add breakpoints",
                "Commit: 'Style home page'"
              ]
            },
            {
              title: "CSS - About Page",
              time: "1.5-2 hours",
              details: [
                "About content layout",
                "Add an image (can be placeholder)",
                "Responsive layout",
                "Commit: 'Style about page'"
              ]
            },
            {
              title: "CSS - Projects Page",
              time: "2-3 hours",
              details: [
                "Project cards using Grid (2 or 3 columns on desktop)",
                "Each card: image, title, description, link",
                "Use placeholder content for now",
                "Responsive (1 column mobile, 2-3 desktop)",
                "Commit: 'Style projects page'"
              ]
            },
            {
              title: "HTML/CSS - Contact Page",
              time: "1.5-2 hours",
              details: [
                "Contact form: name, email, message fields",
                "Style the form beautifully",
                "Add basic HTML5 validation (required, type='email')",
                "Form won't work yet (no backend) - that's okay!",
                "Commit: 'Add contact form'"
              ]
            },
            {
              title: "Responsive Testing & Polish",
              time: "1-2 hours",
              details: [
                "Test all pages on mobile, tablet, desktop",
                "Fix any layout issues",
                "Add smooth hover effects",
                "Check all links work",
                "Commit: 'Responsive polish'"
              ]
            },
            {
              title: "Deployment",
              time: "1 hour",
              details: [
                "Sign up for Vercel or Netlify (free)",
                "Connect your GitHub repo",
                "Deploy your site",
                "Test live site on your phone",
                "Add live URL to README",
                "Commit: 'Add README with live link'"
              ]
            },
            {
              title: "Security: Learn HTTPS vs HTTP",
              time: "30 mins",
              details: [
                "Read about why HTTPS is important",
                "Notice your deployed site uses HTTPS automatically",
                "Learn about SSL/TLS basics"
              ],
              resource: {
                name: "Search 'HTTPS explained' on YouTube",
                url: null
              }
            }
          ],
          checkpoint: {
            title: "End of Phase 1 Checkpoint",
            requirements: [
              "Portfolio has 4 complete pages",
              "Fully responsive (mobile, tablet, desktop)",
              "Deployed and live",
              "Clean Git history (10+ meaningful commits)",
              "Navigation works on all pages",
              "Contact form looks professional (even if non-functional)"
            ]
          }
        }
      ]
    },
    {
      id: 2,
      title: "JAVASCRIPT FUNDAMENTALS",
      icon: Zap,
      emoji: "⚡",
      pixelArt: "lightning",
      characterImage: phase2Image,
      stageBg: stage2Bg,
      missionBackgrounds: [s2_m1, s2_m2, s2_m3],
      theme: {
        bg: "from-yellow-600 via-amber-600 to-orange-700",
        card: "bg-gradient-to-br from-yellow-100 to-orange-200",
        border: "border-orange-600",
        glow: "shadow-orange-500/50",
        particle: "bg-orange-400"
      },
      sound: { freq: 587.33, type: 'triangle' },
      missions: [
        {
          name: "Week 1: Core JavaScript Review",
          duration: "5-10 hours total",
          emoji: "⚡",
          taskSound: { freq: 600, type: 'triangle' },
          tasks: [
            {
              title: "Objects Deep Dive",
              time: "1.5-2 hours",
              details: [
                "Review object creation, properties, methods",
                "Practice accessing properties (dot vs bracket notation)",
                "Destructuring objects",
                "Build 5 different objects (user, product, etc.)"
              ],
              resource: {
                name: "Bro Code JavaScript (Objects ~2:20:00)",
                url: "https://youtu.be/lfmg-EJ8gm4"
              }
            },
            {
              title: "Array Methods Practice",
              time: "2-2.5 hours",
              details: [
                "Review: map, filter, reduce, forEach, find, some, every",
                "Create an array of 10 products with prices",
                "Use filter to find products under $50",
                "Use map to add tax to all prices",
                "Use reduce to calculate total price"
              ],
              resource: {
                name: "JavaScript.info Arrays",
                url: "https://javascript.info/array-methods"
              }
            },
            {
              title: "Promises Explained",
              time: "1.5-2 hours",
              details: [
                "Understand async vs sync code",
                "Create your own promise",
                "Practice chaining .then()",
                "Learn .catch() for errors"
              ],
              resource: {
                name: "Bro Code JavaScript (Promises ~6:45:00)",
                url: "https://youtu.be/lfmg-EJ8gm4"
              }
            },
            {
              title: "Async/Await",
              time: "1.5-2 hours",
              details: [
                "Understand async/await syntax",
                "Refactor promise code to async/await",
                "try/catch for error handling",
                "Practice with fake data"
              ],
              resource: {
                name: "JavaScript.info Async/Await",
                url: "https://javascript.info/async-await"
              }
            },
            {
              title: "ES6+ Features Review",
              time: "1 hour",
              details: [
                "Arrow functions",
                "Template literals (backticks)",
                "Spread operator (...)",
                "Default parameters",
                "Ternary operator",
                "Practice using all in code examples"
              ]
            }
          ],
          checkpoint: {
            title: "Week 1 Checkpoint",
            requirements: [
              "You can create and manipulate objects",
              "You can use map, filter, reduce confidently",
              "You understand what promises do",
              "You can write async/await code"
            ]
          }
        },
        {
          name: "Week 2: DOM & Todo Project",
          duration: "5-10 hours total",
          emoji: "🔆",
          taskSound: { freq: 650, type: 'triangle' },
          tasks: [
            {
              title: "DOM Manipulation Review",
              time: "1.5-2 hours",
              details: [
                "querySelector, querySelectorAll",
                "getElementById, getElementsByClassName",
                "createElement, appendChild, removeChild",
                "addEventListener",
                "Changing textContent, innerHTML, style",
                "Build a simple counter app for practice"
              ],
              resource: {
                name: "Bro Code JS DOM section",
                url: "https://youtu.be/lfmg-EJ8gm4"
              }
            },
            {
              title: "Project: Todo List App",
              time: "3-4 hours",
              details: [
                "Create HTML structure (input, button, list)",
                "Add todo items dynamically",
                "Delete button for each todo",
                "Mark as complete (strikethrough)",
                "Save to localStorage",
                "Load from localStorage on page refresh",
                "Style it nicely with CSS",
                "Git init, commit regularly, push to GitHub",
                "Deploy to Vercel/Netlify"
              ]
            },
            {
              title: "Security: Input Sanitization Basics",
              time: "30 mins",
              details: [
                "Learn why we never trust user input",
                "See what happens if you allow HTML in input (XSS demo)",
                "Learn to use textContent instead of innerHTML for user data"
              ],
              resource: {
                name: "Search 'XSS explained for beginners'",
                url: null
              }
            }
          ],
          checkpoint: {
            title: "Week 2 Checkpoint",
            requirements: [
              "Todo app works fully",
              "Data persists with localStorage",
              "You understand DOM manipulation",
              "Project is deployed"
            ]
          }
        },
        {
          name: "Week 3: More Projects",
          duration: "5-10 hours total",
          emoji: "🌩️",
          taskSound: { freq: 700, type: 'triangle' },
          tasks: [
            {
              title: "Project: Calculator",
              time: "2-3 hours",
              details: [
                "HTML: buttons for 0-9, +, -, ×, ÷, =, C",
                "CSS: calculator layout with Grid",
                "JavaScript: handle all operations",
                "Display current number and result",
                "Handle decimal points",
                "Git init, push to GitHub",
                "Deploy to Vercel/Netlify"
              ]
            },
            {
              title: "Project: Weather App (Rebuilt)",
              time: "3-5 hours",
              details: [
                "Sign up for free weather API (OpenWeatherMap)",
                "HTML: input for city, button, display area",
                "Fetch weather data using fetch API",
                "Use async/await (no AI help this time!)",
                "Show: temperature, description, icon",
                "Error handling with try/catch",
                "Loading state ('Loading...')",
                "Style it better than your first version",
                "Git init, push to GitHub",
                "Deploy it"
              ]
            }
          ],
          checkpoint: {
            title: "End of Phase 2 Checkpoint",
            requirements: [
              "You have 3 working JavaScript projects",
              "You're comfortable with fetch and async/await",
              "All projects are on GitHub and deployed",
              "You can manipulate the DOM confidently"
            ]
          }
        }
      ]
    },
    {
      id: 3,
      title: "REACT BASICS",
      icon: Sparkles,
      emoji: "✨",
      pixelArt: "diamond",
      characterImage: phase3Image,
      stageBg: stage3Bg,
      missionBackgrounds: [s3_m1, s3_m2, s3_m3, s3_m4],
      theme: {
        bg: "from-amber-800 via-orange-700 to-yellow-800",
        card: "bg-gradient-to-br from-amber-100 to-orange-200",
        border: "border-amber-700",
        glow: "shadow-amber-600/50",
        particle: "bg-amber-500"
      },
      sound: { freq: 659.25, type: 'sine' },
      missions: [
        { 
          name: "Week 1: React Setup & Fundamentals",
          description: "5-10 hours total",
          tasks: [
            "React Introduction (1 hour)",
            "Setup First React Project (1 hour)",
            "JSX Fundamentals (1.5-2 hours)",
            "Components & Props (2-3 hours)",
            "useState Hook (2-3 hours)"
          ],
          missionEmoji: "💎",
          taskSound: { freq: 700, type: 'sine' }
        },
        { 
          name: "Week 2: Events, Lists & Effects",
          description: "5-10 hours total",
          tasks: [
            "Event Handling in React (1.5-2 hours)",
            "Conditional Rendering (1-1.5 hours)",
            "Lists and Keys (1.5-2 hours)",
            "useEffect Hook (2-3 hours)"
          ],
          missionEmoji: "🌊",
          taskSound: { freq: 750, type: 'sine' }
        },
        { 
          name: "Week 3: More Hooks & Forms",
          description: "5-10 hours total",
          tasks: [
            "useRef Hook (1-1.5 hours)",
            "Forms in React (1.5-2 hours)",
            "Custom Hooks (Optional) (1-2 hours)",
            "Component Organization (0.5 hours)"
          ],
          missionEmoji: "💠",
          taskSound: { freq: 800, type: 'sine' }
        },
        { 
          name: "Week 4: Movie Search Project",
          description: "5-15 hours total",
          tasks: [
            "Project Setup (0.5 hours)",
            "Components Planning (0.5 hours)",
            "Build SearchBar Component (1-1.5 hours)",
            "Build API Integration (2-3 hours)",
            "Build MovieList Component (1-1.5 hours)",
            "Build MovieCard Component (1-2 hours)",
            "Styling (2-3 hours)",
            "Deploy (0.5 hours)",
            "Security: React XSS Prevention (30 mins)"
          ],
          missionEmoji: "🎬",
          taskSound: { freq: 850, type: 'sine' }
        }
      ]
    },
    {
      id: 4,
      title: "REACT + TAILWIND",
      icon: Palette,
      emoji: "🎨",
      pixelArt: "palette",
      characterImage: phase4Image,
      stageBg: stage4Bg,
      missionBackgrounds: [s4_m1, s4_m2, s4_m3],
      theme: {
        bg: "from-cyan-700 via-blue-600 to-sky-700",
        card: "bg-gradient-to-br from-cyan-100 to-blue-200",
        border: "border-cyan-600",
        glow: "shadow-cyan-500/50",
        particle: "bg-cyan-400"
      },
      sound: { freq: 698.46, type: 'square' },
      missions: [
        { 
          name: "Week 1: Tailwind CSS",
          description: "5-10 hours total",
          tasks: [
            "Tailwind Setup (1 hour)",
            "Tailwind Basics (2-3 hours)",
            "Practice: Rebuild Previous Project (2-4 hours)"
          ],
          missionEmoji: "🎭",
          taskSound: { freq: 720, type: 'square' }
        },
        { 
          name: "Week 2: E-commerce Product Page",
          description: "5-10 hours total",
          tasks: [
            "Setup & Planning (0.5 hours)",
            "Product Gallery Component (2-3 hours)",
            "Product Info Component (1.5-2 hours)",
            "Cart State Management (1.5-2 hours)",
            "Styling & Responsive (1-2 hours)"
          ],
          missionEmoji: "🌸",
          taskSound: { freq: 780, type: 'square' }
        },
        { 
          name: "Week 3: Dashboard/Admin Panel",
          description: "5-10 hours total",
          tasks: [
            "Setup & Planning (0.5 hours)",
            "Sidebar Navigation (1.5-2 hours)",
            "Dashboard Header (1 hour)",
            "Data Table Component (2-3 hours)",
            "Charts Integration (Optional) (1-2 hours)",
            "Final Polish & Deploy (1-2 hours)"
          ],
          missionEmoji: "🎨",
          taskSound: { freq: 820, type: 'square' }
        }
      ]
    },
    {
      id: 5,
      title: "NODE.JS + EXPRESS",
      icon: Server,
      emoji: "🖥️",
      pixelArt: "terminal",
      characterImage: phase5Image,
      stageBg: stage5Bg,
      missionBackgrounds: [s5_m1, s5_m2, s5_m3],
      theme: {
        bg: "from-purple-800 via-violet-700 to-indigo-800",
        card: "bg-gradient-to-br from-purple-100 to-violet-200",
        border: "border-purple-700",
        glow: "shadow-purple-600/50",
        particle: "bg-purple-500"
      },
      sound: { freq: 783.99, type: 'sine' },
      missions: [
        { 
          name: "Week 1: Node.js Basics",
          description: "5-10 hours total",
          tasks: [
            "Node.js Introduction (1 hour)",
            "NPM Basics (1 hour)",
            "Built-in Modules (2-3 hours)",
            "Create Basic HTTP Server (1.5-2 hours)"
          ],
          missionEmoji: "⚙️",
          taskSound: { freq: 800, type: 'sine' }
        },
        { 
          name: "Week 2-3: Express.js",
          description: "5-20 hours total",
          tasks: [
            "Express Setup (1 hour)",
            "Routing in Express (1.5-2 hours)",
            "Middleware (2-3 hours)",
            "Error Handling (1-1.5 hours)",
            "Postman Setup (0.5 hours)"
          ],
          missionEmoji: "🔧",
          taskSound: { freq: 850, type: 'sine' }
        },
        { 
          name: "Project: Simple CRUD API",
          description: "5-10 hours total",
          tasks: [
            "Project Setup (0.5 hours)",
            "Data Structure (0.5 hours)",
            "GET Routes (1-2 hours)",
            "POST Route (1-2 hours)",
            "PUT Route (1-1.5 hours)",
            "DELETE Route (1 hour)",
            "Input Validation (1-1.5 hours)",
            "Security: Input Validation & CORS (1 hour)"
          ],
          missionEmoji: "📡",
          taskSound: { freq: 900, type: 'sine' }
        }
      ]
    },
    {
      id: 6,
      title: "POSTGRESQL",
      icon: Database,
      emoji: "🗄️",
      pixelArt: "database",
      characterImage: phase5Image,
      stageBg: stage6Bg,
      missionBackgrounds: [s6_m1, s6_m2, s6_m3],
      theme: {
        bg: "from-blue-800 via-indigo-700 to-blue-900",
        card: "bg-gradient-to-br from-blue-200 to-indigo-300",
        border: "border-blue-800",
        glow: "shadow-blue-600/50",
        particle: "bg-blue-500"
      },
      sound: { freq: 830.61, type: 'triangle' },
      missions: [
        { 
          name: "Week 1: SQL Basics",
          description: "5-10 hours total",
          tasks: [
            "PostgreSQL Installation (0.5-1 hour)",
            "SQL Fundamentals (2-3 hours)",
            "Creating Tables (1.5-2 hours)",
            "Foreign Keys & Relationships (1.5-2 hours)"
          ],
          missionEmoji: "💿",
          taskSound: { freq: 820, type: 'triangle' }
        },
        { 
          name: "Week 2-3: Advanced SQL + Integration",
          description: "5-20 hours total",
          tasks: [
            "JOINs (2-3 hours)",
            "Aggregate Functions (1.5-2 hours)",
            "Practice SQL Problems (2-3 hours)",
            "Connect PostgreSQL to Node.js (1.5-2 hours)",
            "Environment Variables (0.5 hours)"
          ],
          missionEmoji: "📀",
          taskSound: { freq: 870, type: 'triangle' }
        },
        { 
          name: "Project: Blog API with PostgreSQL",
          description: "5-10 hours total",
          tasks: [
            "Database Setup (1 hour)",
            "Project Setup (0.5 hours)",
            "GET Posts (1.5-2 hours)",
            "POST Routes (1.5-2 hours)",
            "UPDATE & DELETE (1-1.5 hours)",
            "Comments System (1.5-2 hours)",
            "Security: SQL Injection Prevention (1 hour)"
          ],
          missionEmoji: "💾",
          taskSound: { freq: 920, type: 'triangle' }
        }
      ]
    },
    {
      id: 7,
      title: "REST APIs + PRISMA ORM",
      icon: Link,
      emoji: "🔗",
      pixelArt: "chain",
      characterImage: phase7Image,
      stageBg: stage7Bg,
      missionBackgrounds: [s7_m1, s7_m2],
      theme: {
        bg: "from-teal-800 via-cyan-800 to-blue-900",
        card: "bg-gradient-to-br from-teal-200 to-cyan-300",
        border: "border-teal-800",
        glow: "shadow-teal-600/50",
        particle: "bg-teal-500"
      },
      sound: { freq: 880.00, type: 'sawtooth' },
      missions: [
        { 
          name: "Week 1: REST Principles + Prisma",
          description: "5-10 hours total",
          tasks: [
            "REST API Best Practices (1.5-2 hours)",
            "Prisma Setup (1.5-2 hours)",
            "Prisma Schema (1.5-2 hours)",
            "Migrations (1 hour)"
          ],
          missionEmoji: "🔄",
          taskSound: { freq: 900, type: 'sawtooth' }
        },
        { 
          name: "Week 2-3: Task Management API",
          description: "5-20 hours total",
          tasks: [
            "Project Setup (1 hour)",
            "Prisma Client Usage (1.5-2 hours)",
            "API Routes - Tasks (3-4 hours)",
            "Input Validation (1.5-2 hours)",
            "Error Handling (1 hour)",
            "API Documentation (1 hour)",
            "Security: Rate Limiting (1 hour)"
          ],
          missionEmoji: "⛓️",
          taskSound: { freq: 950, type: 'sawtooth' }
        }
      ]
    },
    {
      id: 8,
      title: "AUTHENTICATION & SECURITY",
      icon: Shield,
      emoji: "🛡️",
      pixelArt: "shield",
      characterImage: phase8Image,
      stageBg: stage8Bg,
      missionBackgrounds: [s8_m1, s8_m2, s8_m3],
      theme: {
        bg: "from-red-800 via-red-700 to-orange-900",
        card: "bg-gradient-to-br from-red-200 to-orange-300",
        border: "border-red-800",
        glow: "shadow-red-600/50",
        particle: "bg-red-500"
      },
      sound: { freq: 932.33, type: 'square' },
      missions: [
        { 
          name: "Week 1: Password Hashing",
          description: "5-10 hours total",
          tasks: [
            "Understand Password Security (1 hour)",
            "Bcrypt Setup (1 hour)",
            "User Registration (2-3 hours)",
            "User Login (Basic) (1.5-2 hours)"
          ],
          missionEmoji: "🔐",
          taskSound: { freq: 920, type: 'square' }
        },
        { 
          name: "Week 2: JWT Authentication",
          description: "5-10 hours total",
          tasks: [
            "Understand JWT (1 hour)",
            "JWT Setup (1 hour)",
            "Generate JWT on Login (1.5-2 hours)",
            "Verify JWT Middleware (2-3 hours)",
            "Protected Routes (1-1.5 hours)"
          ],
          missionEmoji: "🔒",
          taskSound: { freq: 970, type: 'square' }
        },
        { 
          name: "Week 3-4: Full Auth System",
          description: "5-20 hours total",
          tasks: [
            "Refresh Tokens (2-3 hours)",
            "Role-Based Access Control (2-3 hours)",
            "Password Reset Flow (3-4 hours)",
            "Email Verification (Optional) (2-3 hours)",
            "Complete Auth API (3-5 hours)",
            "Security: OWASP Top 10 Introduction (1 hour)",
            "Security: JWT Vulnerabilities (1 hour)",
            "Security: Security Checklist (1 hour)"
          ],
          missionEmoji: "🛡️",
          taskSound: { freq: 1020, type: 'square' }
        }
      ]
    },
    {
      id: 9,
      title: "MONGODB + FULL-STACK",
      icon: Layers,
      emoji: "📚",
      pixelArt: "layers",
      characterImage: phase9Image,
      stageBg: stage9Bg,
      missionBackgrounds: [s9_m1, s9_m2],
      theme: {
        bg: "from-slate-800 via-gray-800 to-zinc-900",
        card: "bg-gradient-to-br from-slate-300 to-gray-400",
        border: "border-slate-900",
        glow: "shadow-slate-700/60",
        particle: "bg-slate-600"
      },
      sound: { freq: 987.77, type: 'triangle' },
      missions: [
        { 
          name: "Week 1: MongoDB Basics",
          description: "5-10 hours total",
          tasks: [
            "MongoDB Introduction (1 hour)",
            "MongoDB Setup (1 hour)",
            "Mongoose Setup (1 hour)",
            "Mongoose Schemas (2-3 hours)",
            "Mongoose CRUD (2-3 hours)"
          ],
          missionEmoji: "🍂",
          taskSound: { freq: 1000, type: 'triangle' }
        },
        { 
          name: "Week 2-4: Full-Stack Project",
          description: "10-30 hours total",
          tasks: [
            "Backend: Project Setup (1 hour)",
            "Backend: Auth Routes (2-3 hours)",
            "Backend: User Routes (2-3 hours)",
            "Backend: Post Routes (3-4 hours)",
            "Backend: Like & Comment Routes (2-3 hours)",
            "Frontend: React Setup (0.5 hours)",
            "Frontend: Auth Pages (3-4 hours)",
            "Frontend: Feed Page (3-4 hours)",
            "Frontend: Profile Page (2-3 hours)",
            "Frontend: Post Detail Page (2-3 hours)",
            "Frontend: Styling & Polish (2-3 hours)",
            "Deployment (1-2 hours)",
            "Security: NoSQL Injection Prevention (1 hour)",
            "Security: File Upload Security (1-2 hours)"
          ],
          missionEmoji: "🌑",
          taskSound: { freq: 1050, type: 'triangle' }
        }
      ]
    },
    {
      id: 10,
      title: "REAL-TIME FEATURES",
      icon: Radio,
      emoji: "📡",
      pixelArt: "signal",
      characterImage: phase10Image,
      stageBg: stage10Bg,
      missionBackgrounds: [s10_m1, s10_m2],
      theme: {
        bg: "from-indigo-900 via-purple-900 to-violet-950",
        card: "bg-gradient-to-br from-indigo-400 to-purple-500",
        border: "border-indigo-950",
        glow: "shadow-indigo-800/70",
        particle: "bg-indigo-700"
      },
      sound: { freq: 1046.50, type: 'sine' },
      missions: [
        { 
          name: "Week 1: Socket.io Basics",
          description: "5-10 hours total",
          tasks: [
            "WebSockets Introduction (1 hour)",
            "Socket.io Setup - Backend (1.5-2 hours)",
            "Socket.io Setup - Frontend (1 hour)",
            "Basic Events (2-3 hours)"
          ],
          missionEmoji: "📶",
          taskSound: { freq: 1080, type: 'sine' }
        },
        { 
          name: "Week 2-3: Real-Time Chat App",
          description: "5-20 hours total",
          tasks: [
            "Backend: Project Setup (1 hour)",
            "Backend: Chat Rooms (2-3 hours)",
            "Backend: Message Handling (2-3 hours)",
            "Backend: Typing Indicators (1 hour)",
            "Backend: Online Users (1-2 hours)",
            "Frontend: Chat UI (3-4 hours)",
            "Frontend: Socket Events (2-3 hours)",
            "Frontend: Polish (2-3 hours)",
            "Deployment (1 hour)",
            "Security: WebSocket Security (1-2 hours)"
          ],
          missionEmoji: "🌐",
          taskSound: { freq: 1130, type: 'sine' }
        }
      ]
    },
    {
      id: 11,
      title: "DEPLOYMENT & DEVOPS",
      icon: Rocket,
      emoji: "🚀",
      pixelArt: "rocket",
      characterImage: phase11Image,
      stageBg: stage11Bg,
      missionBackgrounds: [s11_m1],
      theme: {
        bg: "from-gray-900 via-slate-900 to-zinc-950",
        card: "bg-gradient-to-br from-gray-500 to-slate-600",
        border: "border-black",
        glow: "shadow-gray-900/80",
        particle: "bg-gray-700"
      },
      sound: { freq: 1108.73, type: 'sawtooth' },
      missions: [
        { 
          name: "Week 1-2: Deploy All Projects",
          description: "10-20 hours total",
          tasks: [
            "Review Deployment Platforms (1 hour)",
            "Environment Variables (1 hour)",
            "Deploy Each Project (6-12 hours)",
            "Custom Domains (Optional) (1 hour)",
            "Monitoring & Logging (1-2 hours)",
            "CI/CD Basics (1-2 hours)",
            "Performance Optimization (1-2 hours)",
            "Security: Production Security Review (1 hour)"
          ],
          missionEmoji: "☁️",
          taskSound: { freq: 1150, type: 'sawtooth' }
        }
      ]
    },
    {
      id: 12,
      title: "CAPSTONE PROJECT",
      icon: Trophy,
      emoji: "👑",
      pixelArt: "skull",
      characterImage: phase12Image,
      stageBg: stage12Bg,
      missionBackgrounds: [s12_m1, s12_m2, s12_m3, s12_m4],
      theme: {
        bg: "from-black via-red-950 to-purple-950",
        card: "bg-gradient-to-br from-red-900 to-purple-900",
        border: "border-red-950",
        glow: "shadow-red-950/90",
        particle: "bg-red-700"
      },
      sound: { freq: 1174.66, type: 'square' },
      missions: [
        { 
          name: "Week 1: Planning & Design",
          description: "3-5 hours total",
          tasks: [
            "Choose Your Idea (1 hour)",
            "Feature Planning (1-2 hours)",
            "Database Design (1-2 hours)",
            "Wireframes (1 hour)"
          ],
          missionEmoji: "💀",
          taskSound: { freq: 1200, type: 'square' }
        },
        { 
          name: "Week 2: Backend Development",
          description: "5-15 hours total",
          tasks: [
            "Project Setup (1 hour)",
            "Authentication (2-3 hours)",
            "Core API Routes (6-10 hours)",
            "Advanced Features (2-4 hours)"
          ],
          missionEmoji: "⚰️",
          taskSound: { freq: 1250, type: 'square' }
        },
        { 
          name: "Week 3: Frontend Development",
          description: "7-15 hours total",
          tasks: [
            "React Setup (1 hour)",
            "Auth Pages (2-3 hours)",
            "Main Pages (8-10 hours)",
            "Styling (2-4 hours)"
          ],
          missionEmoji: "👻",
          taskSound: { freq: 1300, type: 'square' }
        },
        { 
          name: "Week 4: Polish & Deploy",
          description: "5-10 hours total",
          tasks: [
            "Testing (2-3 hours)",
            "Security Implementation (2-3 hours)",
            "Code Quality (1-2 hours)",
            "Documentation (1-2 hours)",
            "Deployment (1-2 hours)",
            "Final Polish (1 hour)"
          ],
          missionEmoji: "🏆",
          taskSound: { freq: 1350, type: 'square' }
        }
      ]
    }
  ];
  const handleStageClick = (stage) => {
    playSound(stage.sound.freq, 0.3, stage.sound.type);
    setSelectedStage(stage);
    setSelectedMission(null);
    setCurrentMissionIndex(0); // Reset to first mission
  };

  const handleCloseStage = () => {
    playSound(400, 0.2, 'sine', 0.2);
    setSelectedStage(null);
    setSelectedMission(null);
  };

  const handleStageHover = (stage) => {
    if (hoveredStage?.id !== stage?.id) {
      playSound(stage.sound.freq * 0.5, 0.1, stage.sound.type, 0.15);
    }
    setHoveredStage(stage);
  };

  const handleMissionClick = (stage, mission, missionIdx) => {
    playSound(mission.taskSound.freq, 0.2, mission.taskSound.type, 0.25);
    const key = `${stage.id}-${missionIdx}`;
    setSelectedMission(selectedMission === key ? null : key);
  };

  const handleTaskComplete = (stage, missionIdx, taskIdx) => {
    const key = `${stage.id}-${missionIdx}-${taskIdx}`;
    playSound(1400 + taskIdx * 50, 0.15, 'sine', 0.2);
    setCompletedTasks(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleNextMission = () => {
    if (!selectedStage) return;
    
    setIsTransitioning(true);
    playSound(1200, 0.3, 'square', 0.2);
    
    setTimeout(() => {
      if (currentMissionIndex < selectedStage.missions.length - 1) {
        // Next mission in same stage
        setCurrentMissionIndex(prev => prev + 1);
      } else {
        // Move to next stage
        const nextStageIndex = stages.findIndex(s => s.id === selectedStage.id) + 1;
        if (nextStageIndex < stages.length) {
          setSelectedStage(stages[nextStageIndex]);
          setCurrentMissionIndex(0);
        }
      }
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 300);
  };
  
  const handlePreviousMission = () => {
    if (!selectedStage) return;
    
    setIsTransitioning(true);
    playSound(1000, 0.3, 'square', 0.2);
    
    setTimeout(() => {
      if (currentMissionIndex > 0) {
        // Previous mission in same stage
        setCurrentMissionIndex(prev => prev - 1);
      } else {
        // Move to previous stage
        const prevStageIndex = stages.findIndex(s => s.id === selectedStage.id) - 1;
        if (prevStageIndex >= 0) {
          const prevStage = stages[prevStageIndex];
          setSelectedStage(prevStage);
          setCurrentMissionIndex(prevStage.missions.length - 1);
        }
      }
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 300);
  };

  return (
    <div className="min-h-screen">
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} playSound={playSound} />
      
      {activeTab === 'quest' && <QuestLogTab />}
      {activeTab === 'loot' && <LootTableTab />}
      {activeTab === 'achievements' && <AchievementsTab completedTasks={completedTasks} stages={stages} />}
      {activeTab === 'wisdom' && <DailyWisdomTab />}
      {activeTab === 'endgame' && <EndgameTab />}
      
      {activeTab === 'roadmap' && (
        <div 
          className="min-h-screen p-4 sm:p-6 md:p-8 pt-20 md:pt-24 overflow-hidden relative"
          style={{
            backgroundImage: `url(${worldMapBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'scroll',
            imageRendering: 'pixelated'
          }}
        >
          {/* Dark overlay for better readability */}
          <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
          
          {/* Content wrapper with relative positioning */}
          <div className="relative z-10">
            
      {!selectedStage ? (
        /* STAGE SELECTION VIEW */
        <div className="max-w-7xl mx-auto">
          <PixelatedTitle />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              const isHovered = hoveredStage?.id === stage.id;
              
              return (
                <div
                  key={stage.id}
                  className="relative group animate-float-slow"
                  style={{ 
                    animationDelay: `${idx * 100}ms`,
                    animationDuration: `${3 + (idx % 3)}s`
                  }}
                >
                  {/* Animated particles */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-1 h-1 ${stage.theme.particle} rounded-full animate-ping`}
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 2}s`,
                          animationDuration: `${2 + Math.random() * 2}s`
                        }}
                      />
                    ))}
                  </div>

                  {/* Stage card */}
                  <div
                    onClick={() => handleStageClick(stage)}
                    onMouseEnter={() => handleStageHover(stage)}
                    onMouseLeave={() => setHoveredStage(null)}
                    className={`
                      relative cursor-pointer p-6 rounded-lg border-4 
                      ${stage.theme.border}
                      overflow-hidden
                      transform transition-all duration-500
                      ${isHovered ? 'scale-105 -translate-y-2' : 'scale-100'}
                      shadow-2xl ${stage.theme.glow}
                      hover:shadow-3xl
                    `}
                    style={{
                      imageRendering: 'pixelated'
                    }}
                  >
                    {/* Stage card background image */}
                    <div 
                      className="absolute inset-0 opacity-80"
                      style={{
                        backgroundImage: `url(${stage.stageBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        imageRendering: 'pixelated',
                        filter: isHovered ? 'brightness(1.2)' : 'brightness(1)'
                      }}
                    />
                    
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stage.theme.bg} opacity-40`} />
                    
                    {/* Content wrapper */}
                    <div className="relative z-10">
                      {/* Stage number badge */}
                      <div className={`absolute -top-9 -left-9 md:-top-10 md:-left-10 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${stage.theme.bg} rounded-sm flex items-center justify-center border-3 md:border-4 border-white shadow-lg transform group-hover:rotate-12 transition-transform duration-300`} style={{imageRendering: 'pixelated'}}>
                        <span className="text-white font-black text-base md:text-lg pixel-text">{stage.id}</span>
                      </div>
                  
                      {/* Pixel Art Icon */}
                      <div className={`mb-3 md:mb-4 transform transition-all duration-500 ${isHovered ? 'scale-125' : 'scale-100'}`}>
                        <PixelArt type={stage.pixelArt} className="w-16 h-16 md:w-20 md:h-20 mx-auto" />
                      </div>
                  
                      {/* Title */}
                      <h2 className="text-xs sm:text-sm md:text-base lg:text-lg font-black text-center mb-3 md:mb-4 leading-tight pixel-text uppercase px-2">
                        {stage.title}
                      </h2>
                  
                      {/* Click indicator */}
                      <div className="text-center text-[10px] md:text-xs font-black mt-3 md:mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pixel-text">
                        &gt; CLICK TO ENTER &lt;
                      </div>
                    </div>
                  </div>
                </div>

                  {/* Glow effect on hover */}
                  {isHovered && (
                    <div className={`absolute inset-0 bg-gradient-to-br ${stage.theme.bg} opacity-20 rounded-2xl blur-xl -z-10 animate-pulse`} />
                  )}
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <div className="mt-16 text-center text-purple-300">
            <p className="text-sm font-semibold pixel-text">🎮 CLICK EACH STAGE TO BEGIN YOUR QUEST 🎮</p>
          </div>
        </div>
      ) : (
  /* STAGE DETAIL VIEW - Single Mission at a Time */
  <div className="min-h-screen relative">
    {/* Transition Overlay */}
    <div className={`
      fixed inset-0 bg-black z-50 pointer-events-none transition-opacity duration-300
      ${isTransitioning ? 'opacity-100' : 'opacity-0'}
    `}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="pixel-text text-white text-4xl animate-pulse">
          LOADING...
        </div>
      </div>
    </div>

    {/* Mission Background */}
    <div 
      className="min-h-screen p-4 md:p-8 relative overflow-hidden transition-all duration-500"
      style={{
        backgroundImage: `url(${selectedStage.missionBackgrounds[currentMissionIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll',
        imageRendering: 'pixelated',
        opacity: isTransitioning ? 0.5 : 1
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Enhanced gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${selectedStage.theme.bg} opacity-30`}></div>
      
      {/* Pixel Grid */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 ${selectedStage.theme.particle} rounded-full opacity-30 animate-float-particle`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={handleCloseStage}
            className="px-4 md:px-6 py-2 md:py-3 bg-black/70 hover:bg-black/90 text-white font-black rounded-sm backdrop-blur transition-all duration-300 hover:scale-105 border-3 md:border-4 border-white/50 pixel-text active:scale-95 text-[10px] md:text-xs"
            style={{imageRendering: 'pixelated'}}
          >
            <span className="hidden sm:inline">&lt; BACK TO MAP</span>
            <span className="sm:hidden">&lt; BACK</span>
          </button>
          
          <div className={`px-3 md:px-6 py-2 md:py-3 bg-white/30 backdrop-blur rounded-sm border-2 md:border-4 ${selectedStage.theme.border} pixel-text`}>
            <span className="font-black text-white text-[10px] sm:text-xs md:text-sm lg:text-base">
              S{selectedStage.id} M{currentMissionIndex + 1}/{selectedStage.missions.length}
            </span>
          </div>
        </div>

        {/* Stage Title Card */}
        <div className="bg-black/60 backdrop-blur rounded-sm p-4 md:p-8 mb-4 md:mb-8 border-4 md:border-8 border-white/80 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="transform animate-float flex-shrink-0">
              <PixelArt type={selectedStage.pixelArt} className="w-20 h-20 md:w-32 md:h-32" />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-black mb-2 md:mb-3 text-white pixel-text drop-shadow-lg uppercase tracking-wider">
                {selectedStage.title}
              </h1>
              <div className="flex flex-wrap gap-2 md:gap-3 items-center justify-center md:justify-start">
                <div className="px-3 md:px-4 py-1 md:py-2 bg-white/20 rounded-sm border-2 border-white/40 pixel-text text-white font-bold text-[8px] md:text-xs">
                  {selectedStage.missions[currentMissionIndex].name}
                </div>
              </div>
            </div>
            
            <div className="hidden md:block flex-shrink-0 animate-float">
              <img 
                src={selectedStage.characterImage}
                alt={`Character Stage ${selectedStage.id}`}
                className="h-24 md:h-32 lg:h-40 w-auto object-contain rounded-lg border-4 border-white/50 transition-transform duration-300 hover:scale-110"
                style={{ 
                  imageRendering: 'auto',
                  filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.5))'
                }}
              />
            </div>
          </div>
        </div>

        {/* Current Mission */}
        <div className="mb-8">
          <MissionCard 
            mission={selectedStage.missions[currentMissionIndex]}
            mIdx={currentMissionIndex}
            selectedStage={selectedStage}
            selectedMission={`${selectedStage.id}-${currentMissionIndex}`}
            completedTasks={completedTasks}
            expandedTasks={expandedTasks}   
            setExpandedTasks={setExpandedTasks}   
            handleMissionClick={() => {}}
            handleTaskComplete={handleTaskComplete}
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 px-2 sm:px-4">
          <button
            onClick={handlePreviousMission}
            disabled={selectedStage.id === 1 && currentMissionIndex === 0}
            className={`
              w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 
              hover:from-blue-500 hover:to-cyan-500
              text-white font-black rounded-sm border-3 md:border-4 border-blue-900 
              pixel-text text-xs md:text-sm transform hover:scale-105 transition-all duration-300 
              shadow-lg hover:shadow-2xl active:scale-95
              ${selectedStage.id === 1 && currentMissionIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}
            `}
            style={{imageRendering: 'pixelated'}}
          >
            <span className="hidden sm:inline">&lt;&lt; PREVIOUS</span>
            <span className="sm:hidden">&lt;&lt; PREV</span>
          </button>

          <div className="text-center pixel-text text-white text-[10px] md:text-xs bg-black/50 px-3 md:px-4 py-2 rounded-sm border-2 border-white/30 whitespace-nowrap">
            MISSION {currentMissionIndex + 1} / {selectedStage.missions.length}
          </div>

          <button
            onClick={handleNextMission}
            disabled={selectedStage.id === 12 && currentMissionIndex === selectedStage.missions.length - 1}
            className={`
              w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-pink-600 
              hover:from-purple-500 hover:to-pink-500
              text-white font-black rounded-sm border-3 md:border-4 border-purple-900 
              pixel-text text-xs md:text-sm transform hover:scale-105 transition-all duration-300 
              shadow-lg hover:shadow-2xl active:scale-95
              ${selectedStage.id === 12 && currentMissionIndex === selectedStage.missions.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}
            `}
            style={{imageRendering: 'pixelated'}}
          >
            NEXT &gt;&gt;
          </button>
        </div>
      </div>
    </div>
  </div>
)}
          </div>
        </div>
      )}

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        
        .pixel-text {
          font-family: 'Press Start 2P', cursive;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: none;
          -moz-osx-font-smoothing: grayscale;
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.2;
            transform: scale(1.1);
          }
        }
        
        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 20px rgba(255,255,255,0.5),
                         0 0 30px rgba(255,255,255,0.3);
          }
          50% {
            text-shadow: 0 0 30px rgba(255,255,255,0.8),
                         0 0 40px rgba(255,255,255,0.5),
                         0 0 50px rgba(255,255,255,0.3);
          }
        }
        
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        * {
          image-rendering: -moz-crisp-edges;
          image-rendering: -webkit-crisp-edges;
          image-rendering: pixelated;
          image-rendering: crisp-edges;
        }
        
        @keyframes slidePattern {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 100px 100px;
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
        }
        
        .animate-float-slow {
          animation: float-slow 3s ease-in-out infinite;
        }
        
        .animate-float-particle {
          animation: float-particle 4s ease-in-out infinite;
        }

        /* Mobile-specific adjustments */
        @media (max-width: 640px) {
          .pixel-text {
            letter-spacing: 0;
          }
          
          /* Reduce particle count on mobile for performance */
          .animate-float-particle:nth-child(n+8) {
            display: none;
          }
        }
        
        /* Smooth background scaling */
        @media (min-width: 1024px) {
          .stage-detail-bg {
            background-attachment: fixed;
          }
        }
        
        /* Prevent horizontal scroll */
        body {
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
};

export default LearningRoadmap;
