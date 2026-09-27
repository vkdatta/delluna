export const name="tooltip_2";
export const id="dl_cc1d465991385899e645";
export const url=new URL("../icons/tooltip_2.svg?v=40494f80f3ff254a38b2c5e524c6c1426d85927875c6e7c0d57070f52caa3b66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
