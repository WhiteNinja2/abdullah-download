import React, { useState, useEffect } from 'react'
import { Moon, Sun, Download, ChevronDown, Menu, Globe, Globe2 } from 'lucide-react'

const translations = {
  en: {
    home: "Home",
    features: "Features",
    about: "About",
    download: "Download",
    getStarted: "Get Started",
    heroTitle: "Abdullah is a collaborative Islamic AI assistant",
    heroSubtitle: "Built to help Muslims deepen their understanding of Islam and enhance their spiritual journey.",
    downloadNow: "Download Now",
    featuresTitle: "Features",
    worshipGuidance: "Worship Guidance",
    worshipDescription: "Get accurate instructions on performing Islamic rituals and prayers.",
    islamicKnowledge: "Islamic Knowledge",
    knowledgeDescription: "Access a vast database of reliable Islamic information and teachings.",
    aiPowered: "AI-Powered Answers",
    aiDescription: "Get instant answers to your Islamic questions using advanced AI technology.",
    aboutTitle: "About Abdullah",
    aboutDescription: "Abdullah is an intelligent Islamic assistant designed to provide comprehensive services to Muslims. It offers guidance on proper worship practices, access to accurate religious information, and answers to various Islamic questions using artificial intelligence. The app also includes prayer times for Mecca and aims to help users deepen their understanding of Islam.",
    downloadTitle: "Download Abdullah",
    useInWeb: "Use in Web",
    downloadForIOS: "Download for iOS",
    downloadForAndroid: "Download for Android",
    footer: "© 2024 Abdullah App. All rights reserved.",
  },
  ar: {
    home: "الرئيسية",
    features: "الميزات",
    about: "حول",
    download: "تحميل",
    getStarted: "ابدأ الآن",
    heroTitle: "عبد الله هو مساعد إسلامي ذكي تعاوني",
    heroSubtitle: "مصمم لمساعدة المسلمين على تعميق فهمهم للإسلام وتعزيز رحلتهم الروحية.",
    downloadNow: "حمل الآن",
    featuresTitle: "الميزات",
    worshipGuidance: "إرشادات العبادة",
    worshipDescription: "احصل على تعليمات دقيقة لأداء الطقوس والصلوات الإسلامية.",
    islamicKnowledge: "المعرفة الإسلامية",
    knowledgeDescription: "الوصول إلى قاعدة بيانات واسعة من المعلومات والتعاليم الإسلامية الموثوقة.",
    aiPowered: "إجابات مدعومة بالذكاء الاصطناعي",
    aiDescription: "احصل على إجابات فورية لأسئلتك الإسلامية باستخدام تقنية الذكاء الاصطناعي المتقدمة.",
    aboutTitle: "حول عبد الله",
    aboutDescription: "عبد الله هو مساعد إسلامي ذكي مصمم لتقديم خدمات شاملة للمسلمين. يقدم إرشادات حول ممارسات العبادة الصحيحة، والوصول إلى المعلومات الدينية الدقيقة، والإجابة على مختلف الأسئلة الإسلامية باستخدام الذكاء الاصطناعي. يتضمن التطبيق أيضًا مواقيت الصلاة لمكة المكرمة ويهدف إلى مساعدة المستخدمين على تعميق فهمهم للإسلام.",
    downloadTitle: "تحميل عبد الله",
    useInWeb: "استخدم في الويب",
    downloadForIOS: "تحميل لنظام iOS",
    downloadForAndroid: "تحميل لنظام Android",
    footer: "© 2024 تطبيق عبد الله. جميع الحقوق محفوظة.",
  }
}

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [lang, setLang] = useState('en')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const toggleLang = () => {
    setLang(lang === 'en' ? 'ar' : 'en')
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const t = translations[lang]

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white font-sans transition-colors duration-300 ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      <header className="p-4 flex justify-between items-center bg-white bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-50 backdrop-blur-md fixed w-full z-10 transition-colors duration-300">
        <div className="flex items-center space-x-2 animate-smoothRise">
          <img src="https://cdn.discordapp.com/attachments/1285564913053466665/1289924017255485521/4264711.png?ex=67027fdb&is=67012e5b&hm=5442994f5eba3642689ca03c596739daaffc32557b6892bdc018893d7852c301&" alt="Abdullah Logo" className="w-8 h-8" />
          <span className="text-2xl font-bold">Abdullah</span>
        </div>
        <nav className={`md:block ${menuOpen ? 'block' : 'hidden'} absolute md:relative top-full left-0 w-full md:w-auto bg-white dark:bg-gray-800 md:bg-transparent`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0">
            <li><a href="#home" className="nav-link hover:text-green-600 dark:hover:text-green-400 transition duration-300 animate-smoothRise delay-100" onClick={toggleMenu}>{t.home}</a></li>
            <li><a href="#features" className="nav-link hover:text-green-600 dark:hover:text-green-400 transition duration-300 animate-smoothRise delay-200" onClick={toggleMenu}>{t.features}</a></li>
            <li><a href="#about" className="nav-link hover:text-green-600 dark:hover:text-green-400 transition duration-300 animate-smoothRise delay-300" onClick={toggleMenu}>{t.about}</a></li>
            <li><a href="#download" className="nav-link hover:text-green-600 dark:hover:text-green-400 transition duration-300 animate-smoothRise delay-400" onClick={toggleMenu}>{t.download}</a></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleLang}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition-colors duration-300 animate-smoothRise delay-100"
          >
            <Globe className="w-5 h-5" />
          </button>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition-colors duration-300 animate-smoothRise delay-200"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button className="bg-green-600 dark:bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 dark:hover:bg-green-600 transition duration-300 animate-smoothRise delay-300 hidden md:block">
            {t.getStarted}
          </button>
          <button onClick={toggleMenu} className="md:hidden">
            <Menu className="w-6 h-6 cursor-pointer animate-smoothRise delay-400" />
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="pt-32 pb-20 px-4">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight animate-smoothRise">
                {t.heroTitle}
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300 animate-smoothRise delay-100">
                {t.heroSubtitle}
              </p>
              <a href="#download" className="bg-green-600 dark:bg-green-500 text-white px-6 md:px-8 py-3 rounded-md text-lg font-semibold hover:bg-green-700 dark:hover:bg-green-600 transition duration-300 inline-flex items-center animate-smoothRise delay-200">
                {t.downloadNow}
                <ChevronDown className="ml-2 w-5 h-5" />
              </a>
            </div>
            <div className="md:w-1/2 animate-smoothRise delay-300">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg transform rotate-6 scale-105 opacity-50 blur-lg"></div>
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl transition-colors duration-300">
                  <div className="iphone-mockup">
                    <img 
                      src={darkMode 
                        ? "https://cdn.discordapp.com/attachments/882371040385323090/1292198781156069467/Dark_mode.PNG?ex=6702dd65&is=67018be5&hm=ceffb2fb4ad53f39b54609cc0400ca837c8f39c55423fcb78b8ca629c095f0db&" 
                        : "https://cdn.discordapp.com/attachments/882371040385323090/1292185093699534920/image.png?ex=6702d0a5&is=67017f25&hm=99ba504d8529f193d1718662eaf8629188af769f4b167c970b877bd19387ff18&"
                      } 
                      alt="Abdullah App Screenshot" 
                      className="iphone-screen"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-white bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-50 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-smoothRise">{t.featuresTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                title={t.worshipGuidance}
                description={t.worshipDescription}
                icon={<img src="https://cdn.discordapp.com/attachments/1285564913053466665/1289924017255485521/4264711.png?ex=67027fdb&is=67012e5b&hm=5442994f5eba3642689ca03c596739daaffc32557b6892bdc018893d7852c301&" alt="Worship Guidance" className="w-10 h-10" />}
                delay="delay-100"
              />
              <FeatureCard
                title={t.islamicKnowledge}
                description={t.knowledgeDescription}
                icon={<img src="https://cdn.discordapp.com/attachments/1285564913053466665/1289924017255485521/4264711.png?ex=67027fdb&is=67012e5b&hm=5442994f5eba3642689ca03c596739daaffc32557b6892bdc018893d7852c301&" alt="Islamic Knowledge" className="w-10 h-10" />}
                delay="delay-200"
              />
              <FeatureCard
                title={t.aiPowered}
                description={t.aiDescription}
                icon={<img src="https://cdn.discordapp.com/attachments/1285564913053466665/1289924017255485521/4264711.png?ex=67027fdb&is=67012e5b&hm=5442994f5eba3642689ca03c596739daaffc32557b6892bdc018893d7852c301&" alt="AI-Powered Answers" className="w-10 h-10" />}
                delay="delay-300"
              />
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center animate-smoothRise">{t.aboutTitle}</h2>
            <p className="text-lg text-center max-w-3xl mx-auto text-gray-600 dark:text-gray-300 animate-smoothRise delay-100">
              {t.aboutDescription}
            </p>
          </div>
        </section>

        <section id="download" className="py-20 bg-white bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-50 transition-colors duration-300">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-smoothRise">{t.downloadTitle}</h2>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
              <a href="https://abdullah-assist.onrender.com/" target="_blank" rel="noopener noreferrer" className="download-button bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300 flex items-center animate-smoothRise delay-100 w-full md:w-auto justify-center">
                <Globe2 className="w-6 h-6 mr-2" />
                {t.useInWeb}
              </a>
              <a href="#" className="download-button bg-black text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-900 transition duration-300 flex items-center animate-smoothRise delay-200 w-full md:w-auto justify-center">
                <Download className="w-6 h-6 mr-2" />
                {t.downloadForIOS}
              </a>
              <a href="#" className="download-button bg-green-600 dark:bg-green-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-green-700 dark:hover:bg-green-600 transition duration-300 flex items-center animate-smoothRise delay-300 w-full md:w-auto justify-center">
                <Download className="w-6 h-6 mr-2" />
                {t.downloadForAndroid}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-200 dark:bg-gray-800 py-8 transition-colors duration-300">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400 animate-smoothRise">
          <p>{t.footer}</p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ title, description, icon, delay }) {
  return (
    <div className={`feature-card bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 animate-smoothRise ${delay}`}>
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  )
}

export default App