export const name="snowflake-light";
export const id="dl_88f9e6f1f4311f0cabcd";
export const url=new URL("../icons/snowflake-light.svg?v=5402bfd0bd055ad976bd50df0d84ec7a74bbcbd691fe0815aefa3b6723775329",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
