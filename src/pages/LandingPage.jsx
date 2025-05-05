import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Search,
  MessageSquareText,
  ThumbsUp,
  Users,
  Clock,
  MailCheck,
  RefreshCw,
  TrendingUp,
  ArrowLeft,
  Send,
  MessageCircle,
  HandCoins,
  MessageCircleMore,
  ChevronDown,
  Bot,
  Car,
  Home,
  Globe,
  ShoppingBag,
  Shield,
  BadgeDollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ContactForm from "../components/ContactForm";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-white to-gray-50 text-right"
      dir="rtl"
    >
      {/* Contact Form Modal */}
      <ContactForm
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      {/* Header */}
      <header
        className={`fixed top-0 right-0 left-0 py-4 px-6 md:px-12 transition-all duration-300 z-50 ${
          scrollY > 50 ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <MessageCircleMore className="w-8 h-8 text-orange-500" />
              <span className="font-bold text-xl text-gray-800">
                ליד<span className="text-orange-500">מאסטר</span>
              </span>
            </motion.div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#how-it-works"
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              איך זה עובד
            </a>
            <a
              href="#features"
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              יתרונות
            </a>
            <a
              href="#target-audience"
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              למי זה מתאים
            </a>
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6"
              onClick={openContactModal}
            >
              צור קשר
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={toggleMenu}
              size="icon"
              aria-label="תפריט"
            >
              {isMenuOpen ? (
                <ArrowLeft className="w-6 h-6" />
              ) : (
                <div className="flex flex-col gap-1.5">
                  <div className="w-6 h-0.5 bg-gray-600"></div>
                  <div className="w-6 h-0.5 bg-gray-600"></div>
                  <div className="w-4 h-0.5 bg-gray-600"></div>
                </div>
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white absolute right-0 left-0 top-16 shadow-lg py-4 px-6 flex flex-col gap-6"
          >
            <a
              href="#how-it-works"
              className="text-gray-600 hover:text-orange-500 transition-colors py-2 border-b border-gray-100"
            >
              איך זה עובד
            </a>
            <a
              href="#features"
              className="text-gray-600 hover:text-orange-500 transition-colors py-2 border-b border-gray-100"
            >
              יתרונות
            </a>
            <a
              href="#target-audience"
              className="text-gray-600 hover:text-orange-500 transition-colors py-2 border-b border-gray-100"
            >
              למי זה מתאים
            </a>
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-full"
              onClick={openContactModal}
            >
              צור קשר
            </Button>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full md:w-1/2 mt-12 md:mt-0"
          >
            <img
              src="https://images.unsplash.com/photo-1556155092-8707de31f9c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
              alt="אוטומציה של ניהול לידים בוואטסאפ"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-1/2 md:pr-12"
          >
            <Badge className="bg-orange-100 text-orange-600 mb-4 py-1 px-3 rounded-full">
              חדש!
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
              כלי עוצמתי למתווכים וסוכני מכירות –{" "}
              <span className="text-orange-500">אוטומציה חכמה</span> בלחיצת
              כפתור
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              אסוף מודעות רלוונטיות מאתר יד2 ושלח הודעות וואטסאפ אישיות למפרסמים
              – כולל ניהול שיחה אוטומטי לחימום הליד והצעת שירותים מותאמת אישית.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                onClick={openContactModal}
              >
                התחל עכשיו
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-6 rounded-full"
                onClick={() => {
                  document.getElementById("how-it-works").scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                גלה עוד
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -z-10 top-1/2 left-10 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute -z-10 top-1/3 right-10 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      </section>

      {/* How it Works Section */}
      <section
        id="how-it-works"
        className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-orange-50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={container}
            className="text-center mb-16"
          >
            <motion.h2
              variants={item}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            >
              איך זה <span className="text-orange-500">עובד</span>
            </motion.h2>
            <motion.div
              variants={item}
              className="w-24 h-1 bg-orange-500 mx-auto mb-6"
            ></motion.div>
            <motion.p
              variants={item}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              תהליך פשוט בשלושה שלבים שמאפשר לך להגיע ללקוחות פוטנציאליים באופן
              אישי ואוטומטי
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="text-center h-full flex flex-col"
            >
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto shadow-xl mb-6">
                <Search className="w-10 h-10 text-orange-500" />
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  1. איתור מודעות רלוונטיות
                </h3>
                <p className="text-gray-600 flex-1">
                  המערכת סורקת באופן אוטומטי את יד2 ומאתרת מודעות רלוונטיות לפי
                  הקריטריונים שהגדרת, כולל מחיר, מיקום, ופרטים ספציפיים.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="text-center h-full flex flex-col"
            >
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto shadow-xl mb-6">
                <MessageSquareText className="w-10 h-10 text-orange-500" />
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  2. שליחת הודעת וואטסאפ אוטומטית
                </h3>
                <p className="text-gray-600 flex-1">
                  המערכת שולחת הודעת וואטסאפ אישית ואוטנטית למפרסם, עם התאמה
                  מדויקת למודעה הספציפית שפרסם.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              transition={{ delay: 0.4 }}
              className="text-center h-full flex flex-col"
            >
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto shadow-xl mb-6">
                <ThumbsUp className="w-10 h-10 text-orange-500" />
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  3. ניהול שיחה לחימום הליד
                </h3>
                <p className="text-gray-600 flex-1">
                  בוט חכם מנהל את השיחה הראשונית, עונה על שאלות, ומחמם את הליד
                  עד לנקודה שאתה מתערב עם הצעה אישית.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section
        id="target-audience"
        className="py-24 px-6 md:px-12 lg:px-24 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={container}
            className="text-center mb-16"
          >
            <motion.h2
              variants={item}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            >
              למי הכלי <span className="text-orange-500">מתאים</span>?
            </motion.h2>
            <motion.div
              variants={item}
              className="w-24 h-1 bg-orange-500 mx-auto mb-6"
            ></motion.div>
            <motion.p
              variants={item}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              הפתרון שלנו אידיאלי למגוון בעלי מקצוע ועסקים שמחפשים לקוחות חדשים
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:border-orange-200"
            >
              <div className="bg-orange-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Home className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                מתווכי דירות
              </h3>
              <p className="text-gray-600">
                איתור מודעות של מוכרים ושוכרים פרטיים והצעת שירותי תיווך
                מקצועיים עם יתרון אמיתי.
              </p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:border-orange-200"
            >
              <div className="bg-orange-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Car className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                סוכני רכב
              </h3>
              <p className="text-gray-600">
                שיווק שירותי מכירה וקנייה של רכבים למפרסמים פרטיים, הצעת הערכות
                שווי והצעות מחיר מושכות.
              </p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:border-orange-200"
            >
              <div className="bg-orange-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                סוכני ביטוח
              </h3>
              <p className="text-gray-600">
                הצעת שירותי ביטוח נכס ומשכנתא למוכרי דירות, בדיוק בזמן הנכון
                כשהם מפרסמים את הנכס למכירה ומתכננים את המעבר לנכס הבא.
              </p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:border-orange-200"
            >
              <div className="bg-orange-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <BadgeDollarSign className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                יועצי משכנתאות
              </h3>
              <p className="text-gray-600">
                איתור מוכרי דירות והצעת שירותי ייעוץ משכנתא מקצועיים לקראת רכישת
                הנכס הבא שלהם, בדיוק בשלב שבו הם זקוקים לכך.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-orange-50 to-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={container}
            className="text-center mb-16"
          >
            <motion.h2
              variants={item}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            >
              יתרונות <span className="text-orange-500">הכלי</span>
            </motion.h2>
            <motion.div
              variants={item}
              className="w-24 h-1 bg-orange-500 mx-auto mb-6"
            ></motion.div>
            <motion.p
              variants={item}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              מערכת חכמה שחוסכת לך זמן ומאמץ ומגדילה משמעותית את יחס ההמרה שלך
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="flex gap-6 items-start"
            >
              <div className="bg-orange-50 p-3 rounded-xl">
                <Clock className="w-10 h-10 text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  חסכון בזמן
                </h3>
                <p className="text-gray-600">
                  אוטומציה מלאה של תהליך איתור הלקוחות והפנייה הראשונית, חוסכת
                  שעות רבות של עבודה ידנית יומיומית.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              transition={{ delay: 0.1 }}
              className="flex gap-6 items-start"
            >
              <div className="bg-orange-50 p-3 rounded-xl">
                <MailCheck className="w-10 h-10 text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  פנייה אישית ואוטומטית
                </h3>
                <p className="text-gray-600">
                  הודעות מותאמות אישית שנראות אנושיות לחלוטין ומתייחסות בדיוק
                  לפרטי המודעה הספציפית של הלקוח.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="flex gap-6 items-start"
            >
              <div className="bg-orange-50 p-3 rounded-xl">
                <MessageCircle className="w-10 h-10 text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  שילוב פשוט עם WhatsApp
                </h3>
                <p className="text-gray-600">
                  אינטגרציה חלקה עם הוואטסאפ העסקי שלך, ללא צורך בתוכנות או
                  חשבונות נוספים, עם מעקב מלא אחרי כל השיחות.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              transition={{ delay: 0.3 }}
              className="flex gap-6 items-start"
            >
              <div className="bg-orange-50 p-3 rounded-xl">
                <TrendingUp className="w-10 h-10 text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  הגדלת יחס המרה
                </h3>
                <p className="text-gray-600">
                  הגדלה משמעותית של אחוזי התגובה והמרה ללקוחות, באמצעות פנייה
                  בזמן אמת כשהלקוח עדיין מעוניין ופעיל.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                className="w-full md:w-1/2"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  צפה בכלי <span className="text-orange-500">בפעולה</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  ראה איך המערכת מאתרת מודעות, שולחת הודעות ומנהלת שיחות באופן
                  אוטומטי, ולמד איך היא יכולה לעזור לך לייצר יותר לידים
                  איכותיים.
                </p>
                <div className="flex gap-4">
                  <Button
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-6 shadow-lg hover:shadow-xl transition-all"
                    onClick={openContactModal}
                  >
                    <Send className="w-5 h-5 ml-2" />
                    תיאום הדגמה
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                transition={{ delay: 0.2 }}
                className="w-full md:w-1/2"
              >
                <div className="relative w-full rounded-xl overflow-hidden shadow-2xl border-8 border-gray-800 aspect-video">
                  <div className="absolute top-0 left-0 right-0 h-6 bg-gray-800 flex items-center justify-start px-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="pt-6 bg-gray-100 h-full">
                    <img
                      src="https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80"
                      alt="דמו של הכלי בפעולה"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-orange-500 to-yellow-600 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              רוצה להתחיל לייצר לידים חמים בוואטסאפ?
            </h2>
            <p className="text-xl opacity-90 mb-10 max-w-3xl mx-auto">
              הגיע הזמן להפסיק לבזבז זמן על חיפוש לקוחות. תן למערכת האוטומטית
              שלנו לעשות את העבודה בשבילך.
            </p>
            <Button
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 rounded-full px-10 py-7 text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              onClick={openContactModal}
            >
              צור קשר עכשיו
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 lg:px-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-10">
            <div className="md:w-1/3">
              <div className="flex items-center gap-2 mb-4">
                <MessageCircleMore className="w-6 h-6 text-orange-500" />
                <span className="font-bold text-lg text-gray-800">
                  ליד<span className="text-orange-500">מאסטר</span>
                </span>
              </div>
              <p className="text-gray-600 mb-6">
                פתרון אוטומציה חכם לאיסוף לידים חמים וניהול שיחות בוואטסאפ עבור
                עסקים ואנשי מקצוע.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-4">קישורים</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#how-it-works"
                    className="text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    איך זה עובד
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    יתרונות
                  </a>
                </li>
                <li>
                  <a
                    href="#target-audience"
                    className="text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    למי זה מתאים
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-4">צור קשר</h4>
              <ul className="space-y-2">
                <li className="text-gray-600 hover:text-orange-500 transition-colors">
                  <a href="mailto:moshe@dreamapp.co.il" dir="ltr">
                    moshe@dreamapp.co.il
                  </a>
                </li>
                <li className="text-gray-600 hover:text-orange-500 transition-colors">
                  <a href="tel:0523587990" dir="ltr">
                    052-358-7990
                  </a>
                </li>
                <li className="text-gray-600">מודיעין, ישראל</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-4">עקבו אחרינו</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-gray-200 hover:bg-orange-100 text-gray-600 hover:text-orange-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-gray-200 hover:bg-orange-100 text-gray-600 hover:text-orange-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-gray-200 hover:bg-orange-100 text-gray-600 hover:text-orange-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-10 pt-8 text-center text-gray-500 text-sm">
            <p>© כל הזכויות שמורות לידמאסטר {new Date().getFullYear()}</p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollY > 300 ? 1 : 0 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 left-6 bg-orange-500 text-white rounded-full p-3 shadow-lg hover:bg-orange-600 transition-all z-50 focus:outline-none"
        aria-label="חזרה למעלה"
      >
        <ChevronDown className="w-6 h-6 transform rotate-180" />
      </motion.button>

      {/* Animation styles */}
      <style jsx="true">{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>

      {/* WhatsApp Floating Button */}
      <div dir="ltr">
        <FloatingWhatsApp
          phoneNumber="972523587990"
          accountName="לידמאסטר"
          avatar="/whatsapp-avatar.jpg"
          statusMessage="זמין כעת"
          chatMessage="שלום! 👋 איך אוכל לעזור לך היום?"
          placeholder="הקלד הודעה..."
          allowClickAway={true}
          allowEsc={true}
          darkMode={false}
          buttonStyle={{ left: "unset", right: "24px" }}
          notification={true}
          notificationDelay={60}
          notificationSound={true}
        />
      </div>
    </div>
  );
}
