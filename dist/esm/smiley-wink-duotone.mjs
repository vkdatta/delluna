export const name="smiley-wink-duotone";
export const id="dl_d1990e495c604decb972";
export const url=new URL("../icons/S/smiley-wink-duotone.svg?v=f52120a3abc17521c4dafc13c4b7907bcea72e4a98fba6d8d808b984cf241d3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
