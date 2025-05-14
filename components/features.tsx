"use client"

import { MessageSquare, RefreshCw, Heart } from "lucide-react"
import { useLanguage } from "./language-provider"

export default function Features() {
  const { t } = useLanguage()

  const features = [
    {
      title: t("features.unified.title"),
      description: t("features.unified.description"),
      icon: MessageSquare,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: t("features.smart.title"),
      description: t("features.smart.description"),
      icon: RefreshCw,
      color: "bg-green-100 text-green-600",
    },
    {
      title: t("features.relief.title"),
      description: t("features.relief.description"),
      icon: Heart,
      color: "bg-blue-100 text-blue-600",
    },
  ]

  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("features.title")}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("features.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className={`${feature.color} w-14 h-14 rounded-full flex items-center justify-center mb-6`}>
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t("features.action.title")}</h3>
              <p className="text-gray-600 mb-6">{t("features.action.description")}</p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-1">
                    <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">{t("features.style")}</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-1">
                    <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">{t("features.context")}</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-1">
                    <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">{t("features.tired")}</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <div className="bg-white rounded-lg shadow-lg p-4 max-w-sm mx-auto">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">JD</span>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-900">John Doe</p>
                    <p className="text-sm text-gray-500">KakaoTalk</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                    <p className="text-gray-800">금요일 저녁에 뭐해?</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 ml-auto max-w-[80%] border border-blue-100">
                    <p className="text-gray-800 font-medium mb-1">Suggested replies:</p>
                    <div className="space-y-2">
                      <div className="bg-white rounded p-2 text-sm border border-gray-200 cursor-pointer hover:bg-blue-50">
                        아직 확실하지 않아요. 무슨 계획 있으신가요?
                      </div>
                      <div className="bg-white rounded p-2 text-sm border border-gray-200 cursor-pointer hover:bg-blue-50">
                        친구들과 저녁 식사 약속이 있어요. 같이 갈래요?
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
