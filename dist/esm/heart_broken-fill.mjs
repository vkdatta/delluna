export const name="heart_broken-fill";
export const id="dl_d65b4870541b26615020";
export const url=new URL("../icons/heart_broken-fill.svg?v=0e53f3e5ebb706fb2dad8de47559ab1a5a62e3d5569326ee7bb317ef6cc588bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
