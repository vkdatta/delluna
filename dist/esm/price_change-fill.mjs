export const name="price_change-fill";
export const id="dl_18194160be0747ff8f60";
export const url=new URL("../icons/P/price_change-fill.svg?v=e9d2c01d4c635262e4693dd5aa6104d9976eeb99515a247fcc3499f0c24f4101",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
