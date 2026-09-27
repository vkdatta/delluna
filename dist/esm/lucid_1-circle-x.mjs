export const name="lucid_1-circle-x";
export const id="dl_b0b670126ab54e2296d9";
export const url=new URL("../icons/lucid_1-circle-x.svg?v=fa6a0a03092e1c1e9e714f99cb9455673ae49891505c0a9a492dbd0cee8d29e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
