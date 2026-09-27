export const name="air_freshener";
export const id="dl_0b5a631e5850341b73b9";
export const url=new URL("../icons/air_freshener.svg?v=7ba03476260a4eadda673b913b988432cf770051854b92b7118d694a3c8e2d4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
