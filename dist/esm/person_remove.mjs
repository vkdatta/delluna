export const name="person_remove";
export const id="dl_01fd4932a4fe4e8496a7";
export const url=new URL("../icons/person_remove.svg?v=13b1df6e84a36973ff6d3c0ff27591360343c2b4e93091a585454d6e6fdbbf15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
