export const name="arrow_upward";
export const id="dl_3bda099b0d7a4b6cacba";
export const url=new URL("../icons/material_symbols/arrow_upward.svg?v=a902b4447496b87a48b3fe7be338a2e2b68ecf63341e0b90545f133b87207e87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
