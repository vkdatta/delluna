export const name="mode_heat_off";
export const id="dl_e7019c97236abdf08a06";
export const url=new URL("../icons/mode_heat_off.svg?v=30f1e79ea3fa002a54815e9526f5675d2b6b053a866df64df3a46946d41b3357",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
