// import React from 'react'

// const SignupPage = () => {
//   return (
//     <div>
// <div class="w-full max-w-xs">
//   <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//   <div class="mb-4">
//       <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        
//       </label>
//       <input class="shadow appearance-none border-slate-50 w-full py-2 px-3 text-gray-700 bg-slate-50	 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Mobile Number or Email" />
//     </div>
//     <div class="mb-4">
//       <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        
//       </label>
//       <input class="shadow appearance-none border-slate-50  w-full py-2 px-3 text-gray-700 bg-slate-50	leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Full Name" />
//     </div>
//     <div class="mb-4">
//       <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        
//       </label>
//       <input class="shadow appearance-none border-slate-50  w-full py-2 px-3 text-gray-700 bg-slate-50	leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
//     </div>
//     <div class="mb-6">
//       <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        
//       </label>
//       <input class="shadow appearance-none border border-slate-50 w-full py-2 px-3 text-gray-700 bg-slate-50 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="password" />
      
//     </div>
    
//     <p class="text-gray-500 text-xs mb-3 w-full text-justify">People who use our service may have uploaded your contact information to Instagram. Learn More</p>
    
//     <div class="flex items-center justify-between mb-6">
//       <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline" type="button">
//         Sign up
//       </button>
     
//     </div>
//   </form>      
//   <p class="text-center text-gray-500 text-xs">
//     &copy;2020 Acme Corp. All rights reserved.
//   </p>
// </div>
//     </div>
//   )
// }

// export default SignupPage

import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return <SignUp />;
}