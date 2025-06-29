import { motion } from "framer-motion";
import { UserPlus, Share, DollarSign, Check } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "원하는 거래소 선택",
      description: "Cobana에서 제공하는 6개 주요 거래소 중 가장 좋은 할인율의 거래소를 선택하세요.",
      icon: <UserPlus className="h-8 w-8 text-blue-600" />,
      timeText: "비교 후 선택",
      bgColor: "bg-blue-600"
    },
    {
      number: 2,
      title: "최고 할인 조건으로 가입",
      description: "선택한 거래소의 최고 할인 조건(20%~50%)으로 바로 가입할 수 있습니다.",
      icon: <Share className="h-8 w-8 text-yellow-500" />,
      timeText: "최고 조건",
      bgColor: "bg-yellow-500"
    },
    {
      number: 3,
      title: "수수료 할인 자동 적용",
      description: "가입 완료 즉시 모든 거래에서 해당 거래소의 최대 할인율이 자동으로 적용됩니다.",
      icon: <DollarSign className="h-8 w-8 text-green-600" />,
      timeText: "즉시 적용",
      bgColor: "bg-green-600"
    }
  ];

  const features = [
    "6개 주요 거래소 지원",
    "20%~50% 차등 할인율",
    "현물 · 선물 거래 모두 할인",
    "최고 조건 자동 적용"
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">거래소 할인 혜택 받기 - 3단계</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            복잡한 절차 없이 간단한 3단계로 최고 수수료 할인 혜택을 받으세요
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`${step.bgColor} text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6`}>
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 mb-6">
                {step.description}
              </p>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                {step.icon}
                <div className="text-sm text-gray-500 mt-2">{step.timeText}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="bg-white rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">거래소 할인 혜택 미리보기</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                alt="Cryptocurrency trading dashboard interface" 
                className="rounded-xl shadow-lg w-full" 
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
