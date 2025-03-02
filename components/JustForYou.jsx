import { useState } from 'react';

const products = [
  { img: '/p1.webp', title: 'TWS Airpods, Super Bass', price: 'Rs. 799', rating: '★★★★☆', reviews: 102 },
  { img: '/p2p30.webp', title: 'decoration candles', price: 'Rs. 1,299', rating: '★★★★☆', reviews: 56 },
  { img: '/p3.webp', title: 'Gulopatone serum and cream', price: 'Rs. 2,499', rating: '★★★★★', reviews: 89 },
  { img: '/p4.webp', title: 'home slippers', price: 'Rs. 1,999', rating: '★★★☆☆', reviews: 220 },
  { img: '/p5.webp', title: 'wireless handsfree', price: 'Rs. 2,299', rating: '★★★★★', reviews: 78 },
  { img: '/F3.jpg', title: 'curling headband', price: 'Rs. 1,499', rating: '★★★★☆', reviews: 61 },
  { img: '/p7.webp', title: 'vintage T9 razor ', price: 'Rs. 1,799', rating: '★★★☆☆', reviews: 140 },
  { img: '/F5.jpg', title: 'wireless headphones', price: 'Rs. 3,499', rating: '★★★★☆', reviews: 95 },
  { img: '/p9.webp', title: 'led glasses', price: 'Rs. 1,199', rating: '★★★★☆', reviews: 130 },
  { img: '/p10.webp', title: 'moisturizing socks', price: 'Rs. 999', rating: '★★★☆☆', reviews: 75 },
  { img: '/p11.webp', title: 'mini card wallet', price: 'Rs. 899', rating: '★★★★☆', reviews: 45 },
  { img: '/p12.webp', title: 'shoes', price: 'Rs. 1,599', rating: '★★★★☆', reviews: 88 },
  { img: '/p13.webp', title: 'french nails', price: 'Rs. 2,799', rating: '★★★★★', reviews: 110 },
  { img: '/p14.webp', title: 'lip gloss ', price: 'Rs. 1,399', rating: '★★★☆☆', reviews: 65 },
  { img: '/p15.webp', title: 'ring light', price: 'Rs. 699', rating: '★★★★☆', reviews: 50 },
  { img: '/p16.webp', title: 'eyeshadow pallette', price: 'Rs. 1,899', rating: '★★★★☆', reviews: 72 },
  { img: '/p17.webp', title: 'Travel Backpack', price: 'Rs. 2,599', rating: '★★★★★', reviews: 99 },
  { img: '/p18.webp', title: 'home decor', price: 'Rs. 1,299', rating: '★★★★☆', reviews: 85 },
  { img: '/p19.webp', title: 'BNB facial kit', price: 'Rs. 1,099', rating: '★★★☆☆', reviews: 60 },
  { img: '/p20.webp', title: 'cords set', price: 'Rs. 499', rating: '★★★★☆', reviews: 120 },
  { img: '/p21.webp', title: 'jucier blender', price: 'Rs. 1,799', rating: '★★★★★', reviews: 77 },
  { img: '/p22.webp', title: 'blush on', price: 'Rs. 699', rating: '★★★★☆', reviews: 55 },
  { img: '/p23.webp', title: 'men jackets', price: 'Rs. 2,199', rating: '★★★★☆', reviews: 90 },
  { img: '/p24.webp', title: 'girls wallet', price: 'Rs. 899', rating: '★★★☆☆', reviews: 45 },
  { img: '/p25.webp', title: 'men wear', price: 'Rs. 1,499', rating: '★★★★☆', reviews: 68 },
  { img: '/p26.webp', title: 'hand bag', price: 'Rs. 599', rating: '★★★★☆', reviews: 82 },
  { img: '/p27.webp', title: 'multani khusa', price: 'Rs. 1,999', rating: '★★★★★', reviews: 105 },
  { img: '/p28.webp', title: 'makeup organizer', price: 'Rs. 3,299', rating: '★★★★☆', reviews: 70 },
  { img: '/p29.webp', title: 'nail buffer', price: 'Rs. 399', rating: '★★★☆☆', reviews: 50 },
  { img: '/p2p30.webp', title: 'candles', price: 'Rs. 799', rating: '★★★★☆', reviews: 62 },
  { img: '/p31.webp', title: 'water bottles', price: 'Rs. 1,699', rating: '★★★★☆', reviews: 93 },
  { img: '/p32.webp', title: 'nailpaint set', price: 'Rs. 499', rating: '★★★★☆', reviews: 88 },
  { img: '/p33.webp', title: 'hoodies for girls', price: 'Rs. 1,599', rating: '★★★★★', reviews: 115 },
  { img: '/p34.webp', title: 'hair scalp', price: 'Rs. 4,999', rating: '★★★★☆', reviews: 130 },
  { img: '/p35.webp', title: 'iphone cover', price: 'Rs. 299', rating: '★★★☆☆', reviews: 40 },
  { img: '/F6.png', title: 'cloths organizer', price: 'Rs. 1,299', rating: '★★★★☆', reviews: 75 },
];

function JustForYou() {
  const [visibleProducts, setVisibleProducts] = useState(12);

  const loadMore = () => setVisibleProducts((prev) => prev + 12);

  return (
    <div className="flex flex-col mx-auto md:mx-[5%] mt-4 mb-8">
      <h2 className="text-2xl text-gray-700 mb-4">Just For You</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full overflow-x-auto">
        {products.slice(0, visibleProducts).map((product, index) => (
          <div
            key={index}
            className="bg-white p-2 hover:shadow-md transition shadow-sm relative group"
          >
            <div className="relative">
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-36 object-cover mb-2"
                onError={(e) => {
                  e.target.src = '/placeholder.png'; // Fallback image if loading fails
                  console.error(`Failed to load image: ${product.img}`);
                }}
              />
              {/* Visual Search Button (shows on card hover) */}
              <div className="absolute top-2 right-2">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white p-1 rounded-full shadow-md cursor-pointer hover:bg-gray-100 group/visual">
                    <img src="/visual-search.svg" alt="Search" className="w-5 h-5" />
                    {/* Save and Settings Buttons (show on visual search hover) */}
                    <div className="absolute top-full right-0 mt-1 flex flex-col space-y-1 opacity-0 group-hover/visual:opacity-100 transition-opacity duration-300">
                      <div className="bg-white p-1 rounded-full shadow-md cursor-pointer hover:bg-gray-100">
                        <img src="/save-copy.svg" alt="Save" className="w-5 h-5" />
                      </div>
                      <div className="bg-white p-1 rounded-full shadow-md cursor-pointer hover:bg-gray-100">
                        <img src="/horizontal-ellipsis.svg" alt="Settings" className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-800">{product.title}</h3>
            <p className="text-orange-500 font-bold">{product.price}</p>
            <div className="flex items-center text-xs text-gray-500 mt-1">
              <span className="text-yellow-400 mr-1">{product.rating}</span> ({product.reviews})
            </div>
          </div>
        ))}
      </div>
      {visibleProducts < products.length && (
        <button
          onClick={loadMore}
          className="block mx-auto mt-6 px-6 py-2 bg-gray-100 text-blue-500 hover:bg-gray-200  border border-blue-300 rounded col-span-full"
        >
          LOAD MORE
        </button>
      )}
    </div>
  );
}

export default JustForYou;