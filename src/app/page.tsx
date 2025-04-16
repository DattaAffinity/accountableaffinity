
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-sans">
      <section className="py-20 text-center bg-blue-50">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Bienvenue sur Accountable Affinity
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Site multilingue 🇫🇷 🇬🇧 🇳🇱 prêt à l’emploi pour les entreprises.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
          Commencer maintenant
        </button>
      </section>

      <footer className="py-6 text-center text-sm text-gray-500 bg-white">
        © 2025 AccountableAffinity. Tous droits réservés.
      </footer>
    </main>
  );
}
