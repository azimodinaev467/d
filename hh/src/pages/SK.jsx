import { FaVk, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa'
import { MdPhone, MdEmail, MdSearch, MdKeyboardArrowDown, MdKeyboardArrowRight, MdHome } from 'react-icons/md'
import { Link } from 'react-router-dom'

import heroPng from '../assets/3c7389301c5d47af29f46cc51ef9e795375685aa.png'
import logoPng from '../assets/Group 2.png'

const categories = [
  { label: 'Свеклоуборочная техника', active: true, sub: ['Транспортер выгрузной', 'Колесные экскаваторы', 'Экскаваторы-погрузчики'] },
  { label: 'Картофелеуборочная техника' },
  { label: 'Транспортеры MEDO' },
  { label: 'Комплектующие MEDO' },
  { label: 'Почвообрабатывающая техника' },
  { label: 'Кормоуборочная техника' },
  { label: 'Опрыскиватели' },
  { label: 'Разбрасыватели' },
  { label: 'Зерноуборочная техника' },
  { label: 'Зерноуборочная техника' },
  { label: 'Зерноуборочная техника' },
  { label: 'Зерноуборочная техника' },
]

export default function SK() {
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
              <Link to="/" className="py-4 pr-8 cursor-pointer group">
                <p className="text-gray-700 text-sm tracking-widest uppercase group-hover:text-[#2d6a2d] transition">Главная</p>
              </Link>
              <div className="py-4 px-8 border-b-2 border-[#2d6a2d] cursor-pointer group flex items-center gap-1">
                <p className="text-[#2d6a2d] font-semibold text-sm tracking-widest uppercase">Каталог</p>
                <MdKeyboardArrowDown className="text-[#2d6a2d] text-base" />
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

      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <MdHome className="text-gray-400 text-base" />
          <MdKeyboardArrowRight className="text-gray-300 text-base" />
          <p className="cursor-pointer hover:text-[#2d6a2d] transition">Каталог</p>
          <MdKeyboardArrowRight className="text-gray-300 text-base" />
          <p className="cursor-pointer hover:text-[#2d6a2d] transition">Свеклоуборочная техника</p>
          <MdKeyboardArrowRight className="text-gray-300 text-base" />
          <p className="text-gray-600">Транспортер выгрузной БР 8050 x 1700 x 161</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-16 flex gap-8">

        <div className="w-56 shrink-0">
          {categories.map((cat, i) => (
            <div key={i}>
              <div className={`flex items-center justify-between py-3 px-3 rounded cursor-pointer ${cat.active ? 'bg-[#2d6a2d] text-white' : 'hover:text-[#2d6a2d]'} transition`}>
                <p className={`text-sm font-medium ${cat.active ? 'text-white' : 'text-gray-700'}`}>{cat.label}</p>
                {cat.active && <MdKeyboardArrowDown className="text-white text-base" />}
              </div>
              {cat.active && cat.sub && (
                <div className="border-b border-gray-100 pb-2 mb-1">
                  {cat.sub.map((s, j) => (
                    <div key={j} className="py-2 px-4 cursor-pointer hover:text-[#2d6a2d] transition">
                      <p className="text-gray-500 text-sm">{s}</p>
                    </div>
                  ))}
                </div>
              )}
              {!cat.active && <div className="border-b border-gray-100" />}
            </div>
          ))}
        </div>

        <div className="flex-1">
          <h1 className="text-gray-900 font-bold text-3xl mb-6">
            Транспортер выгрузной БР 8050 x 1700 x 161
          </h1>

          <div className="flex gap-6 mb-8">
            <div className="flex gap-3">
              <div className="w-64 h-56 border border-gray-200 rounded-lg overflow-hidden flex items-center justify-center bg-gray-50">
                <img src={heroPng} alt="Транспортер" className="w-full h-full object-contain p-4" />
              </div>
              <div className="flex flex-col gap-2">
                {[heroPng, heroPng, heroPng].map((img, i) => (
                  <div key={i} className="w-16 h-16 border border-gray-200 rounded overflow-hidden flex items-center justify-center bg-gray-50 cursor-pointer hover:border-[#2d6a2d] transition">
                    <img src={img} alt="" className="w-full h-full object-contain p-1" />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <p className="text-gray-900 font-semibold text-base mb-4">Основные характеристики:</p>
              <div className="border border-gray-200 rounded-lg overflow-hidden mb-5">
                {[
                  ['Артикул', '1056025611'],
                  ['Производитель', 'MEDO'],
                  ['Ширина', '1700 мм'],
                  ['Кол-во прутков', '161 шт.'],
                ].map(([label, value], i) => (
                  <div key={i} className={`flex items-center justify-between px-4 py-3 text-sm ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    <p className="text-gray-500">{label}</p>
                    <p className="text-gray-800 font-medium">{value}</p>
                  </div>
                ))}
              </div>
              <div className="inline-flex items-center gap-2 bg-[#2d6a2d] text-white px-6 py-3 rounded cursor-pointer hover:bg-[#1e5c1e] transition-colors">
                <p className="font-semibold text-sm tracking-wider uppercase">Узнать стоимость</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="inline-block bg-[#e8f5e9] text-[#2d6a2d] text-xs font-semibold px-3 py-1 rounded mb-4">
              <p>Оплата и доставка</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-gray-600 text-sm leading-relaxed">
                Поставляем оригинальные запчасти, а также качественные аналоги.<br />
                Оказываем услуги по Ремонту и восстановлению деталей, узлов и механизмов.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Помогаем специалистам правильно дефектовать технику и подобрать именно те детали, которые действительно необходимы. Оказываем информационную поддержку технических специалистов при работе с каталогами и определением правильных параметров и характеристик деталей.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Проводим консультации для руководителей о правильной эксплуатации техники, а также определении причин аварийных поломок вследствие нарушений правил выполнения работ и технологии.
              </p>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden" style={{minHeight: '220px'}}>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{backgroundImage: `url(${heroPng})`, filter: 'brightness(0.4)'}}
            />
            <div className="relative z-10 p-8 flex flex-col justify-center" style={{minHeight: '220px'}}>
              <h1 className="text-white font-bold text-2xl mb-2">Остались вопросы?</h1>
              <p className="text-gray-300 text-sm mb-6">
                Оставьте заявку на подбор нужного товара<br />
                и <span className="text-white font-semibold">бесплатную</span> консультацию специалиста
              </p>
              <div className="flex flex-col gap-3 max-w-xs">
                <div className="bg-white rounded px-4 py-3">
                  <p className="text-gray-400 text-sm">номер телефона</p>
                </div>
                <div className="bg-[#2d6a2d] rounded px-6 py-3 cursor-pointer hover:bg-[#1e5c1e] transition text-center">
                  <p className="text-white font-bold text-sm tracking-widest uppercase">Получить консультацию</p>
                </div>
              </div>
            </div>
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
