import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

const COMMANDS = [
  { id: "home", title: "Go to Home Page", category: "Navigation", url: "/" },
  { id: "about", title: "Go to About Page", category: "Navigation", url: "/about" },
  { id: "projects", title: "Go to Projects Page", category: "Navigation", url: "/projects" },
  { id: "contact", title: "Go to Contact Page", category: "Navigation", url: "/contact" },
  { id: "resume", title: "Download Resume PDF", category: "Resources", url: "/Felix_Resume.pdf", external: true },
  { id: "github", title: "Visit GitHub Profile", category: "External", url: "https://github.com/iamfelix-s", external: true },
  { id: "linkedin", title: "Visit LinkedIn Profile", category: "External", url: "https://linkedin.com", external: true },
];

export const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef(null);
  const modalRef = useRef(null);

  // Toggle Command Palette
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      setActiveIndex(0);
      setSearch("");
    }
  }, [isOpen]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Filter commands
  const filteredCommands = COMMANDS.filter((cmd) =>
    cmd.title.toLowerCase().includes(search.toLowerCase()) ||
    cmd.category.toLowerCase().includes(search.toLowerCase())
  );

  // Handle navigate/action
  const executeCommand = (cmd) => {
    setIsOpen(false);
    if (cmd.external) {
      window.open(cmd.url, "_blank", "noopener,noreferrer");
    } else {
      router.push(cmd.url);
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % filteredCommands.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredCommands[activeIndex]) {
        executeCommand(filteredCommands[activeIndex]);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4 bg-dark/60 dark:bg-black/80 backdrop-blur-md transition-all duration-300">
      <div
        ref={modalRef}
        className="glass-card max-w-[540px] w-full rounded-2xl border border-dark/15 dark:border-white/10 shadow-2xl overflow-hidden flex flex-col bg-white/90 dark:bg-zinc-950/95"
      >
        {/* Search Input */}
        <div className="p-4 border-b border-dark/10 dark:border-white/5 flex items-center gap-3">
          <svg className="w-5 h-5 text-dark/45 dark:text-light/45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            className="w-full bg-transparent text-dark dark:text-light placeholder-dark/40 dark:placeholder-zinc-500 border-none outline-none focus:ring-0 text-base font-semibold"
            placeholder="Type a command or search..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setActiveIndex(0);
            }}
            onKeyDown={handleKeyDown}
          />
        </div>

        {/* Results List */}
        <div className="max-h-[320px] overflow-y-auto p-2">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((cmd, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={cmd.id}
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center justify-between transition-all duration-150 ${
                    isActive
                      ? "bg-indigo-500 text-white shadow-md scale-[1.01]"
                      : "text-dark/80 dark:text-zinc-300 hover:bg-dark/5 dark:hover:bg-white/5"
                  }`}
                  onClick={() => executeCommand(cmd)}
                  onMouseEnter={() => setActiveIndex(idx)}
                >
                  <div className="flex flex-col">
                    <span className="text-sm font-bold tracking-tight">{cmd.title}</span>
                    <span className={`text-[10px] uppercase font-bold tracking-wider ${isActive ? "text-indigo-200" : "text-dark/40 dark:text-zinc-500"}`}>
                      {cmd.category}
                    </span>
                  </div>
                  {isActive && (
                    <span className="text-xs font-semibold bg-white/20 px-2 py-0.5 rounded text-white tracking-tight">
                      Enter
                    </span>
                  )}
                </button>
              );
            })
          ) : (
            <div className="p-8 text-center text-sm font-semibold text-dark/40 dark:text-zinc-500">
              No commands found matching &quot;{search}&quot;
            </div>
          )}
        </div>

        {/* Keyboard Instructions Footer */}
        <div className="p-3 bg-dark/5 dark:bg-white/5 border-t border-dark/10 dark:border-white/5 flex items-center justify-between text-[10px] font-black uppercase tracking-wider text-dark/40 dark:text-zinc-500">
          <div className="flex gap-2">
            <span>↑↓ Navigate</span>
            <span>⏎ Select</span>
          </div>
          <span>Esc Close</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
