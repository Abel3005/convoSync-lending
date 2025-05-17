import { Copy, MessageSquare, Send } from "lucide-react";
import Image from "next/image"
import { Dispatch, SetStateAction } from "react";
import { AppBar } from "./ui/appBar";

export function DemoSub(language: string, showMessages: boolean, messages: { id: number; text: string; platform: string; time: string }[], showSuggestions: boolean, suggestions: string[], selectedReply: number | null, handleReplySelect: (index: number) => void, handleCopy: (index: number, text: string) => void, copiedIndex: number | null, platforms: { id: string; name: string; icon: string }[], selectedPlatform: string | null, handlePlatformSelect: (platform: string) => void, inputValue: string, setInputValue :Dispatch<SetStateAction<string>>, handleGenerateClick: () => void) {
  return <div className="lg:w-1/2 w-full">
    <div className="bg-white rounded-xl shadow-xl overflow-hidden">
      {/* Demo Header */}
      <AppBar title="ConvSync" counter="김대건" />
      {/* <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <MessageSquare className="mr-2" size={20} />
          <h3 className="font-medium">{language === "ko" ? "메시지 통합 데모" : "Unified Messages Demo"}</h3>
        </div>
        <div className="text-sm opacity-80">
          {language === "ko" ? "김민수와의 대화" : "Conversation with Kim Min-su"}
        </div>
      </div> */}

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
                    height={32} />
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
                    className={`bg-white rounded-lg p-3 border ${selectedReply === index ? "border-blue-400 ring-2 ring-blue-200" : "border-gray-200"} relative transition-all hover:shadow-md cursor-pointer`}
                    onClick={() => handleReplySelect(index)}
                  >
                    <p className="text-gray-800 pr-8">{suggestion}</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleCopy(index, suggestion)
                      } }
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
                              className={`flex flex-col items-center p-2 rounded-md ${selectedPlatform === platform.id
                                  ? "bg-blue-100 text-blue-600"
                                  : "hover:bg-gray-100"}`}
                              onClick={(e) => {
                                e.stopPropagation()
                                handlePlatformSelect(platform.id)
                              } }
                            >
                              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mb-1 overflow-hidden">
                                <Image
                                  src={platform.icon || "/placeholder.svg"}
                                  alt={platform.name}
                                  width={24}
                                  height={24} />
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
            onChange={(e) => setInputValue(e.target.value)} />
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
}