export const name="lucid_2-ice-cream-bowl";
export const id="dl_71920e4cc81247d99b2a";
export const url=new URL("../icons/lucid_2-ice-cream-bowl.svg?v=1b763b818ad68ddeea10b7c9c9074940b62bab21b4c9e2c2033d918aad06a5ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
