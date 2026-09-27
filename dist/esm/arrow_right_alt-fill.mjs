export const name="arrow_right_alt-fill";
export const id="dl_29ed97c8d7e34e4ee2bc";
export const url=new URL("../icons/arrow_right_alt-fill.svg?v=fa14de23cff19dfdbbec5df5e9c2978d06006c1d48871dfbef7d4b7f15eafc5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
