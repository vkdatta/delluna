export const name="dots-three-outline-vertical-thin";
export const id="dl_71e8447891a74d39a8f8";
export const url=new URL("../icons/dots-three-outline-vertical-thin.svg?v=27b9732408c9206e7c6d4102832c4b74fedc5f549d69b7061de0d3fdecc510e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
