export default function ExchangeBanners() {
  return (
    <section id="exchanges" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">지원하는 거래소</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            각 거래소별 최고 할인 조건으로 가입하고 수수료를 절약하세요
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Bybit */}
          <div className="exchange-card bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">B</span>
              </div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">운영중</span>
            </div>
            <h3 className="text-xl font-bold mb-2">바이비트 (Bybit)</h3>
            <p className="text-3xl font-bold text-orange-500 mb-2">20% 할인</p>
            <p className="text-gray-600 mb-4">현물 및 선물거래 모두 할인</p>
            <button 
              onClick={() => window.open('https://partner.bybit.com/b/131157', '_blank')}
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors"
            >
              지금 가입하기
            </button>
          </div>

          {/* Binance */}
          <div className="exchange-card bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">B</span>
              </div>
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-bold">준비중</span>
            </div>
            <h3 className="text-xl font-bold mb-2">바이낸스 (Binance)</h3>
            <p className="text-3xl font-bold text-yellow-500 mb-2">25% 할인</p>
            <p className="text-gray-600 mb-4">세계 최대 거래소 할인</p>
            <button 
              disabled
              className="w-full bg-gray-300 text-gray-500 py-3 rounded-lg font-bold cursor-not-allowed"
            >
              준비중
            </button>
          </div>

          {/* OKX */}
          <div className="exchange-card bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">O</span>
              </div>
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-bold">준비중</span>
            </div>
            <h3 className="text-xl font-bold mb-2">OKX</h3>
            <p className="text-3xl font-bold text-blue-500 mb-2">40% 할인</p>
            <p className="text-gray-600 mb-4">프리미엄 거래 환경</p>
            <button 
              disabled
              className="w-full bg-gray-300 text-gray-500 py-3 rounded-lg font-bold cursor-not-allowed"
            >
              준비중
            </button>
          </div>

          {/* Bitget */}
          <div className="exchange-card bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">B</span>
              </div>
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-bold">준비중</span>
            </div>
            <h3 className="text-xl font-bold mb-2">비트겟 (Bitget)</h3>
            <p className="text-3xl font-bold text-green-500 mb-2">50% 할인</p>
            <p className="text-gray-600 mb-4">최고 할인율 제공</p>
            <button 
              disabled
              className="w-full bg-gray-300 text-gray-500 py-3 rounded-lg font-bold cursor-not-allowed"
            >
              준비중
            </button>
          </div>

          {/* Gate.io */}
          <div className="exchange-card bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">G</span>
              </div>
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-bold">준비중</span>
            </div>
            <h3 className="text-xl font-bold mb-2">게이트아이오 (Gate.io)</h3>
            <p className="text-3xl font-bold text-purple-500 mb-2">25% 할인</p>
            <p className="text-gray-600 mb-4">다양한 알트코인 거래</p>
            <button 
              disabled
              className="w-full bg-gray-300 text-gray-500 py-3 rounded-lg font-bold cursor-not-allowed"
            >
              준비중
            </button>
          </div>

          {/* BingX */}
          <div className="exchange-card bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">X</span>
              </div>
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-bold">준비중</span>
            </div>
            <h3 className="text-xl font-bold mb-2">빙엑스 (BingX)</h3>
            <p className="text-3xl font-bold text-red-500 mb-2">30% 할인</p>
            <p className="text-gray-600 mb-4">소셜 트레이딩 플랫폼</p>
            <button 
              disabled
              className="w-full bg-gray-300 text-gray-500 py-3 rounded-lg font-bold cursor-not-allowed"
            >
              준비중
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}