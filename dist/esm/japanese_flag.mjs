export const name="japanese_flag";
export const id="dl_8f9a17ec5428f26f2b77";
export const url=new URL("../icons/japanese_flag.svg?v=c7ffbf51cf1a9b2b617788e989e0ae18ce52135b80733993518bd871397cd105",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
