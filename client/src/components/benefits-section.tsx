import { motion } from "framer-motion";
import { Percent, Clock, Shield, Smartphone, TrendingUp, Headphones } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <Percent className="h-10 w-10 text-yellow-400" />,
      title: "최대 50%까지 수수료 할인",
      description: "거래소별로 20%~50%의 차별화된 수수료 할인 혜택을 제공합니다.",
      gradient: "from-yellow-500 to-yellow-600",
      levels: [] as string[],
      tags: ["20%~50% 할인", "거래소별 차등", "최고 혜택"],
      image: null
    },
    {
      icon: <Shield className="h-10 w-10 text-white" />,
      title: "모든 주요 거래소 지원",
      description: "바이비트, 바이낸스, OKX, 비트겟, 게이트아이오, 빙엑스까지 한번에 비교하세요.",
      gradient: "from-blue-600 to-indigo-600",
      levels: [] as string[],
      tags: ["6개 거래소", "한번에 비교", "최고 할인"],
      image: null
    },
    {
      icon: <Clock className="h-10 w-10 text-yellow-400" />,
      title: "간편한 가입과 즉시 적용",
      description: "각 거래소별 최고 할인 조건으로 간편하게 가입하고 즉시 혜택을 받으세요.",
      gradient: "from-green-600 to-emerald-600",
      levels: [] as string[],
      tags: ["간편가입", "즉시적용", "최고조건"],
      image: null
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-indigo-600" />,
      title: "현물 · 선물거래 모두 할인",
      description: "모든 거래소에서 현물거래와 선물거래 양쪽 모두 수수료 할인 혜택을 받을 수 있습니다.",
      gradient: null,
      levels: [] as string[],
      image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Cobana가 제공하는 특별한 혜택</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            모든 주요 거래소의 최고 수수료 할인 조건을 한곳에서 비교하고 선택하세요
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-8 rounded-2xl text-white ${
                benefit.gradient 
                  ? `bg-gradient-to-br ${benefit.gradient}` 
                  : 'bg-white border-2 border-gray-200 text-gray-900 hover:shadow-lg transition-shadow'
              }`}
            >
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
              <p className={`mb-6 ${benefit.gradient ? 'text-blue-100' : 'text-gray-600'}`}>
                {benefit.description}
              </p>
              

              
              {benefit.tags && (
                <div className="flex flex-wrap gap-2">
                  {benefit.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-white/20 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              
              {benefit.image && (
                <img 
                  src={benefit.image} 
                  alt={benefit.title}
                  className="rounded-lg w-full h-24 object-cover" 
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
