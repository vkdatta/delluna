export const name="lucid_2-fish-symbol";
export const id="dl_fe0b1ea082ee4fe99cbc";
export const url=new URL("../icons/lucid_2-fish-symbol.svg?v=ca6a834daa11d505218c8fa51388c23fe89c39db18011962d1a127c6370ccf12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
