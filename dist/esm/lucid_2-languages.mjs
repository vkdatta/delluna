export const name="lucid_2-languages";
export const id="dl_6a9d7bba87ec402bb75b";
export const url=new URL("../icons/lucid_2-languages.svg?v=77292b7938c197936e5694da22324833b2848e2b71c150f77765a8c492c4e253",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
