const categories = [
    { img: '/c1.jpg', title: 'Cleaning Products' },
    { img: '/c2.jpg', title: 'Towel Rails<br>& Warmers' },
    { img: '/c3.jpg', title: 'Building Blocks<br>& Toys' },
    { img: '/c4.jpg', title: 'Dining Sets' },
    { img: '/c5.jpg', title: 'Pet Beds' },
    { img: '/c6.jpg', title: 'Kids Learning' },
    { img: '/c7.jpg', title: 'Knife Sharpeners' },
    { img: '/c8.jpg', title: 'Pillow Covers' },
    { img: '/c9.png', title: 'Tablet' },
    { img: '/c10.jpg', title: 'Table Lamp' },
    { img: '/c11.jpg', title: 'School Bags' },
    { img: '/c12.jpg', title: 'Skincare' },
    { img: '/c13.jpg', title: 'Sunglasses' },
    { img: '/c14.jpg', title: 'Starter Kits' },
    { img: '/c15.jpg', title: 'Tote Bags' },
    { img: '/c16.jpg', title: 'Winter Jackets' },
  ];
  
  function Categories() {
    return (
      <div className="flex flex-col mx-auto md:mx-[5%] mt-4">
        <h1 className="text-2xl text-gray-700 mb-2">Categories</h1>
        <div className="bg-white h-auto w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-4 p-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`bg-white h-36 w-full flex flex-col items-center justify-center hover:cursor-pointer hover:shadow-lg ${index < 15 ? 'border-b border-r' : 'border-r'} border-gray-200`}
            >
              <img src={category.img} alt={category.title} className="h-20 mb-2 object-cover" />
              <p className="text-sm text-gray-500 font-bold text-center" dangerouslySetInnerHTML={{ __html: category.title }}></p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Categories;