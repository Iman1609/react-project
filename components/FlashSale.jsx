const flashSaleItems = [
  { img: '/assets/F1.jpg', title: 'M19 Airpods TWS Bluetooth ', price: '₨848', original: '₨4,000', discount: '-79%' },
  { img: '/assets/F2.jpg', title: 'b2 PC Unstitched Suit..', price: '₨1,750', original: '₨2,450', discount: '-28%' },
  { img: '/assets/F3.jpg', title: 'for heatless curls<br>curler bands...', price: '₨176', original: '₨299', discount: '-29%' },
  { img: '/assets/F4.jpg', title: 'Wall Paper<br>Heat Resistant...', price: '₨296', original: '₨650', discount: '-54%' },
  { img: '/assets/F5.jpg', title: 'P47 Wireless Headset', price: '₨839', original: '₨1,500', discount: '-44%' },
  { img: '/assets/F6.png', title: 'Closet Organizer Water-resistant...', price: '₨176', original: '₨299', discount: '-41%' },
];

function FlashSale() {
  return (
    <div className="flex flex-col mx-auto md:mx-[5%] mt-4">
      <h1 className="text-2xl text-gray-700 mb-2">Flash Sale</h1>
    
      <div className="bg-white flex justify-between items-center h-16 w-full border-b border-gray-300">
        <p className="text-orange-500 text-sm font-bold ml-4">On Sale Now</p>
        <button className="text-orange-500 font-bold border h-9 px-2 text-sm mr-4 hover:bg-orange-50">SHOP ALL PRODUCTS</button>
      </div>
   
      <div className="bg-white w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 px-4">
        {flashSaleItems.map((item, index) => (
          <div
            key={index}
            className="bg-white h-72 p-2 flex flex-col hover:cursor-pointer hover:shadow-lg relative group"
          >
            <div className="relative">
              <img
                src={item.img}
                alt={item.title}
                className="h-44 object-cover"
                onError={(e) => {
                  e.target.src = '/assets/placeholder.png'; 
                  console.error(`Failed to load image: ${item.img}`);
                }}
              />
             
              <div className="absolute top-2 right-2">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white p-1 rounded-full shadow-md cursor-pointer hover:bg-gray-100 group/visual">
                    <img src="/assets/visual-search.svg" alt="Search" className="w-5 h-5" />
                   
                    <div className="absolute top-full right-0 mt-1 flex flex-col space-y-1 opacity-0 group-hover/visual:opacity-100 transition-opacity duration-300">
                      <div className="bg-white p-1 rounded-full shadow-md cursor-pointer hover:bg-gray-100">
                        <img src="/assets/save-copy.svg" alt="Save" className="w-5 h-5" />
                      </div>
                      <div className="bg-white p-1 rounded-full shadow-md cursor-pointer hover:bg-gray-100">
                        <img src="/assets/horizontal-ellipsis.svg" alt="Settings" className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="text-black ml-2 text-sm" dangerouslySetInnerHTML={{ __html: item.title }}></h1>
            <p className="text-orange-500 text-lg ml-2 font-bold">{item.price}</p>
            <pre className="ml-2">
              <span className="text-gray-400 line-through text-xs">{item.original}</span> {item.discount}
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlashSale;