export const name="person_raised_hand-fill";
export const id="dl_9e8be43c00dbb8d2dbdf";
export const url=new URL("../icons/person_raised_hand-fill.svg?v=6caff7b6fb154d6756ca0f872b78b039682aa1c4ff8c7d9da3b26290937c4aea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
