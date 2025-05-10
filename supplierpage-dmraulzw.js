import{c as d,d as C,u as F,r as n,j as e,s as p}from"./index-DscStW3j.js";import{S as N}from"./SEO-6FDy1d8K.js";import{P as L}from"./ProductCard-DTuOKA55.js";import{A as P}from"./arrow-left-5Ry7Ws-8.js";import{M as E}from"./mail-CHOLujB2.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=d("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=d("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=d("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);function O(){const{id:a}=C(),u=F(),[r,c]=n.useState(null),[m,v]=n.useState([]),[w,l]=n.useState(!0);if(n.useEffect(()=>{async function i(){var x;if(!a){l(!1);return}try{const{count:o,error:h}=await p.from("Supplier").select("Supplier_ID",{count:"exact",head:!0}).eq("Supplier_Title",a);if(h){console.error("Error checking supplier existence:",h),l(!1);return}if(o===0){c(null),l(!1);return}const{data:t,error:f}=await p.from("Supplier").select(`
            Supplier_ID,
            Supplier_Title,
            Supplier_Description,
            Supplier_Website,
            Supplier_Email,
            Supplier_Location,
            Countries (
              Country_Title
            )
          `).eq("Supplier_Title",a).maybeSingle();if(f){console.error("Error fetching supplier:",f);return}if(t){c({id:t.Supplier_ID,name:t.Supplier_Title,description:t.Supplier_Description||"",website:t.Supplier_Website||"#",country:((x=t.Countries)==null?void 0:x.Country_Title)||"Unknown",address:t.Supplier_Location||"",email:t.Supplier_Email||"",phone:"",products:[]});const{data:A,error:g}=await p.from("Products").select(`
              Product_ID,
              Product_Title,
              Product_Price,
              Product_Image_URL,
              Product_Title_URL,
              Product_MOQ,
              Countries (
                Country_Title
              ),
              Categories (
                Category_Title
              ),
              Supplier (
                Supplier_Title
              ),
              Sources (
                Source_Title
              )
            `).eq("Product_Supplier_ID",t.Supplier_ID);if(g){console.error("Error fetching products:",g);return}const T=A.map(s=>{var y,_,j,S;return{id:s.Product_ID,name:s.Product_Title,price:parseFloat(s.Product_Price||"0"),image:s.Product_Image_URL||"",country:((y=s.Countries)==null?void 0:y.Country_Title)||"Unknown",category:((_=s.Categories)==null?void 0:_.Category_Title)||"Unknown",supplier:((j=s.Supplier)==null?void 0:j.Supplier_Title)||"Unknown",moq:parseInt(s.Product_MOQ||"0"),sourceUrl:s.Product_Title_URL||"",marketplace:((S=s.Sources)==null?void 0:S.Source_Title)||"Unknown",description:""}});v(T)}else c(null)}catch(o){console.error("Error:",o)}finally{l(!1)}}i()},[a]),w)return e.jsx("div",{className:"min-h-screen flex items-center justify-center",children:e.jsx("div",{className:"text-[#F4A024]",children:"Loading supplier information..."})});if(!r)return e.jsxs(e.Fragment,{children:[e.jsx(N,{title:"Supplier Not Found",description:"The requested supplier could not be found. Browse our other Latin American suppliers."}),e.jsx("div",{className:"min-h-screen flex items-center justify-center",children:e.jsxs("div",{className:"text-center",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-100",children:"Supplier not found"}),e.jsxs("button",{onClick:()=>u("/"),className:"mt-4 inline-flex items-center text-[#F4A024] hover:text-[#F4A024]",children:[e.jsx(P,{className:"w-5 h-5 mr-2"}),"Back to Home"]})]})})]});const b=window.location.href,k=encodeURIComponent(`I am interested in your products.

This inquiry came from Paisán
Supplier Page URL: ${b}`);return e.jsxs(e.Fragment,{children:[e.jsx(N,{title:r.name,description:`${r.name} - ${r.description||`Latin American supplier from ${r.country}`}. Browse their products and get in touch.`,keywords:`${r.name}, ${r.country}, Latin American supplier, wholesale, B2B, ${m.map(i=>i.category).join(", ")}`,type:"profile"}),e.jsx("div",{className:"pt-24 pb-16 px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"max-w-7xl mx-auto",children:[e.jsxs("button",{onClick:()=>u(-1),className:"inline-flex items-center text-[#F4A024] hover:text-[#F4A024] mb-8",children:[e.jsx(P,{className:"w-5 h-5 mr-2"}),"Back"]}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"bg-gray-800/50 backdrop-blur-sm rounded-lg p-8",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-100 mb-4",children:r.name}),e.jsxs("div",{className:"space-y-6",children:[e.jsx("p",{className:"text-gray-300",children:r.description}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[r.website&&e.jsxs("div",{className:"flex items-center gap-2 text-gray-300",children:[e.jsx(I,{className:"w-5 h-5 text-[#F4A024]"}),e.jsx("a",{href:r.website,target:"_blank",rel:"noopener noreferrer",className:"hover:text-[#F4A024]",children:r.website})]}),r.address&&e.jsxs("div",{className:"flex items-center gap-2 text-gray-300",children:[e.jsx(U,{className:"w-5 h-5 text-[#F4A024]"}),e.jsx("span",{children:r.address})]})]}),e.jsxs("div",{className:"space-y-4",children:[r.email&&e.jsxs("div",{className:"flex items-center gap-2 text-gray-300",children:[e.jsx(E,{className:"w-5 h-5 text-[#F4A024]"}),e.jsx("a",{href:`mailto:${r.email}?body=${k}`,className:"hover:text-[#F4A024]",children:r.email})]}),r.phone&&e.jsxs("div",{className:"flex items-center gap-2 text-gray-300",children:[e.jsx(D,{className:"w-5 h-5 text-[#F4A024]"}),e.jsx("a",{href:`tel:${r.phone}`,className:"hover:text-[#F4A024]",children:r.phone})]})]})]})]})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-100",children:["Products by ",r.name]}),e.jsx("div",{className:"grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8",children:m.map(i=>e.jsx(L,{product:i},i.id))})]})]})]})})]})}export{O as default};
