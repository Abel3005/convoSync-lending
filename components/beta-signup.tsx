"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"

export default function BetaSignup() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      setError("Please enter your email address")
      return
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    // Here you would typically send the email to your backend
    console.log("Email submitted:", email)
    setSubmitted(true)
    setError("")
  }

  return (
    <section id="beta" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-8 md:p-12 shadow-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Beta Program</h2>
            <p className="text-blue-100 text-xl mb-8">
              Be among the first to experience ConvoSync and help shape the future of digital communication.
            </p>

            {submitted ? (
              <div className="bg-white bg-opacity-20 rounded-lg p-6 backdrop-blur-sm">
                <p className="text-white text-xl font-medium">Thank you for joining our beta!</p>
                <p className="text-blue-100 mt-2">We'll be in touch soon with next steps.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <div className="flex-grow">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className={`w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white ${
                      error ? "border-2 border-red-300" : ""
                    }`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {error && <p className="mt-2 text-sm text-red-200 text-left">{error}</p>}
                </div>
                <button
                  type="submit"
                  className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors flex items-center justify-center"
                >
                  <span>Get Early Access</span>
                  <Send size={18} className="ml-2" />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-4">As featured in</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            <div className="h-8 w-32 bg-gray-200 rounded"></div>
            <div className="h-8 w-32 bg-gray-200 rounded"></div>
            <div className="h-8 w-32 bg-gray-200 rounded"></div>
            <div className="h-8 w-32 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
