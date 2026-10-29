import type { Metadata } from 'next';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import './globals.css';
import { SiteShell } from '@/components/SiteShell';
export const metadata: Metadata = { title: { default:'Titus Trails | Walk lightly', template:'%s | Titus Trails' }, description:'Practical, respectful information for community conservancy trails and cultural-eco walks across Africa.' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body><SiteShell>{children}</SiteShell></body></html> }
