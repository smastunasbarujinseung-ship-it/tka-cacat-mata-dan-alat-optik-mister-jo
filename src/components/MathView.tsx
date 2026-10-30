import React, { useMemo } from 'react';
import katex from 'katex';

interface MathViewProps {
  latex: string;
  displayMode?: boolean;
  fallbackText?: string;
  className?: string;
}

export const MathView: React.FC<MathViewProps> = ({
  latex,
  displayMode = false,
  fallbackText,
  className = ''
}) => {
  const renderedHtml = useMemo(() => {
    try {
      return katex.renderToString(latex, {
        displayMode,
        throwOnError: false,
        output: 'htmlAndMathml'
      });
    } catch {
      return null;
    }
  }, [latex, displayMode]);

  if (renderedHtml) {
    return (
      <span
        className={`math-rendered font-mono inline-block overflow-x-auto max-w-full align-middle ${className}`}
        dangerouslySetInnerHTML={{ __html: renderedHtml }}
      />
    );
  }

  // Graceful fallback if KaTeX fails
  const cleanFallback =
    fallbackText ||
    latex
      .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1 / $2)')
      .replace(/\\left\|/g, '|')
      .replace(/\\right\|/g, '|')
      .replace(/\\times/g, ' × ')
      .replace(/\\cdot/g, ' · ')
      .replace(/\\approx/g, ' ≈ ')
      .replace(/\\infty/g, '∞')
      .replace(/\\Delta/g, 'Δ')
      .replace(/\\text\{([^}]+)\}/g, '$1')
      .replace(/[{}\\_$^]/g, ' ');

  return (
    <span className={`font-mono text-rose-900 bg-rose-50 px-2 py-0.5 rounded border border-rose-200 text-sm ${className}`}>
      {cleanFallback}
    </span>
  );
};
