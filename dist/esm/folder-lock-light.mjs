export const name="folder-lock-light";
export const id="dl_570756d9a0c6421d8918";
export const url=new URL("../icons/folder-lock-light.svg?v=ca02632c7b220da2f248e69ca1437617fa7f7c6a8c3db0379eac9d503274ae0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
