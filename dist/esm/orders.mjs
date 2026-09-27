export const name="orders";
export const id="dl_3a35d30e748adf49d5a0";
export const url=new URL("../icons/orders.svg?v=efe5c01bfe8f9e67ab3de2d98a1246a4c820c4f04765ace83f51f6ce63a80437",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
