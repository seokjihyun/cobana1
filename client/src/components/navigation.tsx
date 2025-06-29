import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">🍌</span>
            </div>
            <span className="text-2xl font-bold gradient-text">Cobana</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-yellow-600 transition-colors"
            >
              홈
            </button>
            <button 
              onClick={() => scrollToSection('exchanges')}
              className="text-gray-700 hover:text-yellow-600 transition-colors"
            >
              거래소
            </button>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-gray-700 hover:text-yellow-600 transition-colors"
            >
              혜택
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-700 hover:text-yellow-600 transition-colors"
            >
              사용법
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-yellow-600 transition-colors"
            >
              후기
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 hover:text-yellow-600 transition-colors"
            >
              FAQ
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-lg font-bold hover:from-yellow-600 hover:to-orange-600 transition-all">
              지금 시작하기
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/90 backdrop-blur-md">
            <div className="py-4 space-y-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 transition-colors"
              >
                홈
              </button>
              <button 
                onClick={() => scrollToSection('exchanges')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 transition-colors"
              >
                거래소
              </button>
              <button 
                onClick={() => scrollToSection('benefits')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 transition-colors"
              >
                혜택
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 transition-colors"
              >
                사용법
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 transition-colors"
              >
                후기
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 transition-colors"
              >
                FAQ
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}