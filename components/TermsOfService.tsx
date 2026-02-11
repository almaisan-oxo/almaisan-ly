import React from 'react';
import { Language } from '../types';
import ScrollReveal from './ScrollReveal';

interface TermsOfServiceProps {
  lang: Language;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ lang }) => {
  const content = {
    en: {
      title: 'Terms of Service',
      lastUpdated: 'Last Updated: January 1, 2025',
      intro: 'Welcome to AL MAISAN. By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions.',
      sections: [
        {
          heading: '1. Intellectual Property',
          text: 'All content, designs, graphics, and code on this website are the property of AL MAISAN unless otherwise stated. You may not reproduce, distribute, or create derivative works without our express written consent.'
        },
        {
          heading: '2. Use of Services',
          text: 'Our services are intended for legitimate business purposes. You agree not to use our website or services for any unlawful activity or to harass, abuse, or harm others.'
        },
        {
          heading: '3. Project Terms',
          text: 'Specific terms regarding deliverables, timelines, and payments for our advertising and design services will be outlined in individual contracts signed with clients.'
        },
        {
          heading: '4. Limitation of Liability',
          text: 'AL MAISAN shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or services. We do not guarantee that our site will be uninterrupted or error-free.'
        },
        {
          heading: '5. Governing Law',
          text: 'These terms are governed by and construed in accordance with the laws of Libya. Any disputes shall be subject to the exclusive jurisdiction of the courts in Tripoli.'
        }
      ]
    },
    ar: {
      title: 'شروط الخدمة',
      lastUpdated: 'آخر تحديث: 1 يناير 2025',
      intro: 'مرحباً بكم في الميسان. من خلال الوصول إلى موقعنا الإلكتروني واستخدام خدماتنا، فإنك توافق على الامتثال للشروط والأحكام التالية والالتزام بها.',
      sections: [
        {
          heading: '1. الملكية الفكرية',
          text: 'جميع المحتويات والتصميمات والرسومات والأكواد الموجودة على هذا الموقع هي ملك لشركة الميسان ما لم ينص على خلاف ذلك. لا يجوز لك إعادة إنتاج أو توزيع أو إنشاء أعمال مشتقة دون موافقة كتابية صريحة منا.'
        },
        {
          heading: '2. استخدام الخدمات',
          text: 'خدماتنا مخصصة لأغراض تجارية مشروعة. أنت توافق على عدم استخدام موقعنا أو خدماتنا لأي نشاط غير قانوني أو لمضايقة الآخرين أو الإساءة إليهم أو إيذائهم.'
        },
        {
          heading: '3. شروط المشاريع',
          text: 'سيتم توضيح الشروط المحددة المتعلقة بالتسليمات، والجداول الزمنية، والدفعات الخاصة بخدمات الإعلان والتصميم لدينا في عقود فردية موقعة مع العملاء.'
        },
        {
          heading: '4. حدود المسؤولية',
          text: 'لن تكون الميسان مسؤولة عن أي أضرار غير مباشرة أو عرضية أو تبعية تنشأ عن استخدام موقعنا أو خدماتنا. نحن لا نضمن أن موقعنا سيعمل دون انقطاع أو خلوه من الأخطاء.'
        },
        {
          heading: '5. القانون الحاكم',
          text: 'تخضع هذه الشروط وتفسر وفقاً لقوانين دولة ليبيا. تخضع أي نزاعات للاختصاص القضائي الحصري للمحاكم في طرابلس.'
        }
      ]
    }
  };

  const t = lang === 'en' ? content.en : content.ar;

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white dark:bg-primary-dark transition-colors duration-500">
      <div className="container mx-auto px-6 max-w-4xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-4">
              {t.title}
            </h1>
            <p className="text-accent font-medium">
              {t.lastUpdated}
            </p>
          </div>
        </ScrollReveal>

        <div className="prose dark:prose-invert prose-lg mx-auto">
          <ScrollReveal delay={100}>
            <p className="text-gray-600 dark:text-gray-300 mb-12 text-lg leading-relaxed">
              {t.intro}
            </p>
          </ScrollReveal>

          <div className="space-y-12">
            {t.sections.map((section, index) => (
              <ScrollReveal key={index} delay={index * 100 + 200} direction="up">
                <div className="bg-neutral dark:bg-white/5 p-8 rounded-2xl border border-gray-100 dark:border-white/10 hover:border-accent/30 transition-colors">
                  <h3 className="text-2xl font-bold text-primary dark:text-white mb-4">
                    {section.heading}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {section.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
