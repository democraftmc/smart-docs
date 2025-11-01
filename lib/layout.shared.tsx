import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <img src="/logo.png" alt="Smart Logo" className="h-6 w-6 rounded-lg" />
          <span className="font-bold text-lg">
            Smart
          </span>
        </>
      ),
    },
  };
}