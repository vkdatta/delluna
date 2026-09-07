export const name="arrow_heads";
export const id="dl_2f9959b689bb425280a1";
export const url=new URL("../icons/arrow_heads.svg?v=737b01279954c1966e6e53bea9657f68a3f2b668149c385cf12f815ec2c2dd78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
