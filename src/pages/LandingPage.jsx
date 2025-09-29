import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, BarChart3, Users, MessageSquare, Smartphone } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <header className="bg-white/80 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <ChefHat className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">Ресторатор Pro</span>
            </div>
            <div className="flex space-x-4">
              <Link to="/login" className="text-gray-700 hover:text-gray-900 font-medium">
                Вход
              </Link>
              <Link 
                to="/app" 
                className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Демо
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Управляйте рестораном
              <span className="text-green-600 block">в одном месте</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Современная платформа для управления заказами, аналитики расходов и коммуникации с поставщиками
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/app" 
                className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Начать бесплатно
              </Link>
              <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors">
                Узнать больше
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Все что нужно для успешного ресторана
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: 'Поставщики', description: 'Единая база всех поставщиков с рейтингами и отзывами' },
              { icon: BarChart3, title: 'Аналитика', description: 'Детальная аналитика расходов и оптимизация закупок' },
              { icon: MessageSquare, title: 'Чат', description: 'Встроенный чат для быстрой коммуникации с поставщиками' },
              { icon: Smartphone, title: 'Мобильный', description: 'Полная мобильная версия для управления с телефона' }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}