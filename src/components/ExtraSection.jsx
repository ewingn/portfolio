import React from 'react';
import { Globe, HeartPulse, Car, BookOpenText } from 'lucide-react';

const ExtraSection = () => {
  return (
    <section id="extra" className="py-16 md:py-24 px-6 md:px-8 lg:px-16 bg-gradient-to-br from-blue-50 to-purple-50 relative z-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-700 mb-10">Extra: Life Beyond Product</h2>
        <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
          Here's a glimpse into my diverse interests – from global affairs to the pitch, and the ideas that fuel my personal growth and unique perspective as a Product Manager.
        </p>

        {/* Categories of interests with descriptive text */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col items-center">
            <Globe className="w-16 h-16 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold text-purple-700 mb-2">US-China Relations & Travel</h3>
            <p className="text-gray-600 text-sm">Deeply engaged in international affairs and cross-cultural experiences, fostering a global mindset that's invaluable for product strategy in diverse markets. My travels inform a nuanced understanding of user needs worldwide.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col items-center">
            <HeartPulse className="w-16 h-16 text-red-500 mb-4" />
            <h3 className="text-xl font-bold text-purple-700 mb-2">Mental Health Advocacy & Healthcare</h3>
            <p className="text-gray-600 text-sm">As co-founder of MHCEP and with insights from my wife's plastic surgery internship, I'm committed to improving healthcare access and training. This passion drives my focus on user-centric design in health tech.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col items-center">
            <Car className="w-16 h-16 text-green-500 mb-4" />
            <h3 className="text-xl font-bold text-purple-700 mb-2">EVs & Fintech Innovations</h3>
            <p className="text-gray-600 text-sm">Passionate about sustainable technology and the evolving landscape of financial innovation. I actively follow trends in electric vehicles and fintech, always looking for disruptive product opportunities.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col items-center lg:col-span-3"> {/* Centered for single item */}
            <BookOpenText className="w-16 h-16 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold text-purple-700 mb-2">History & Sports (Spurs Supporter!)</h3>
            <p className="text-gray-600 text-sm">My appreciation for history informs strategic thinking and understanding long-term trends, while being an avid Spurs (soccer) supporter highlights my understanding of teamwork, strategy, and perseverance – qualities crucial in product development.</p>
          </div>
        </div>

        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-blue-700 mb-5">My Philosophy & Driving Forces</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            As an **Iowan**, I bring a grounded perspective to complex challenges. My journey as a **mental health advocate** and **co-founder of MHCEP** has deepened my understanding of critical societal needs, translating into a human-centered approach to product development. And yes, as an **avid Spurs Supporter**, I appreciate teamwork, strategy, and the thrill of a well-executed plan on and off the field! These diverse facets of my life collectively fuel my creativity and analytical prowess, enabling me to build products with purpose and impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExtraSection;
