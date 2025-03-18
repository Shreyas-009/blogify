import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#EDF7FA] py-8 sm:py-10 md:py-12" id="footer">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="mb-6 sm:mb-8 md:mb-10">
          <h2 className="font-bold text-lg sm:text-xl mb-1 uppercase">
            KRYSTELLE ROMY GROUP
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
          <div className="mb-2 md:mb-0">
            <h3 className="font-bold uppercase text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">
              KRYSTELLE ROMY
            </h3>
            <p className="text-gray-600 font-semibold mb-2 text-xs sm:text-sm">
              DRE#01977487
            </p>
          </div>

          <div className="mb-2 md:mb-0">
            <h3 className="font-bold uppercase text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">
              EMAIL
            </h3>
            <p className="text-gray-600 font-semibold mb-2 text-xs sm:text-sm break-words">
              krystelle@gmail.com
            </p>
          </div>

          <div className="mb-2 md:mb-0">
            <h3 className="font-bold uppercase text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">
              PHONE
            </h3>
            <p className="text-gray-600 font-semibold mb-2 text-xs sm:text-sm">
              (123) 456 7890
            </p>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <h3 className="font-bold uppercase text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">
              ADDRESS
            </h3>
            <p className="text-gray-600 font-semibold mb-2 text-xs sm:text-sm">
              1123 HERMOSA AVENUE, SUITE #210,
              <br className="hidden sm:block" />
              <span className="sm:ml-0">HERMOSA BEACH, CA 92804</span>
            </p>
          </div>
        </div>

        <div className="text-gray-600 text-[10px] sm:text-xs font-semibold mb-6 sm:mb-8">
          <p className="leading-relaxed">
            Krystelle Romy is a real estate agent licensed by the state of
            California affiliated with compass. Krystelle Romy is a real estate
            broker licensed by the state of California and abides by equal
            housing opportunity laws. All material presented herein is intended
            for informational purposes only. Information is compiled from
            sources deemed reliable but is subject to errors, omissions, changes
            in price, condition, sale, or withdrawal without notice. No
            statement is made as to accuracy of any description. All
            measurements and square footages are approximate. This is not
            intended to solicit property already listed. Nothing herein shall be
            construed as legal, accounting or other professional advice outside
            the realm of real estate brokerage.
          </p>
        </div>

        <div className="border-t border-gray-500 pt-4 sm:pt-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0">
            <p className="text-gray-600 text-xs sm:text-sm font-bold">
              © 2023, KRYSTELLE. POWERED BY{" "}
              <a
                href="#"
                className="text-[#096CC9] border-b-2 border-[#096CC9]"
              >
                ROUNDTECHSQUARE
              </a>
            </p>
            <div className="flex space-x-4 sm:space-x-8">
              <a
                href="#"
                className="text-[10px] sm:text-xs text-gray-600 hover:text-gray-800 font-bold"
              >
                TERMS OF USE
              </a>
              <a
                href="#"
                className="text-[10px] sm:text-xs text-gray-600 hover:text-gray-800 font-bold"
              >
                PRIVACY POLICY
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
