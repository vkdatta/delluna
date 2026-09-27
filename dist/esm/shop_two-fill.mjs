export const name="shop_two-fill";
export const id="dl_a75edbfaf89d90444cd1";
export const url=new URL("../icons/shop_two-fill.svg?v=2d819db899a5c87a42da147935df2851e5fa48ba807ef3302f050e0377236142",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
