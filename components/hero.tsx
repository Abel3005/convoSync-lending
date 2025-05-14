"use client"

import { useState } from "react"
import Link from "next/link"
import { useLanguage } from "./language-provider"
import { Copy, Check } from "lucide-react"

export default function Hero() {
  const { t } = useLanguage()
  const [inputValue, setInputValue] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const handleGenerateClick = () => {
    setShowSuggestions(true)
  }

  const handleCopy = (index: number, text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const suggestions = [t("hero.suggestion1"), t("hero.suggestion2")]

  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              <span className="text-blue-600">{t("hero.title")}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">{t("hero.subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#beta"
                className="bg-blue-500 text-white px-6 py-3 rounded-md text-center hover:bg-blue-600 transition-colors"
              >
                {t("hero.cta")}
              </Link>
              <Link
                href="#features"
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md text-center hover:bg-gray-50 transition-colors"
              >
                {t("hero.learnMore")}
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 justify-start">
              <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">#답장고민끝</span>
              <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">#SmartReply</span>
              <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">#ConvoSync</span>
            </div>
          </div>

          <div className="md:w-1/2 bg-white rounded-xl shadow-xl p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">ConvoSync Demo</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="message-input" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <input
                  id="message-input"
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={t("hero.inputPlaceholder")}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </div>

              <button
                onClick={handleGenerateClick}
                className="w-full bg-blue-500 text-white px-4 py-3 rounded-md hover:bg-blue-600 transition-colors"
              >
                {t("hero.generateButton")}
              </button>

              {showSuggestions && (
                <div className="mt-6 space-y-4 transition-opacity duration-300 ease-in-out">
                  <h4 className="text-sm font-medium text-gray-700">Suggested Replies:</h4>
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="bg-blue-50 border border-blue-100 rounded-lg p-4 relative transition-all hover:shadow-md"
                    >
                      <p className="text-gray-800 pr-10">{suggestion}</p>
                      <button
                        onClick={() => handleCopy(index, suggestion)}
                        className="absolute top-3 right-3 text-gray-500 hover:text-blue-600 transition-colors"
                        aria-label={t("hero.copy")}
                      >
                        {copiedIndex === index ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                      </button>
                      {copiedIndex === index && (
                        <span className="absolute -top-2 right-0 text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          {t("hero.copied")}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}
