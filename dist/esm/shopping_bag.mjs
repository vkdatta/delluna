export const name="shopping_bag";
export const id="dl_c43e7db53230504c102b";
export const url=new URL("../icons/shopping_bag.svg?v=bca887de3f9a9a5dc85e7dca434a170c0a04ea36e5ffae33a0513ee0a9d14ddd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
