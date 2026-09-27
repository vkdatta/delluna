export const name="shopping_cart";
export const id="dl_89c71a0e15ff496c81ed";
export const url=new URL("../icons/shopping_cart.svg?v=23ccfc988d04640b2916af6da3812c2befd8770815a9db03397fccef3f06f3b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
