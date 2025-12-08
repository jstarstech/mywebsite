import React from 'react'

import type { ContentBlock as ContactsInfoBlockProps } from '@/payload-types'
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export const ContactsInfoBlock: React.FC<ContactsInfoBlockProps> = (_props) => {
  return (
    // <div className="grid md:grid-cols-2 gap-8">
    <>
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
        <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Mail className="text-purple-400" size={24} />
            <div>
              <p className="text-gray-400 text-sm">Email</p>
              <p className="text-white">your.email@example.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Github className="text-purple-400" size={24} />
            <div>
              <p className="text-gray-400 text-sm">GitHub</p>
              <p className="text-white">
                <Link href="https://github.com/jstarstech" target="_blank">
                  github.com/jstarstech
                </Link>
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Linkedin className="text-purple-400" size={24} />
            <div>
              <p className="text-gray-400 text-sm">LinkedIn</p>
              <p className="text-white">
                <Link href="https://www.linkedin.com/in/maxim-chercasov-84894021" target="_blank">
                  linkedin.com/in/maxim-chercasov-84894021
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
