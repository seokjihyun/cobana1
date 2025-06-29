import { Twitter, Facebook, MessageCircle, MessageSquare, Users, Eye } from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const [visitors, setVisitors] = useState(0);
  const [onlineUsers, setOnlineUsers] = useState(0);

  useEffect(() => {
    // 방문자 수 시뮬레이션 (실제 프로덕션에서는 실제 API 호출)
    const baseVisitors = 15847;
    const baseOnline = 127;
    
    setVisitors(baseVisitors + Math.floor(Math.random() * 100));
    setOnlineUsers(baseOnline + Math.floor(Math.random() * 20));

    // 주기적으로 업데이트
    const interval = setInterval(() => {
      setVisitors(prev => prev + Math.floor(Math.random() * 3));
      setOnlineUsers(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        return Math.max(100, prev + change);
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const serviceLinks = [
    "바이비트 거래소",
    "바이낸스 거래소",
    "OKX 거래소",
    "비트겟 거래소"
  ];

  const supportLinks = [
    "최대 50% 할인",
    "거래소별 비교",
    "가입 방법",
    "이용 안내"
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold">🍌</span>
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Cobana</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              6개 주요 거래소의 최고 수수료 할인 혜택을 한곳에서 비교하고 선택하세요.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <MessageCircle className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <MessageSquare className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">거래 서비스</h4>
            <ul className="space-y-2 text-gray-400">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">할인 혜택</h4>
            <ul className="space-y-2 text-gray-400">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          {/* 방문자 카운터 */}
          <div className="flex justify-center items-center space-x-8 mb-6">
            <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg">
              <Eye className="h-4 w-4 text-green-400" />
              <span className="text-sm text-gray-300">총 방문자</span>
              <span className="font-bold text-green-400">{visitors.toLocaleString()}</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg">
              <Users className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-gray-300">현재 접속</span>
              <span className="font-bold text-blue-400">{onlineUsers}</span>
            </div>
          </div>
          
          <div className="text-center text-gray-400">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">🍌</span>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Cobana</span>
            </div>
            <p>&copy; 2025 Cobana - Crypto Exchange Hub. 모든 거래소 할인 혜택을 한곳에서</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
