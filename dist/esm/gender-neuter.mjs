export const name="gender-neuter";
export const id="dl_6a00e6f4f9aa47318d79";
export const url=new URL("../icons/gender-neuter.svg?v=871b26c5a81c0ce00be843cf5e8037d1b2d9ad0ef708313b11a94c78cf50720d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
