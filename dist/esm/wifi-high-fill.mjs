export const name="wifi-high-fill";
export const id="dl_4cab98d743cfbc36ead3";
export const url=new URL("../icons/wifi-high-fill.svg?v=5c4d6affa23e4227d93c961ab3195a6d7206adc6782f5b75a1bf40da94484e3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
