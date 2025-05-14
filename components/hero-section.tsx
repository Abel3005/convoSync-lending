"use client"

import { useState } from "react"
import { useLanguage } from "./language-provider"
import { Copy, Send, MessageSquare } from "lucide-react"
import Image from "next/image"

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

  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Hero Content */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              <span className="text-blue-600">
                {language === "ko" ? "모든 메시지를 한곳에서," : "All your messages in one place."}
              </span>
              <br />
              {language === "ko" ? "답장은 똑똑하게." : "Smart replies, simplified."}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {language === "ko"
                ? "여러 앱의 메시지를 한 곳에서 확인하고, AI가 제안하는 맞춤형 답장으로 빠르게 응답하세요."
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

          {/* Interactive Demo */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              {/* Demo Header */}
              <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
                <div className="flex items-center">
                  <MessageSquare className="mr-2" size={20} />
                  <h3 className="font-medium">{language === "ko" ? "메시지 통합 데모" : "Unified Messages Demo"}</h3>
                </div>
                <div className="text-sm opacity-80">
                  {language === "ko" ? "김민수와의 대화" : "Conversation with Kim Min-su"}
                </div>
              </div>

              {/* Message Area */}
              <div className="p-4 bg-gray-50 h-[300px] overflow-y-auto flex flex-col">
                {showMessages && (
                  <div className="mb-4">
                    <div className="text-xs text-gray-500 mb-2 px-2">
                      {language === "ko"
                        ? "받은 메시지 앱: KakaoTalk, Instagram, iMessage"
                        : "Messages from: KakaoTalk, Instagram, iMessage"}
                    </div>

                    {messages.map((message) => (
                      <div key={message.id} className="mb-3 flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2 overflow-hidden">
                          <Image
                            src={`/placeholder.svg?height=32&width=32`}
                            alt={message.platform}
                            width={32}
                            height={32}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center mb-1">
                            <span className="text-xs font-medium text-gray-700 mr-2">
                              {message.platform === "kakao"
                                ? "KakaoTalk"
                                : message.platform === "instagram"
                                  ? "Instagram"
                                  : "iMessage"}
                            </span>
                            <span className="text-xs text-gray-500">{message.time}</span>
                          </div>
                          <div className="bg-white rounded-lg p-3 shadow-sm inline-block max-w-[85%]">
                            <p className="text-gray-800">{message.text}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Reply Suggestions */}
                {showSuggestions && (
                  <div className="mt-auto">
                    <div className="bg-blue-50 rounded-lg p-3 border border-blue-100 mb-3">
                      <p className="text-sm font-medium text-gray-700 mb-2">
                        {language === "ko" ? "답장 제안:" : "Suggested replies:"}
                      </p>
                      <div className="space-y-3">
                        {suggestions.map((suggestion, index) => (
                          <div
                            key={index}
                            className={`bg-white rounded-lg p-3 border ${
                              selectedReply === index ? "border-blue-400 ring-2 ring-blue-200" : "border-gray-200"
                            } relative transition-all hover:shadow-md cursor-pointer`}
                            onClick={() => handleReplySelect(index)}
                          >
                            <p className="text-gray-800 pr-8">{suggestion}</p>
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                handleCopy(index, suggestion)
                              }}
                              className="absolute top-2 right-2 text-gray-400 hover:text-blue-500 transition-colors"
                              aria-label={language === "ko" ? "복사" : "Copy"}
                            >
                              <Copy size={16} />
                            </button>
                            {copiedIndex === index && (
                              <span className="absolute -top-2 right-0 text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                                {language === "ko" ? "복사됨" : "Copied"}
                              </span>
                            )}

                            {/* Platform selection */}
                            {selectedReply === index && (
                              <div className="mt-3 pt-3 border-t border-gray-100">
                                <p className="text-xs text-gray-500 mb-2">
                                  {language === "ko" ? "다음으로 전송:" : "Send via:"}
                                </p>
                                <div className="flex space-x-3">
                                  {platforms.map((platform) => (
                                    <button
                                      key={platform.id}
                                      className={`flex flex-col items-center p-2 rounded-md ${
                                        selectedPlatform === platform.id
                                          ? "bg-blue-100 text-blue-600"
                                          : "hover:bg-gray-100"
                                      }`}
                                      onClick={(e) => {
                                        e.stopPropagation()
                                        handlePlatformSelect(platform.id)
                                      }}
                                    >
                                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mb-1 overflow-hidden">
                                        <Image
                                          src={platform.icon || "/placeholder.svg"}
                                          alt={platform.name}
                                          width={24}
                                          height={24}
                                        />
                                      </div>
                                      <span className="text-xs">{platform.name}</span>
                                      {selectedPlatform === platform.id && (
                                        <span className="absolute -top-1 -right-1 bg-green-500 text-white p-1 rounded-full">
                                          <Send size={10} />
                                        </span>
                                      )}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex items-center">
                  <input
                    type="text"
                    className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={language === "ko" ? "금요일에 뭐해?" : "What are you doing Friday?"}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <button
                    onClick={handleGenerateClick}
                    className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
                  >
                    {language === "ko" ? "답장 제안 보기" : "Generate Reply"}
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  {language === "ko"
                    ? "* 데모에서는 실제 메시지가 전송되지 않습니다."
                    : "* No actual messages are sent in this demo."}
                </p>
              </div>
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
