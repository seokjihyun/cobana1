import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">🍌</span>
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  <span className="gradient-text">Cobana</span>
                </h1>
                <p className="text-lg text-blue-200">Crypto Exchange Hub</p>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              모든 거래소 수수료 할인을<br />
              <span className="text-yellow-400">한곳에서 쉽게</span>
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              바이비트, 바이낸스, OKX, 비트겟, 게이트아이오, 빙엑스까지<br />
              주요 거래소들의 최고 할인 혜택을 모두 비교하고 선택하세요!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={() => scrollToSection('exchanges')}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300"
              >
                거래소 둘러보기
              </Button>
              <Button 
                onClick={() => scrollToSection('benefits')}
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                할인 혜택 보기
              </Button>
            </div>
            <motion.div 
              className="flex items-center space-x-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">최대 50%</div>
                <div className="text-sm text-blue-200">수수료 할인</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">평생</div>
                <div className="text-sm text-blue-200">할인 적용</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">6개</div>
                <div className="text-sm text-blue-200">거래소 지원</div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="animate-float">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">거래소별 할인율</h3>
                  <p className="text-blue-200">최고 조건으로 거래하세요</p>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                    <span>비트겟</span>
                    <span className="text-yellow-400 font-bold">50% 할인</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                    <span>OKX</span>
                    <span className="text-yellow-400 font-bold">40% 할인</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                    <span>빙엑스</span>
                    <span className="text-yellow-400 font-bold">30% 할인</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                    <span>바이낸스</span>
                    <span className="text-yellow-400 font-bold">25% 할인</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}