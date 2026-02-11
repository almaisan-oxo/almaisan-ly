import React from 'react';
import { Language } from '../types';
import ScrollReveal from './ScrollReveal';

interface PrivacyPolicyProps {
  lang: Language;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ lang }) => {
  const content = {
    en: {
      title: 'Privacy Policy',
      lastUpdated: 'Last Updated: January 1, 2025',
      intro: 'At AL MAISAN, we prioritize your privacy and are committed to protecting your personal data. This policy outlines how we collect, use, and safeguard your information.',
      sections: [
        {
          heading: '1. Information We Collect',
          text: 'We may collect personal information such as your name, email address, phone number, and company details when you fill out our contact forms or interact with our services. We also collect usage data automatically to improve website performance.'
        },
        {
          heading: '2. How We Use Your Information',
          text: 'We use your data to: (a) Provide and improve our services, (b) Communicate with you regarding your inquiries, (c) Send promotional materials if you have opted in, and (d) Ensure the security of our platform.'
        },
        {
          heading: '3. Data Sharing & Disclosure',
          text: 'We do not sell your personal data. We may share information with trusted third-party service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.'
        },
        {
          heading: '4. Cookies',
          text: 'Our website uses cookies to enhance user experience. You can choose to disable cookies through your browser settings, though this may affect site functionality.'
        },
        {
          heading: '5. Contact Us',
          text: 'If you have any questions about this Privacy Policy, please contact us at almaisan.ly@gmail.com.'
        }
      ]
    },
    ar: {
      title: 'سياسة الخصوصية',
      lastUpdated: 'آخر تحديث: 1 يناير 2025',
      intro: 'في الميسان، نضع خصوصيتك على رأس أولوياتنا ونلتزم بحماية بياناتك الشخصية. توضح هذه السياسة كيفية جمع معلوماتك واستخدامها وحمايتها.',
      sections: [
        {
          heading: '1. المعلومات التي نجمعها',
          text: 'قد نقوم بجمع معلومات شخصية مثل اسمك، وعنوان بريدك الإلكتروني، ورقم هاتفك، وتفاصيل شركتك عند ملء نماذج الاتصال الخاصة بنا أو التفاعل مع خدماتنا. نقوم أيضاً بجمع بيانات الاستخدام تلقائياً لتحسين أداء الموقع.'
        },
        {
          heading: '2. كيف نستخدم معلوماتك',
          text: 'نستخدم بياناتك لـ: (أ) تقديم خدماتنا وتحسينها، (ب) التواصل معك بخصوص استفساراتك، (ج) إرسال مواد ترويجية إذا وافقت على ذلك، و (د) ضمان أمن منصتنا.'
        },
        {
          heading: '3. مشاركة البيانات والإفصاح عنها',
          text: 'نحن لا نبيع بياناتك الشخصية. قد نشارك المعلومات مع مقدمي خدمات من أطراف ثالثة موثوقين يساعدوننا في تشغيل موقعنا الإلكتروني وإدارة أعمالنا، ويخضع ذلك لاتفاقيات سرية.'
        },
        {
          heading: '4. ملفات تعريف الارتباط (Cookies)',
          text: 'يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربة المستخدم. يمكنك اختيار تعطيل ملفات تعريف الارتباط من خلال إعدادات المتصفح الخاص بك، رغم أن ذلك قد يؤثر على وظائف الموقع.'
        },
        {
          heading: '5. اتصل بنا',
          text: 'إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا على almaisan.ly@gmail.com.'
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

export default PrivacyPolicy;
