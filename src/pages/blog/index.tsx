import { ExternalLink } from "lucide-react";
import { blogPosts } from "../../app/data";

export default function Blog() {
  return (
    <main className="pt-16">
      <section className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Blog
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Thoughts, tutorials, and insights
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:transform hover:scale-105"
              >
                <div className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm mb-4">
                  {post.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{post.date}</p>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <button className="text-purple-400 hover:text-purple-300 font-semibold flex items-center">
                  Read More <ExternalLink size={16} className="ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
