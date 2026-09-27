export const name="member-of-duotone";
export const id="dl_9d6bbe4345e0453ca5cc";
export const url=new URL("../icons/member-of-duotone.svg?v=52ab15835d397cd9662131a9a0148e708c37608b2bb9efb7f8e7a971d357fa51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
