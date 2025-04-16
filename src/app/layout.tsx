
import './globals.css'

export const metadata = {
  title: 'AccountableAffinity',
  description: 'App pro multilingue - FR/EN/NL',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
