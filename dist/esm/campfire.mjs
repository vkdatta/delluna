export const name="campfire";
export const id="dl_0df18f6050934da5b4a1";
export const url=new URL("../icons/campfire.svg?v=eacc5758b3e625284c1980643a5571afeaaf36b6f4e1bafbef72beea320ebfcd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
