"use client"

import Link from "next/link"
import { Twitter, Instagram, Linkedin } from "lucide-react"
import { useLanguage } from "./language-provider"

export default function Footer() {
  const { t, language } = useLanguage()

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-blue-600 font-bold text-xl">
              ConvoSync
            </Link>
            <p className="mt-4 text-gray-600 max-w-md">
              {language === "ko"
                ? "AI 기반 대화 관리 및 스마트 답장 제안으로 디지털 커뮤니케이션을 간소화합니다."
                : "Simplifying digital communication with AI-powered conversation management and smart reply suggestions."}
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">{language === "ko" ? "제품" : "Product"}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
                  {language === "ko" ? "기능" : "Features"}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  {language === "ko" ? "가격" : "Pricing"}
                </Link>
              </li>
              <li>
                <Link href="#beta" className="text-gray-600 hover:text-blue-600 transition-colors">
                  {language === "ko" ? "베타 프로그램" : "Beta Program"}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  {language === "ko" ? "로드맵" : "Roadmap"}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">{language === "ko" ? "회사" : "Company"}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  {language === "ko" ? "소개" : "About"}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  {language === "ko" ? "블로그" : "Blog"}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  {language === "ko" ? "채용" : "Careers"}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  {language === "ko" ? "문의하기" : "Contact"}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2025 ConvoSync. {language === "ko" ? "모든 권리 보유." : "All rights reserved."}
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link href="#" className="text-gray-500 hover:text-gray-900 text-sm">
                {language === "ko" ? "개인정보 처리방침" : "Privacy Policy"}
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900 text-sm">
                {language === "ko" ? "서비스 이용약관" : "Terms of Service"}
              </Link>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2 justify-center">
            <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">#답장고민끝</span>
            <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">#SmartReply</span>
            <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">#ConvoSync</span>
            <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
              {language === "ko" ? "#통합메시지함" : "#UnifiedInbox"}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
