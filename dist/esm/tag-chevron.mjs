export const name="tag-chevron";
export const id="dl_33befdb408e79b036003";
export const url=new URL("../icons/tag-chevron.svg?v=66515875433693bb4d0c900e005ec6c6e3595deb29038f0e93667fb8313393d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
