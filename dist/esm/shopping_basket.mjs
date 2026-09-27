export const name="shopping_basket";
export const id="dl_5f436b14c6a102a9f926";
export const url=new URL("../icons/shopping_basket.svg?v=fabcca01d83e8c1363f56931234c74b8defd928c8e0b8e3890b64e171d4de1b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
