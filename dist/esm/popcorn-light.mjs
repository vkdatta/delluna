export const name="popcorn-light";
export const id="dl_05a709885b064d39a2c1";
export const url=new URL("../icons/popcorn-light.svg?v=d6a47eaf004b6b95f2004897a022b262cbdf622dbe62de28c01a2c4643a9290f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
