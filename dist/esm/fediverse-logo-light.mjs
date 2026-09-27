export const name="fediverse-logo-light";
export const id="dl_5b125990d7e04385a62b";
export const url=new URL("../icons/fediverse-logo-light.svg?v=ab64e2db63bf3292d514e10ee12960be80a55a623fc6cc0e97237cd2dc2c0c25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
