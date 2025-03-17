import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#EDF7FA] py-12">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="mb-10">
          <h2 className="font-bold text-xl mb-1 uppercase">
            KRYSTELLE ROMY GROUP
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold uppercase text-gray-700 mb-2">
              KRYSTELLE ROMY
            </h3>
            <p className="text-gray-600 font-semibold mb-2">DRE#01977487</p>
          </div>

          <div>
            <h3 className="font-bold uppercase text-gray-700 mb-2">EMAIL</h3>
            <p className="text-gray-600 font-semibold mb-2">krystelle@gmail.com</p>
          </div>

          <div>
            <h3 className="font-bold uppercase text-gray-700 mb-2">PHONE</h3>
            <p className="text-gray-600 font-semibold mb-2">(123) 456 7890</p>
          </div>

          <div>
            <h3 className="font-bold uppercase text-gray-700 mb-2">ADDRESS</h3>
            <p className="text-gray-600 font-semibold mb-2">
              1123 HERMOSA AVENUE, SUITE #210,
              <br />
              HERMOSA BEACH, CA 92804
            </p>
          </div>
        </div>

        <div className="text-gray-600 text-xs font-semibold mb-8">
          <p>
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

        <div className="border-t border-gray-500 pt-6">
          <div className="flex justify-between items-center flex-wrap font-bold text-sm">
            <p className="text-gray-600">
              © 2023, KRYSTELLE. POWERED BY{" "}
              <a
                href="#"
                className="text-[#096CC9] border-b-2 border-[#096CC9]"
              >
                ROUNDTECHSQUARE
              </a>
            </p>
            <div className="flex space-x-8">
              <a href="#" className="text-xs text-gray-600 hover:text-gray-800">
                TERMS OF USE
              </a>
              <a href="#" className="text-xs text-gray-600 hover:text-gray-800">
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
