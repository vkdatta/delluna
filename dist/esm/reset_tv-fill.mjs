export const name="reset_tv-fill";
export const id="dl_1caef504f7d9c9e7bdb1";
export const url=new URL("../icons/reset_tv-fill.svg?v=c07dad7cfed5d46daf7a93cb3ceda859d2243ba7fd0a922da274cda54e47f45b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
