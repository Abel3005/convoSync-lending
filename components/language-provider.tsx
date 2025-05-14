"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "ko" | "en"

type LanguageContextType = {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const translations = {
  // Navbar
  "nav.features": {
    ko: "기능",
    en: "Features",
  },
  "nav.testimonials": {
    ko: "사용후기",
    en: "Testimonials",
  },
  "nav.beta": {
    ko: "베타 신청",
    en: "Join Beta",
  },
  "nav.earlyAccess": {
    ko: "베타 신청하기",
    en: "Get Early Access",
  },

  // Hero
  "hero.title": {
    ko: "모든 메시지를 한곳에서, 답장은 똑똑하게.",
    en: "All your messages in one place. Smart replies, simplified.",
  },
  "hero.subtitle": {
    ko: "여러 앱의 메시지를 한 곳에서 확인하고, AI가 제안하는 맞춤형 답장으로 빠르게 응답하세요.",
    en: "View messages from multiple apps in one place and respond quickly with AI-suggested personalized replies.",
  },
  "hero.cta": {
    ko: "베타 신청하기",
    en: "Join Beta",
  },
  "hero.learnMore": {
    ko: "더 알아보기",
    en: "Learn More",
  },
  "hero.inputPlaceholder": {
    ko: "금요일에 뭐해?",
    en: "What are you doing Friday?",
  },
  "hero.generateButton": {
    ko: "답장 제안 보기",
    en: "Generate Reply",
  },
  "hero.copy": {
    ko: "복사",
    en: "Copy",
  },
  "hero.copied": {
    ko: "복사됨",
    en: "Copied",
  },
  "hero.suggestion1": {
    ko: "금요일에는 친구들과 저녁 약속이 있어요. 혹시 같이 할래요?",
    en: "I have dinner plans with friends on Friday. Would you like to join us?",
  },
  "hero.suggestion2": {
    ko: "아직 확실한 계획은 없어요. 뭐 재미있는 거 하실래요?",
    en: "I don't have any solid plans yet. Did you have something fun in mind?",
  },
  "hero.sendVia": {
    ko: "다음으로 전송:",
    en: "Send via:",
  },
  "hero.demoDisclaimer": {
    ko: "* 데모에서는 실제 메시지가 전송되지 않습니다.",
    en: "* No actual messages are sent in this demo.",
  },
  "hero.messagesFrom": {
    ko: "받은 메시지 앱: KakaoTalk, Instagram, iMessage",
    en: "Messages from: KakaoTalk, Instagram, iMessage",
  },
  "hero.unifiedDemo": {
    ko: "메시지 통합 데모",
    en: "Unified Messages Demo",
  },
  "hero.conversationWith": {
    ko: "김민수와의 대화",
    en: "Conversation with Kim Min-su",
  },
  "hero.suggestedReplies": {
    ko: "답장 제안:",
    en: "Suggested replies:",
  },

  // Features
  "features.title": {
    ko: "ConvoSync 주요 기능",
    en: "How ConvoSync Works",
  },
  "features.subtitle": {
    ko: "디지털 소통을 더 쉽게 만들어주는 강력한 기능들",
    en: "Our platform simplifies your digital communication life with these powerful features",
  },
  "features.unified.title": {
    ko: "통합 메시지함",
    en: "Unified Inbox",
  },
  "features.unified.description": {
    ko: "카카오톡, 인스타그램, 아이메시지 등 모든 메시징 앱을 한 곳에서 연결하세요.",
    en: "Connect all your messaging apps in one place. No more switching between KakaoTalk, Instagram, iMessage, and others.",
  },
  "features.smart.title": {
    ko: "스마트 답장 제안",
    en: "Smart Reply Suggestions",
  },
  "features.smart.description": {
    ko: "당신의 말투와 스타일에 맞는 맞춤형 답장 초안으로 효율적으로 대화하세요.",
    en: "Get personalized, context-aware reply drafts that match your tone and style, helping you respond efficiently.",
  },
  "features.relief.title": {
    ko: "감정적 부담 완화",
    en: "Emotional Relief",
  },
  "features.relief.description": {
    ko: "지치거나 부담스러울 때 답장을 고민하는 정신적 부담을 줄이세요. ConvoSync가 대화를 이어가는데 도움을 드립니다.",
    en: "Reduce the mental load of crafting responses when you're tired or overwhelmed. Let ConvoSync help carry the conversation.",
  },
  "features.action.title": {
    ko: "실제 작동 모습",
    en: "See it in action",
  },
  "features.action.description": {
    ko: "ConvoSync는 대화 맥락을 분석하고 당신처럼 들리는 맞춤형 답장을 제안합니다. 더 이상 무슨 말을 해야 할지 고민하며 화면을 응시할 필요가 없습니다.",
    en: "ConvoSync analyzes conversation context and suggests personalized replies that sound like you. No more staring at the screen wondering what to say.",
  },
  "features.style": {
    ko: "당신의 글쓰기 스타일에 맞는 답장 제안",
    en: "Suggests replies based on your writing style",
  },
  "features.context": {
    ko: "다양한 관계와 상황에 맞게 적응",
    en: "Adapts to different relationships and contexts",
  },
  "features.tired": {
    ko: "지치거나 부담스러울 때 답장 도움",
    en: "Helps you respond when you're tired or overwhelmed",
  },

  // Testimonials
  "testimonials.title": {
    ko: "사용자 후기",
    en: "What Our Users Say",
  },
  "testimonials.subtitle": {
    ko: "사람들이 이미 일상 생활에서 ConvoSync의 혜택을 경험하고 있습니다",
    en: "People are already experiencing the benefits of ConvoSync in their daily lives",
  },
  "testimonials.quote1": {
    ko: "ConvoSync는 제 소셜 미디어 DM을 관리하는 데 게임 체인저였어요. 답장 제안이 정확하고 시간을 많이 절약해줍니다!",
    en: "ConvoSync has been a game-changer for managing my social media DMs. The reply suggestions are spot-on and save me so much time!",
  },
  "testimonials.name1": {
    ko: "김지연",
    en: "Sarah Johnson",
  },
  "testimonials.title1": {
    ko: "소셜 미디어 매니저",
    en: "Social Media Manager",
  },
  "testimonials.quote2": {
    ko: "메시지 답장에 불안감을 느끼는 사람으로서, 이 도구는 정말 구세주예요. 부담스러울 때도 사려 깊은 답장을 작성하는 데 도움을 줍니다.",
    en: "As someone who gets anxious about responding to messages, this tool has been a lifesaver. It helps me craft thoughtful responses even when I'm feeling overwhelmed.",
  },
  "testimonials.name2": {
    ko: "박민수",
    en: "Michael Chen",
  },
  "testimonials.title2": {
    ko: "UX 디자이너",
    en: "UX Designer",
  },

  // Beta
  "beta.title": {
    ko: "베타 프로그램 참여하기",
    en: "Join Our Beta Program",
  },
  "beta.subtitle": {
    ko: "ConvoSync를 가장 먼저 경험하고 디지털 커뮤니케이션의 미래를 함께 만들어가세요.",
    en: "Be among the first to experience ConvoSync and help shape the future of digital communication.",
  },
  "beta.thanks": {
    ko: "베타 프로그램 참여에 감사드립니다!",
    en: "Thank you for joining our beta!",
  },
  "beta.next": {
    ko: "곧 다음 단계에 대해 연락드리겠습니다.",
    en: "We'll be in touch soon with next steps.",
  },
  "beta.email": {
    ko: "이메일 주소를 입력하세요",
    en: "Enter your email address",
  },
  "beta.submit": {
    ko: "베타 신청하기",
    en: "Get Early Access",
  },
  "beta.error.empty": {
    ko: "이메일 주소를 입력해주세요",
    en: "Please enter your email address",
  },
  "beta.error.invalid": {
    ko: "유효한 이메일 주소를 입력해주세요",
    en: "Please enter a valid email address",
  },
  "beta.featured": {
    ko: "다음에 소개되었습니다",
    en: "As featured in",
  },
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ko")

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ko" ? "en" : "ko"))
  }

  const t = (key: string) => {
    return translations[key as keyof typeof translations]?.[language] || key
  }

  return <LanguageContext.Provider value={{ language, toggleLanguage, t }}>{children}</LanguageContext.Provider>
}
