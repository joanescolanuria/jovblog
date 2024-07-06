"use client"; // Añadir esta línea al inicio del archivo

import { blog_data } from '@/assets/assets';
import React, { useState } from 'react';
import BlogItem from './BlogItem';

const BlogList = () => {
  const [menu, setMenu] = useState("Todos");

  // Filtrar los datos del blog basado en el menú seleccionado
  const filteredData = blog_data.filter(item => menu === "Todos" || item.category === menu);

  return (
    <div>
      <div className='flex justify-center gap-6 my-10'>
        <button onClick={() => setMenu('Todos')} className={menu === "Todos" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>Todos</button>
        <button onClick={() => setMenu('Java')} className={menu === "Java" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>Java</button>
      </div>
    <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {filteredData.map((item) => (
          <BlogItem
            key={item.id} // Usar una clave única en lugar del índice
            image={item.image}
            title={item.title}
            description={item.description}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
