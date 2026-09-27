export const name="no_meals-fill";
export const id="dl_0978b92fb98b84b8a1c0";
export const url=new URL("../icons/no_meals-fill.svg?v=9fa30da40e06284081247646849f43765314bae22fa2fe22c6678e8c4b1a8c89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
