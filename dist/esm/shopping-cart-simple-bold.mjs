export const name="shopping-cart-simple-bold";
export const id="dl_9058706a947ecdaf604b";
export const url=new URL("../icons/shopping-cart-simple-bold.svg?v=7d268f3bab655e52ae5a65d4638c59c6ee1c6940adadb34a6b3226fde7b4cd6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
