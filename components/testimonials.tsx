"use client"

import Image from "next/image"
import { useLanguage } from "./language-provider"

export default function Testimonials() {
  const { t, language } = useLanguage()

  const testimonials = [
    {
      quote: t("testimonials.quote1"),
      name: t("testimonials.name1"),
      title: t("testimonials.title1"),
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote: t("testimonials.quote2"),
      name: t("testimonials.name2"),
      title: t("testimonials.title2"),
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section id="testimonials" className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("testimonials.title")}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("testimonials.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 mr-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
