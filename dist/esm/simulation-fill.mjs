export const name="simulation-fill";
export const id="dl_bf084f08b100e0f2028a";
export const url=new URL("../icons/simulation-fill.svg?v=9a6d78a7729d62e9c32d73b79f756f926555b968ee19d71f9af37fa9479f10fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
