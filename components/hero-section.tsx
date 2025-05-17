"use client"

import { Dispatch, SetStateAction, useState } from "react"
import { useLanguage } from "./language-provider"
import { Copy, Send, MessageSquare } from "lucide-react"
import Image from "next/image"
import HistoryView, { IphoneChatFrameV2 } from "./mobile-screen"
import { DemoSub } from "./demo-sub"

export default function HeroSection() {
  const { t, language } = useLanguage()
  const [inputValue, setInputValue] = useState("")
  const [showMessages, setShowMessages] = useState(true)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [selectedReply, setSelectedReply] = useState<number | null>(null)
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null)
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const handleGenerateClick = () => {
    setShowSuggestions(true)
  }

  const handleCopy = (index: number, text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const handleReplySelect = (index: number) => {
    setSelectedReply(index)
    setSelectedPlatform(null)
  }

  const handlePlatformSelect = (platform: string) => {
    setSelectedPlatform(platform)
    // In a real app, this would send the reply to the selected platform
    setTimeout(() => {
      setSelectedPlatform(null)
      setSelectedReply(null)
    }, 1500)
  }

  const messages = [
    {
      id: 1,
      text: language === "ko" ? "안녕하세요! 잘 지내셨어요?" : "Hi there! How have you been?",
      platform: "kakao",
      time: "10:30 AM",
    },
    {
      id: 2,
      text: language === "ko" ? "인스타에 올린 사진 정말 멋져요!" : "Your photo on Instagram looks amazing!",
      platform: "instagram",
      time: "11:45 AM",
    },
    {
      id: 3,
      text: language === "ko" ? "금요일에 뭐해?" : "What are you doing Friday?",
      platform: "imessage",
      time: "12:15 PM",
    },
  ]

  const suggestions = [
    language === "ko"
      ? "금요일에는 친구들과 저녁 약속이 있어요. 혹시 같이 할래요?"
      : "I have dinner plans with friends on Friday. Would you like to join us?",
    language === "ko"
      ? "아직 확실한 계획은 없어요. 뭐 재미있는 거 하실래요?"
      : "I don't have any solid plans yet. Did you have something fun in mind?",
  ]

  const platforms = [
    { id: "kakao", name: "KakaoTalk", icon: "/placeholder.svg?height=24&width=24" },
    { id: "instagram", name: "Instagram", icon: "/placeholder.svg?height=24&width=24" },
    { id: "imessage", name: "iMessage", icon: "/placeholder.svg?height=24&width=24" },
  ]

  const [pageIndex, setPageIndex] = useState(0);
  const pageList = [(<HistoryView setIndex={setPageIndex}/>), (<IphoneChatFrameV2/>)]

  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Hero Content */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              <span className="text-blue-600">
                {language === "ko" ? "메시지를 한번에" : "All your messages in one place."}
              </span>
              <br />
              {language === "ko" ? "답장은 AI에게 척척." : "Smart replies, simplified."}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {language === "ko"
                ? "앱에서 전송되는 메시지를 한 곳에서 확인하고, AI가 제안하는 맞춤형 답장으로 빠르게 응답하세요."
                : "View messages from multiple apps in one place and respond quickly with AI-suggested personalized replies."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-blue-500 text-white px-6 py-3 rounded-md text-center hover:bg-blue-600 transition-colors">
                {language === "ko" ? "베타 신청하기" : "Join Beta"}
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md text-center hover:bg-gray-50 transition-colors">
                {language === "ko" ? "더 알아보기" : "Learn More"}
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">#ConvoSync</span>
              <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
                {language === "ko" ? "#통합메시지" : "#UnifiedMessages"}
              </span>
              <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
                {language === "ko" ? "#스마트답장" : "#SmartReplies"}
              </span>
            </div>
          </div>
          {/* DEMO */}
          {pageList[pageIndex]}
          {/* Interactive Demo */}
          {/* {DemoSub(language, showMessages, messages, showSuggestions, suggestions, selectedReply, handleReplySelect, handleCopy, copiedIndex, platforms, selectedPlatform, handlePlatformSelect, inputValue, setInputValue, handleGenerateClick)} */}
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


