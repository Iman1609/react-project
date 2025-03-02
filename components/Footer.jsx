import footerLogo from '/footer logo.png';
import appStore from '/app store 2.png';
import googlePlay from '/google play 2.png';
import appGallery from '/app gallery.png';
import cashOnDelivery from '/cash on deliverry.png';
import visa from '/visa.png';
import mastercard from '/mastercard.png';
import easypaisa from '/easypaisa.png';
import darazWallet from '/daraz wallet.png';
import jazzcash from '/jazzcash.png';
import unionPay from '/union pay.png';
import hbl from '/hbl.png';
import easyInstallments from '/easy installments.png';
import pcidss from '/pcidss.png';
import pakistan from '/pakistan.png';
import bangladesh from '/bangladesh.png';
import sriLanka from '/sri-lanka.png';
import myanmar from '/maynmar.png';
import facebook from '/facebook.png';
import twitter from '/twitter.png';
import instagram from '/insta.png';
import youtube from '/youtube.png';
import browser from '/browser.png';

function Footer() {
  return (
    <div className="my-8 px-4">
      <div className="mx-auto md:mx-[5%] grid grid-cols-2 sm:grid-cols-3 gap-8">
        <div>
          <h3 className="text-blue-950 text-sm mb-6 font-bold">Customer Care</h3>
          <ul className="space-y-1 text-sm text-blue-950">
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">How to Buy</a></li>
            <li><a href="#" className="hover:underline">Corporate & Bulk Purchasing</a></li>
            <li><a href="#" className="hover:underline">Returns & Refunds</a></li>
            <li><a href="#" className="hover:underline">Daraz Shop</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Purchase Protection</a></li>
            <li><a href="#" className="hover:underline">Daraz Pick Up Points</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-blue-950 text-sm mb-2 font-bold">Daraz</h3>
          <ul className="space-y-1 text-sm text-blue-950">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Digital Payments</a></li>
            <li><a href="#" className="hover:underline">Daraz Donates</a></li>
            <li><a href="#" className="hover:underline">Daraz Blog</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">NTN: 4012116</a></li>
            <li><a href="#" className="hover:underline">Online Shopping App</a></li>
            <li><a href="#" className="hover:underline">Daraz Exclusive</a></li>
            <li><a href="#" className="hover:underline">Daraz University</a></li>
            <li><a href="#" className="hover:underline">Sell on Daraz</a></li>
            <li><a href="#" className="hover:underline">Join Daraz Affiliate Program</a></li>
          </ul>
        </div>
        <div className="flex flex-row items-center">
          <img src={footerLogo} alt="Happy Shopping" className="w-10 mb-2" />
          <div>
            <p className="text-sm text-gray-600 mb-2">Download App</p>
            <div className="flex space-x-2">
              <a href="#"><img src={appStore} alt="App Store" className="w-20" /></a>
              <a href="#"><img src={googlePlay} alt="Google Play" className="w-20" /></a>
              <a href="#"><img src={appGallery} alt="App Gallery" className="w-20" /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white h-auto my-8 px-4 grid grid-cols-2 md:grid-cols-2 gap-8 py-4">
        <div className="mx-0 md:mx-[5%]">
          <h3 className="text-lg text-gray-700 mb-2">Payment Methods</h3>
          <div className="flex flex-wrap items-center space-x-2">
            <img src={cashOnDelivery} alt="Cash on Delivery" className="h-8" />
            <img src={visa} alt="Visa" className="h-6" />
            <img src={mastercard} alt="Mastercard" className="h-8" />
            <img src={easypaisa} alt="Easypaisa" className="h-8" />
            <img src={darazWallet} alt="Daraz Wallet" className="h-8" />
            <img src={jazzcash} alt="Jazzcash" className="h-8" />
            <img src={unionPay} alt="Union Pay" className="h-8" />
            <img src={hbl} alt="HBL" className="h-6" />
            <img src={easyInstallments} alt="Easy Installments" className="h-8" />
          </div>
        </div>
        <div>
          <h3 className="text-lg text-gray-700 mb-2">Verified By</h3>
          <div className="flex flex-wrap items-center space-x-4">
            <img src={pcidss} alt="PCI DSS" className="h-8" />
          </div>
        </div>
      </div>

      <div className="hidden md:block mx-auto my-8 px-4">
        <h2 className="text-gray-600 font-bold mb-4">How Daraz Transformed Online<br /> Shopping in Pakistan</h2>
        <div className="grid grid-cols-4 md:grid-cols-4 gap-8 text-sm text-gray-600 leading-relaxed">
          <div>
            <p>
              Daraz first made waves in Pakistan’s e-commerce market after its introduction in 2012. We have since grown to become Pakistan’s largest platform for online shopping with a network spread across Asia in Pakistan, Bangladesh, Sri Lanka, Myanmar, and Daraz.com.np. Our vision was to provide a safe, efficient online marketplace platform for vendors and customers across the country to come together. We started off exclusively as an online fashion retail platform and over the years expanded to become a complete one-stop solution for all your buying needs. Daraz prides itself on not being just another ecommerce venture in Asia. We work tirelessly to make sure that we provide users with the best online shopping experience and value for their purchases. Whether you shop online through our website or our online shopping mobile App, you can expect easy navigation, customized recommendations, and a smooth online shopping experience guaranteed.
            </p>
          </div>
          <div>
            <p>
              <strong>Shop from Verified Vendors</strong><br />
              Daraz understands that online shopping in Pakistan comes with its fair share of risks. This is why with Daraz Marketplace and Daraz Mall customers have the security of choosing from verified vendors and brands from Karachi, Lahore, Islamabad and all across Pakistan. Now you’ll never have to second guess authenticity because Daraz makes sure to do it for you!<br />
              <strong>Shop Around the World with Daraz Global Collection</strong><br />
              International sellers and local convenience come together with Daraz Global collection. Get the chance to shop online from vendors around the world without leaving the Daraz website. Featuring thousands of novelty gadgets and accessories, Daraz Global Collection offers you a selection of products that you won’t find anywhere else when you’re online shopping in Pakistan.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Top Categories & Brands</h3>
            <p>
              <strong>MOBILE PHONES IN PAKISTAN</strong><br />
              Apple iPhones, Honor Mobiles, Huawei Mobiles, Tecno Mobiles, Redmi Mobiles, Xiaomi Mi Mobiles, Nokia Mobiles, OnePlus Mobiles, Oppo Mobile Phones, Realme Mobiles, Samsung Mobile Phones, Vivo Mobile Phones, Mobile Accessories, Smart Watches<br />
              <strong>LATEST LAPTOPS</strong><br />
              Dell Laptops, HP Laptops, Lenovo Laptops, Mouse, Gaming Graphic Cards, Lenovo Ideapad 3, Macbook Pro 13, HP Probook 650 G2<br />
              <strong>LED TV</strong><br />
              Changhong Led Tv, LG Led Tv, Samsung Led Tv, Sony Led Tv, TCL LED TVs<br />
              <strong>HOME APPLIANCES</strong><br />
              Microwave oven, Geyser, Heater, Refrigerators, Deep Freezers, Generators, Water Dispensers, Fans, Room Cooler, Table Fans, Wall Fans, Exhaust Fans, Pedestal Fans, Window Ac, Solar Panel, Washing Machine<br />
              <strong>DSLR CAMERAS</strong><br />
              Camera Tripods, Drones, IP & CCTV Cameras, Nikon D7000, Nikon D5600, Canon 200D, Canon 1200D, Fujifilm Instax Mini 11, Canon M50
            </p>
          </div>
          <div>
            <p>
              <strong>WOMEN'S FASHION</strong><br />
              Al-Karam Studio, Warda, Salitex, Bonanza Satrangi, Edenrobe, Firdous, Junaid Jamshed, Limelight, Sana Safinaz, Mahru, Pushup Bra, Women Undergarments<br />
              <strong>MEN'S FASHION</strong><br />
              Men's Shirts, Men's T-Shirts<br />
              <strong>ONLINE GROCERY STORE</strong><br />
              Oil & Ghee, Basmati Rice, Dried Fruits, Chocolates, Mattresses<br />
              <strong>ONLINE BOOK STORE</strong><br />
              English Books, Islamic Books, History Books, English Literature Books, Kids Urdu Stories, Pride & Prejudice, Harry Potter Story Books, Namal Novel, Nimra Ahmed Novels<br />
              <strong>USED CARS FOR SALE</strong><br />
              Suzuki Wagon R, KIA Sportage, Honda City, Toyota Prado, Suzuki Alto, Suzuki Cultus, Honda Civic, Honda 125, Honda 70, Yamaha Ybr 125, Hi Speed 150, Hi Speed Freedom 200, Metro 70, Super Power 125, Monster JMS 3500 Electric Bike, Super Power 70, Car Accessories
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white w-full my-auto px-auto">
        <div className="mx-auto grid grid-cols-2 md:grid-cols-2 gap-4 justify-items-center items-center py-8">
          <div>
            <h3 className="text-sm text-gray-600 mb-2">Daraz International</h3>
            <div className="flex flex-wrap items-center space-x-2">
              <img src={pakistan} alt="Pakistan" className="h-6" />
              <p className="text-xs text-gray-600">Pakistan</p>
              <img src={bangladesh} alt="Bangladesh" className="h-6" />
              <p className="text-xs text-gray-600">Bangladesh</p>
              <img src={sriLanka} alt="Sri Lanka" className="h-6" />
              <p className="text-xs text-gray-600">Sri Lanka</p>
              <img src={myanmar} alt="Myanmar" className="h-6" />
              <p className="text-xs text-gray-600">Myanmar</p>
            </div>
          </div>
          <div>
            <h3 className="text-xs text-gray-600 mb-2">Follow Us</h3>
            <div className="flex flex-nowrap items-center space-x-4">
              <img src={facebook} alt="Facebook" className="h-4" />
              <img src={twitter} alt="Twitter" className="h-6" />
              <img src={instagram} alt="Instagram" className="h-6" />
              <img src={youtube} alt="YouTube" className="h-6" />
              <img src={browser} alt="Website" className="h-6" />
            </div>
          </div>
          <div className="col-span-full text-center md:text-center">
            <p className="text-sm text-gray-600">© Daraz 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;