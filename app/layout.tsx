import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import SearchDialog from '@/components/search';
import type { Metadata } from 'next/types';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Smart',
    default: 'Smart',
  },
  description: 'Dynamically create & delete server, with ANY provider, and the magic of RustyConnector',
  metadataBase: new URL('https://smart.democraft.fr'),
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={plusJakartaSans.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
        search={{
              SearchDialog,
                }}
        >{children}</RootProvider>
      </body>
    </html>
  );
}
