import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "김민수",
      level: "다중거래소 이용자",
      rating: 5,
      text: "Cobana에서 6개 거래소 할인율을 한번에 비교할 수 있어서 최고 조건으로 가입했어요",
      initial: "김",
      bgColor: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-100",
      avatarColor: "bg-blue-600"
    },
    {
      name: "박지영",
      level: "암호화폐 투자자",
      rating: 5,
      text: "비트겟 50% 할인이 진짜 놀라웠어요. 거래소별로 이렇게 차이가 나는 줄 몰랐네요",
      initial: "박",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-100",
      avatarColor: "bg-green-600"
    },
    {
      name: "이성호",
      level: "선물거래 전문가",
      rating: 5,
      text: "OKX 40% 할인으로 가입했는데 수수료 절약이 상당해요. 정말 도움됩니다",
      initial: "이",
      bgColor: "from-yellow-50 to-orange-50",
      borderColor: "border-yellow-100",
      avatarColor: "bg-yellow-500"
    }
  ];

  const stats = [
    { value: "6개", label: "거래소 지원" },
    { value: "최대 50%", label: "수수료 할인" },
    { value: "평생", label: "할인 적용" },
    { value: "즉시", label: "할인 적용" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">💬 실 사용자 후기</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cobana를 통해 거래소 할인 혜택을 받고 있는 실제 사용자들의 생생한 후기입니다
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${testimonial.bgColor} p-8 rounded-2xl border ${testimonial.borderColor}`}
            >
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">5.0</span>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className={`w-12 h-12 ${testimonial.avatarColor} rounded-full flex items-center justify-center text-white font-bold`}>
                  {testimonial.initial}
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.level}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-yellow-400 mb-2">{stat.value}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
