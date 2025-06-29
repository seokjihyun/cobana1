import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "Cobana에서 제공하는 할인율은 어떻게 되나요?",
      answer: "거래소별로 다릅니다. 바이비트 20%, 게이트아이오/바이낸스 25%, 빙엑스 30%, OKX 40%, 비트겟 50%까지 할인됩니다."
    },
    {
      question: "어떤 거래소가 가장 할인율이 높나요?",
      answer: "비트겟이 최대 50% 할인으로 가장 높고, 그 다음은 OKX 40%, 빙엑스 30% 순입니다. 거래소별 특성을 고려하여 선택하시면 됩니다."
    },
    {
      question: "할인 혜택은 언제까지 유지되나요?",
      answer: "모든 거래소에서 할인 혜택은 평생 유지됩니다. 별도의 기간 제한이나 추가 조건 없이 계속해서 할인 혜택을 받을 수 있습니다."
    },
    {
      question: "현재 운영중인 거래소는 어디인가요?",
      answer: "현재 바이비트만 운영중이며, 나머지 거래소들(바이낸스, OKX, 비트겟, 게이트아이오, 빙엑스)는 준비중입니다."
    },
    {
      question: "다른 이벤트와 중복 적용이 가능한가요?",
      answer: "각 거래소의 기본 할인 혜택이므로, 일부 이벤트와는 중복 적용이 제한될 수 있습니다. 각 거래소별 이벤트 조건을 확인해주세요."
    },
    {
      question: "이미 계정이 있는 거래소도 할인을 받을 수 있나요?",
      answer: "할인 혜택은 신규 가입 시에만 적용됩니다. 기존 계정에는 할인 혜택을 소급 적용할 수 없습니다."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">자주 묻는 질문</h2>
          <p className="text-xl text-gray-600">
            Cobana에서 제공하는 거래소 할인 혜택에 대해 궁금한 점들을 확인해보세요
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openFAQ === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>
              
              {openFAQ === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4 text-gray-600"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
