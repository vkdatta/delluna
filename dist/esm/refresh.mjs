export const name="refresh";
export const id="dl_8f3d71d572e28cba11a7";
export const url=new URL("../icons/material_symbols/refresh.svg?v=68f6055695aa936a83accb45966b624bc80c3865b00650bdba1200fe675d943e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
