import { Mail } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import LinkedInIcon from "@/components/LinkedInIcon";

export default function Contact() {
  return (
    <main className="pt-16">
      <section className="min-h-screen py-20 px-4 flex items-center">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Let&apos;s work together on your next project
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="text-purple-400" size={24} />
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">your.email@example.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <SiGithub className="text-purple-400" size={24} />
                  <div>
                    <p className="text-gray-400 text-sm">GitHub</p>
                    <p className="text-white">github.com/jstarstech</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <LinkedInIcon className="text-purple-400" size={24} />
                  <div>
                    <p className="text-gray-400 text-sm">LinkedIn</p>
                    <p className="text-white">linkedin.com/in/yourprofile</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send a Message
              </h3>

              <form className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-slate-900 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 bg-slate-900 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 bg-slate-900 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
