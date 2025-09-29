import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Home, Users, BarChart3, ShoppingCart, Settings, X, ChefHat } from 'lucide-react';

const navigation = [
  { name: 'Главная', href: '/app', icon: Home },
  { name: 'Поставщики', href: '/app/suppliers', icon: Users },
  { name: 'Аналитика', href: '/app/analytics', icon: BarChart3 },
  { name: 'Заказы', href: '/app/orders', icon: ShoppingCart },
  { name: 'Настройки', href: '/app/settings', icon: Settings },
];

export default function Sidebar({ onMobileClose }) {
  const location = useLocation();
  const { user, logout } = useAuth();

  return (
    <div className="flex flex-col w-64 bg-white border-r border-gray-200 h-full">
      <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
        <div className="flex items-center">
          <ChefHat className="h-8 w-8 text-green-600" />
          <span className="ml-2 text-xl font-bold text-gray-900">Ресторатор Pro</span>
        </div>
        {onMobileClose && (
          <button onClick={onMobileClose} className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500">
            <X className="h-6 w-6" />
          </button>
        )}
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              onClick={onMobileClose}
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                isActive
                  ? 'bg-green-50 text-green-700 border border-green-200'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="flex-shrink-0 border-t border-gray-200 p-4">
        <div className="flex items-center">
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{user?.name}</p>
            <p className="text-xs text-gray-500 capitalize">{user?.plan} план</p>
          </div>
        </div>
        <button
          onClick={logout}
          className="mt-3 w-full bg-gray-100 text-gray-700 py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
        >
          Выйти
        </button>
      </div>
    </div>
  );
}