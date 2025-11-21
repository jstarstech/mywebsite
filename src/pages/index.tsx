import Link from "next/link";

export default function Home() {
  return (
    <main className="pt-16">
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I&apos;m
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              &nbsp;Maksim
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full Stack Developer & Creative Problem Solver
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            I build beautiful, functional web applications that solve real-world
            problems. Passionate about clean code, user experience, and
            continuous learning.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="portfolio"
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              View My Work
            </Link>
            <Link
              href="contact"
              className="px-8 py-3 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-700 transition-colors border border-purple-500/30"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
