import { FaVk, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa'
import { MdPhone, MdEmail, MdSearch, MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

import heroPng from '../assets/3c7389301c5d47af29f46cc51ef9e795375685aa.png'
import img1Png from '../assets/b7ff150f063d408693f8b9e5df5fdf0c72a019ed.png'
import img2Png from '../assets/742aa5020cc6ecc885b2f6309e5a87c50fecd960.png'
import galleryPng from '../assets/gallery.png'
import logoPng from '../assets/Group 2.png'

export default function Hom() {
  return (
    <div className="min-h-screen bg-white font-sans">

      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10">
                <img src={logoPng} alt="КД-ГРУПП" className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="text-[#2d6a2d] font-bold text-xl leading-none tracking-wide">КД-ГРУПП</p>
                <p className="text-gray-500 text-[10px] leading-tight">У нас есть решения для Вас!</p>
              </div>
            </div>
            <div className="border-l border-gray-300 pl-6 hidden md:block">
              <p className="text-gray-600 text-xs leading-snug">Качественные детали и узлы</p>
              <p className="text-gray-600 text-xs leading-snug">для сельскохозяйственной техники</p>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-2">
              <MdPhone className="text-[#2d6a2d] text-xl" />
              <div>
                <p className="text-gray-500 text-[10px]">звонок бесплатный</p>
                <p className="text-gray-800 font-semibold text-base">8 800 505 72 32</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MdEmail className="text-[#2d6a2d] text-xl" />
              <div>
                <p className="text-gray-500 text-[10px]">отвечаем быстро</p>
                <p className="text-gray-800 font-semibold text-sm">info@kd-grupp.com</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-[#0077FF] flex items-center justify-center cursor-pointer hover:opacity-90 transition">
              <FaVk className="text-white text-lg" />
            </div>
            <div className="flex items-center gap-2 bg-[#25d366] text-white text-sm font-medium px-3 py-2 rounded-full cursor-pointer hover:opacity-90 transition">
              <FaWhatsapp className="text-white text-lg" />
              <p>WhatsApp</p>
            </div>
            <div className="flex items-center gap-2 bg-[#229ed9] text-white text-sm font-medium px-3 py-2 rounded-full cursor-pointer hover:opacity-90 transition">
              <FaTelegramPlane className="text-white text-lg" />
              <p>Telegram</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="py-4 pr-8 border-b-2 border-[#2d6a2d] cursor-pointer">
                <p className="text-[#2d6a2d] font-semibold text-sm tracking-widest uppercase">Главная</p>
              </Link>
              <div className="py-4 px-8 cursor-pointer group flex items-center gap-1">
                <p className="text-gray-700 text-sm tracking-widest uppercase group-hover:text-[#2d6a2d] transition">Каталог</p>
                <MdKeyboardArrowDown className="text-gray-700 group-hover:text-[#2d6a2d] transition text-base" />
              </div>
              <div className="py-4 px-8 cursor-pointer group">
                <p className="text-gray-700 text-sm tracking-widest uppercase group-hover:text-[#2d6a2d] transition">О нас</p>
              </div>
              <div className="py-4 px-8 cursor-pointer group">
                <p className="text-gray-700 text-sm tracking-widest uppercase group-hover:text-[#2d6a2d] transition">Новости</p>
              </div>
              <div className="py-4 px-8 cursor-pointer group">
                <p className="text-gray-700 text-sm tracking-widest uppercase group-hover:text-[#2d6a2d] transition">Партнёры</p>
              </div>
              <div className="py-4 px-8 cursor-pointer group">
                <p className="text-gray-700 text-sm tracking-widest uppercase group-hover:text-[#2d6a2d] transition">Контакты</p>
              </div>
            </div>
            <div className="flex items-center border border-gray-300 rounded px-3 py-2 gap-2 cursor-text">
              <MdSearch className="text-gray-400 text-lg" />
              <p className="text-gray-400 text-sm">поиск по каталогу</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-[#2d6a2d] overflow-hidden" style={{minHeight: '340px'}}>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{backgroundImage: `url(${heroPng})`}}
        />
        <div className="relative max-w-7xl mx-auto px-6 py-12 flex items-center justify-between">
          <div className="max-w-lg">
            <h1 className="text-white font-bold text-3xl leading-snug mb-8">
              Бренд MEDO — российское производство транспортных лент, прутковых транспортёров для сельхозтехники по уборке урожая овощных культур
            </h1>
            <div className="inline-flex items-center gap-2 border-2 border-white px-6 py-3 cursor-pointer hover:bg-white group transition-all duration-200">
              <p className="text-white font-semibold text-sm tracking-widest uppercase group-hover:text-[#2d6a2d] transition">Оставить заявку</p>
              <MdKeyboardArrowRight className="text-white group-hover:text-[#2d6a2d] transition text-lg" />
            </div>
          </div>
          <div className="hidden lg:block w-[420px] shrink-0">
            <img src={heroPng} alt="Транспортёр MEDO" className="w-full object-contain drop-shadow-2xl" />
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-10 h-10 rounded-full bg-[#1e5c1e] flex items-center justify-center cursor-pointer z-10 shadow-lg">
          <MdKeyboardArrowDown className="text-white text-2xl" />
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <h1 className="text-gray-900 font-bold text-3xl mb-3">Каталог товаров</h1>
            <p className="text-gray-500 text-sm leading-relaxed">Небольшое описание блока<br />размером в две строки</p>
          </div>
          <div className="grid grid-cols-3 gap-5 mb-10">
            <div className="rounded-xl overflow-hidden bg-[#2d6a2d] relative cursor-pointer hover:shadow-xl transition-shadow duration-300" style={{minHeight: '210px'}}>
              <div className="p-6 z-10 relative">
                <p className="text-white font-bold text-xl leading-snug">Свеклоуборочная<br />техника</p>
              </div>
              <div className="absolute bottom-0 right-0 w-48 h-48">
                <img src={img1Png} alt="Свеклоуборочная техника" className="w-full h-full object-contain" />
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-gray-200 cursor-pointer hover:shadow-xl transition-shadow duration-300 flex flex-col" style={{minHeight: '210px'}}>
              <div className="p-6">
                <p className="text-[#2d6a2d] font-bold text-xl leading-snug">Картофелеуборочная<br />техника</p>
              </div>
              <div className="flex-1 flex items-end justify-center px-4 pb-4">
                <img src={img2Png} alt="Картофелеуборочная техника" className="h-28 object-contain" />
              </div>
            </div>
            <Link to="/product" className="rounded-xl overflow-hidden border border-gray-200 cursor-pointer hover:shadow-xl transition-shadow duration-300 flex flex-col" style={{minHeight: '210px'}}>
              <div className="p-6">
                <p className="text-[#2d6a2d] font-bold text-xl leading-snug">Транспортеры<br />MEDO</p>
              </div>
              <div className="flex-1 flex items-end justify-center px-4 pb-4">
                <img src={heroPng} alt="Транспортеры MEDO" className="h-28 object-contain" />
              </div>
            </Link>
          </div>
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 bg-[#2d6a2d] text-white px-8 py-3 rounded cursor-pointer hover:bg-[#1e5c1e] transition-colors duration-200">
              <p className="font-semibold text-sm tracking-widest uppercase">Перейти в каталог</p>
              <MdKeyboardArrowRight className="text-white text-lg" />
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-8">
            <h1 className="text-gray-900 font-bold text-3xl">О компании</h1>
          </div>
          <div className="mb-8">
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              ООО «КД-ГРУПП» — это команда единомышленников и профессионалов в таких направлениях, как сельскохозяйственная и специальная техника. Основной состав компании сформирован из инженеров-производственников, которые не по наслышке знают все трудности и проблемы, с которыми Вам приходится сталкиваться в процессе работы с техникой. Мы всегда готовы прийти Вам на помощь.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              А также, наша компания предлагает к поставке прутковые транспортеры и комплектующие собственного производства под брендом MEDO. В кратчайшие сроки выполним заказ на изготовление транспортера для сельхозтехники по уборке урожая овощных культур. Дополнительно, мы оказываем услуги по восстановлению ваших б/у транспортеров с заменой всех ремней, пластинок, заклёпок и замков.
            </p>
          </div>
          <div className="flex justify-center gap-20 mb-12">
            <div className="text-center">
              <p className="text-gray-900 font-bold text-5xl mb-1">500</p>
              <p className="text-gray-500 text-sm">товаров</p>
            </div>
            <div className="text-center">
              <p className="text-gray-900 font-bold text-5xl mb-1">300+</p>
              <p className="text-gray-500 text-sm">клиентов</p>
            </div>
            <div className="text-center">
              <p className="text-gray-900 font-bold text-5xl mb-1">15</p>
              <p className="text-gray-500 text-sm">специалистов</p>
            </div>
          </div>
          <div className="w-full rounded-xl overflow-hidden shadow-md">
            <img src={galleryPng} alt="Производство MEDO" className="w-full object-cover" />
          </div>
        </div>
      </div>

      <div className="bg-[#f5f5f5] pt-12 pb-0">
        <div className="max-w-5xl mx-auto px-6">

          <div className="flex items-start justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10">
                <img src={logoPng} alt="КД-ГРУПП" className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="text-gray-900 font-bold text-lg leading-none">КД-ГРУПП</p>
                <p className="text-gray-500 text-[10px] leading-tight mt-1">У нас есть решения для Вас!</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-[#0077FF] flex items-center justify-center cursor-pointer hover:opacity-90 transition">
                <FaVk className="text-white text-lg" />
              </div>
              <div className="w-9 h-9 rounded-full bg-[#229ed9] flex items-center justify-center cursor-pointer hover:opacity-90 transition">
                <FaTelegramPlane className="text-white text-lg" />
              </div>
              <div className="w-9 h-9 rounded-full bg-[#25d366] flex items-center justify-center cursor-pointer hover:opacity-90 transition">
                <FaWhatsapp className="text-white text-lg" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-8 pb-12 border-b border-gray-200">
            <div>
              <p className="text-gray-900 font-semibold text-sm mb-4">Информация</p>
              <div className="flex flex-col gap-2">
                <p className="text-gray-500 text-sm cursor-pointer hover:text-[#2d6a2d] transition">О нас</p>
                <p className="text-gray-500 text-sm cursor-pointer hover:text-[#2d6a2d] transition">Партнёрам</p>
                <p className="text-gray-500 text-sm cursor-pointer hover:text-[#2d6a2d] transition">Карьера</p>
                <p className="text-gray-500 text-sm cursor-pointer hover:text-[#2d6a2d] transition">Контакты</p>
              </div>
            </div>
            <div>
              <p className="text-gray-900 font-semibold text-sm mb-4">Каталог</p>
              <div className="flex flex-col gap-2">
                <p className="text-gray-500 text-sm cursor-pointer hover:text-[#2d6a2d] transition leading-snug">Свеклоуборочная техника</p>
                <p className="text-gray-500 text-sm cursor-pointer hover:text-[#2d6a2d] transition leading-snug">Картофелеуборочная техника</p>
                <p className="text-gray-500 text-sm cursor-pointer hover:text-[#2d6a2d] transition leading-snug">Транспортеры MEDO</p>
                <p className="text-gray-500 text-sm cursor-pointer hover:text-[#2d6a2d] transition leading-snug">Комплектующие MEDO</p>
              </div>
            </div>
            <div>
              <p className="text-gray-900 font-semibold text-sm mb-4">Блог</p>
              <div className="flex flex-col gap-2">
                <p className="text-gray-500 text-sm cursor-pointer hover:text-[#2d6a2d] transition">Новости</p>
                <p className="text-gray-500 text-sm cursor-pointer hover:text-[#2d6a2d] transition">События</p>
              </div>
            </div>
            <div>
              <p className="text-gray-900 font-semibold text-sm mb-4">Адрес</p>
              <div className="flex flex-col gap-3">
                <div>
                  <p className="text-gray-400 text-xs mb-1">юридический и фактический:</p>
                  <p className="text-gray-600 text-sm leading-snug">117638, Россия, г. Москва, ул. Криворожская, д. 6А, стр. 2, пом. 236</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-1">адрес производства:</p>
                  <p className="text-gray-600 text-sm leading-snug">г. Брянск, Московский проезд, д10а</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-900 font-semibold text-sm mb-4">Контакты</p>
              <div className="flex flex-col gap-3">
                <div>
                  <p className="text-gray-400 text-xs mb-1">звонок бесплатный</p>
                  <p className="text-gray-900 font-bold text-lg leading-none">8 800 505 72 32</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-1">электронная почта</p>
                  <p className="text-[#2d6a2d] font-semibold text-sm">info@kd-grupp.com</p>
                </div>
                <div className="inline-block border border-gray-400 rounded px-4 py-2 cursor-pointer hover:border-[#2d6a2d] hover:text-[#2d6a2d] transition group mt-1">
                  <p className="text-gray-700 text-sm font-medium tracking-wide group-hover:text-[#2d6a2d] transition">Написать нам</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between py-5">
            <p className="text-gray-400 text-xs">© 2020 ООО «КД-Групп». Все права защищены</p>
            <p className="text-gray-400 text-xs">Разработка и продвижение SilverDuck</p>
          </div>
        </div>
      </div>

    </div>
  )
}
