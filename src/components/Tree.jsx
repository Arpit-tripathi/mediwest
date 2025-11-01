// import React from 'react';

// const TreeNode = ({ title, children }) => (
//   <div className="flex flex-col items-center ">
//     <div className="bg-blue-100 border border-blue-400 rounded-lg px-4 py-2 text-blue-800 font-semibold shadow-md">
//       {title}
//     </div>
//     {children && (
//       <div className="mt-4 flex space-x-6">
//         {children.map((child, idx) => (
//           <TreeNode key={idx} title={child.title} children={child.children} />
//         ))}
//       </div>
//     )}
//   </div>
// );

// const Tree = () => {
//   const treeData = {
//     title: 'MediWest Consultancy',
//     children: [
//       { title: 'QCI' },
//       {title:'QAI'},
//       { title: 'NABH' },
//       { title: 'CGHS' },
//       { title: 'ECHS' },
      
//     ],
//   };

//   return (
//     <section className="py-16 bg-white text-center">
//       <h2 className="text-3xl font-bold text-blue-700 mb-6">Our Accreditation Tree</h2>
//       <div className="flex justify-center">
//         <TreeNode title={treeData.title} children={treeData.children} />
//       </div>
//     </section>
//   );
// };

// export default Tree;




import React from 'react';

const TreeNode = ({ title, children }) => (
  <div className="flex flex-col items-center">
    <div className="bg-gray-900 border border-blue-400 rounded-lg px-4 py-2 text-blue-300 font-semibold shadow-lg">
      {title}
    </div>
    {children && (
      <div className="mt-4 flex space-x-6">
        {children.map((child, idx) => (
          <TreeNode key={idx} title={child.title} children={child.children} />
        ))}
      </div>
    )}
  </div>
);

const Tree = () => {
  const treeData = {
    title: 'QARA Healthcare',
    children: [
      { title: 'QCI' },
      {title:'QAI'},
      { title: 'NABH' },
      { title: 'CGHS' },
      { title: 'ECHS' },
    ],
  };

  return (
    <section className="h-screen bg-black text-center flex items-center justify-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-400 mb-10">Our Accreditation Tree</h2>
        <div className="flex justify-center">
          <TreeNode title={treeData.title} children={treeData.children} />
        </div>
      </div>
    </section>
  );
};

export default Tree;