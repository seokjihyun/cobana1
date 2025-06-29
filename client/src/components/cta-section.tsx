import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Check } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function CTASection() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    referralCode: "",
    agreedToTerms: false
  });

  const { toast } = useToast();

  const createLead = useMutation({
    mutationFn: async (data: { email: string; password: string; referralCode?: string }) => {
      return await apiRequest("POST", "/api/leads", data);
    },
    onSuccess: () => {
      toast({
        title: "가입 완료!",
        description: "성공적으로 등록되었습니다. 곧 연락드리겠습니다.",
      });
      setFormData({
        email: "",
        password: "",
        referralCode: "",
        agreedToTerms: false
      });
    },
    onError: (error: any) => {
      toast({
        title: "오류 발생",
        description: error.message || "가입 중 오류가 발생했습니다.",
        variant: "destructive"
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreedToTerms) {
      toast({
        title: "약관 동의 필요",
        description: "이용약관과 개인정보 처리방침에 동의해주세요.",
        variant: "destructive"
      });
      return;
    }

    createLead.mutate({
      email: formData.email,
      password: formData.password,
      referralCode: formData.referralCode || undefined
    });
  };

  const features = [
    "6개 주요 거래소 지원",
    "최대 50% 수수료 할인",
    "평생 할인 혜택, 기간 제한 없음"
  ];

  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              지금 가입하고<br />
              <span className="text-yellow-400">최대 50% 할인</span> 받으세요
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Cobana에서 6개 거래소 할인율을 비교하고 최고 조건으로 가입하세요!
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-yellow-400 mr-3" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-2xl p-8 text-gray-900"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">거래소 할인 혜택 신청</h3>
              <div className="space-y-4 mb-6">
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700 mb-2">현재 운영중</p>
                  <p className="text-xl font-bold text-gray-900">바이비트 20% 할인</p>
                  <p className="text-xs text-gray-500 mt-1">나머지 거래소들은 준비중입니다</p>
                </div>
              </div>
              
              <Button
                onClick={() => window.open('https://partner.bybit.com/b/131157', '_blank')}
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-4 rounded-lg font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transition-colors mb-4"
              >
                바이비트 20% 할인 받기
              </Button>
              
              <div className="text-center text-sm text-gray-600 space-y-2">
                <p>📌 가입 순서:</p>
                <div className="bg-gray-50 rounded-lg p-3 text-left space-y-1">
                  <p>1. 위 버튼 클릭하여 바이비트 이동</p>
                  <p>2. 추천코드 131157 자동 적용 확인</p>
                  <p>3. 회원가입 완료</p>
                  <p>4. 수수료 20% 할인 즉시 적용</p>
                </div>
              </div>
            </div>
            
            <p className="text-center text-xs text-gray-500 mt-4">
              ※ 추천인 코드는 별도 이벤트와 관계 없이 수수료 20% 할인에만 적용됩니다.<br />
              ※ 본 할인 혜택은 바이비트 공식 파트너를 통해 제공됩니다.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
