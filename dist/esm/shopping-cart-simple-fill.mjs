export const name="shopping-cart-simple-fill";
export const id="dl_4a9b28368f25a33ab8d5";
export const url=new URL("../icons/shopping-cart-simple-fill.svg?v=679456c02afec984a2ab635443724baca8b891a1bc4f245469f9bcbbf6a13fdb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
