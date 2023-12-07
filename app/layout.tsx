import 'server-only';
import '@/app/ui/global.css';
import '@mantine/core/styles.css';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs'

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <ColorSchemeScript />
        </head>
        <body className={`${inter.className} antialiased`}>
          <MantineProvider defaultColorScheme="auto">
            {children}
          </MantineProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
