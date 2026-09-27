export const name="scroll-fill";
export const id="dl_2dea1089cb94dfba5c00";
export const url=new URL("../icons/scroll-fill.svg?v=3907c19d21726ce43bdff351e58ab52aede47cd6e2f89cf4c90d92ff492897bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
