import React, { useState, useEffect } from 'react';
import { Pause, Play } from 'lucide-react';
import { ArchitectureStage } from '../data/portfolio';

export interface WorkflowAnimationProps {
  steps: ArchitectureStage[];
  compact?: boolean;
  autoPlay?: boolean;
  title?: string;
}

/**
 * Shared lightweight CSS/SVG workflow visualizer reading directly from ArchitectureStage[].
 */
export function WorkflowAnimation({
  steps,
  compact = false,
  autoPlay = true,
  title = 'Live Workflow Execution Flow',
}: WorkflowAnimationProps) {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(autoPlay);

  useEffect(() => {
    setActiveIdx(0);
    setIsPlaying(autoPlay);
  }, [steps, autoPlay]);

  useEffect(() => {
    if (!isPlaying || steps.length <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % steps.length);
    }, 2400);

    return () => window.clearInterval(timer);
  }, [isPlaying, steps.length]);

  if (!steps.length) {
    return null;
  }

  const activeStep = steps[activeIdx] ?? steps[0];
  const totalStepsFormatted = String(steps.length).padStart(2, '0');

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 sm:p-5">
      {/* Top Controls & Telemetry Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-sky-700">
            {title}
          </span>
          <span className="text-slate-300">|</span>
          <span className="text-[11px] font-bold text-slate-600">
            Step {activeStep.step} / {totalStepsFormatted}
          </span>
        </div>

        <button
          type="button"
          onClick={() => setIsPlaying((prev) => !prev)}
          aria-pressed={isPlaying}
          className="inline-flex items-center space-x-1.5 bg-white border border-slate-300 hover:border-sky-700 text-slate-800 hover:text-sky-700 px-2.5 py-1 rounded text-[11px] font-bold transition-colors duration-250 ease-out"
        >
          {isPlaying ? (
            <>
              <Pause className="w-3 h-3 text-sky-700" />
              <span>Pause</span>
            </>
          ) : (
            <>
              <Play className="w-3 h-3 text-sky-700 fill-sky-700" />
              <span>Play</span>
            </>
          )}
        </button>
      </div>

      {/* Node & Signal Flow Track */}
      <div className="flex flex-col lg:flex-row lg:items-stretch gap-1.5 lg:gap-0">
        {steps.map((stage, idx) => {
          const isActive = idx === activeIdx;
          const isConnectorLit = idx <= activeIdx || activeIdx === steps.length - 1;
          const showSignal = idx === activeIdx && activeIdx < steps.length - 1;

          return (
            <React.Fragment key={stage.step}>
              <button
                type="button"
                onClick={() => {
                  setIsPlaying(false);
                  setActiveIdx(idx);
                }}
                aria-pressed={isActive}
                className={`flex-1 rounded-lg border text-left transition-all duration-250 ease-out flex flex-col justify-between cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-700 ${
                  compact ? 'p-3' : 'p-3.5 sm:p-4'
                } ${
                  isActive
                    ? 'border-sky-700 bg-slate-950 text-white shadow-sm'
                    : 'border-slate-300 bg-white text-slate-950 hover:border-sky-700'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span
                    className={`px-1.5 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider ${
                      isActive ? 'bg-sky-400 text-slate-950' : 'bg-slate-100 text-sky-700'
                    }`}
                  >
                    {stage.step}
                  </span>
                  {isActive && (
                    <span className="text-[9px] font-bold uppercase tracking-widest text-sky-400">
                      Active
                    </span>
                  )}
                </div>
                <div
                  className={`font-extrabold leading-snug ${
                    compact ? 'text-xs' : 'text-xs sm:text-sm'
                  } ${isActive ? 'text-white' : 'text-slate-950'}`}
                >
                  {stage.title}
                </div>
              </button>

              {idx < steps.length - 1 && (
                <>
                  {/* Desktop Horizontal SVG Connector */}
                  <div
                    className="hidden lg:flex items-center justify-center px-1 shrink-0"
                    aria-hidden="true"
                  >
                    <svg
                      className={`w-7 h-5 transition-colors duration-250 ease-out ${
                        isConnectorLit ? 'text-sky-700' : 'text-slate-300'
                      }`}
                      viewBox="0 0 28 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 10H24M24 10L19 5M24 10L19 15"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      {showSignal && (
                        <circle cx="4" cy="10" r="3" fill="#0369a1" className="animate-signal-x" />
                      )}
                    </svg>
                  </div>

                  {/* Mobile Vertical SVG Connector */}
                  <div className="flex lg:hidden items-center justify-center py-0.5" aria-hidden="true">
                    <svg
                      className={`w-5 h-5 transition-colors duration-250 ease-out ${
                        isConnectorLit ? 'text-sky-700' : 'text-slate-300'
                      }`}
                      viewBox="0 0 20 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 2V18M10 18L5 13M10 18L15 13"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      {showSignal && (
                        <circle cx="10" cy="4" r="2.75" fill="#0369a1" className="animate-signal-y" />
                      )}
                    </svg>
                  </div>
                </>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Fixed-Height Caption Readout Bar */}
      <div className="mt-3 min-h-[72px] sm:min-h-[60px] flex items-center bg-white border border-slate-200 border-l-2 border-l-sky-700 rounded-lg px-4 py-2.5">
        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-sky-700 mr-2">
            STEP {activeStep.step}: {activeStep.title}
          </span>
          <span className="text-xs text-slate-700 leading-relaxed">{activeStep.detail}</span>
        </div>
      </div>
    </div>
  );
}
