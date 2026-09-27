export const name="greater-than-or-equal-fill";
export const id="dl_d3ab93cd4b1d4621a40d";
export const url=new URL("../icons/greater-than-or-equal-fill.svg?v=31fb15a4c01c008ad5f4eeef90cfaf4488ccd8b5c56c1785c91152b6951c3a4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
