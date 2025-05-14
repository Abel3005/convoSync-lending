"use client"

import { useLanguage } from "./language-provider"

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
      aria-label={language === "ko" ? "Switch to English" : "한국어로 전환"}
    >
      <span className="text-lg">{language === "ko" ? "🇺🇸" : "🇰🇷"}</span>
    </button>
  )
}
