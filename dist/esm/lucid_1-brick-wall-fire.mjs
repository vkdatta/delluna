export const name="lucid_1-brick-wall-fire";
export const id="dl_dfaa67c576f94eb1b15d";
export const url=new URL("../icons/lucid_1-brick-wall-fire.svg?v=e25ea8d8c62a7f5878147fe9a7cc783e1d2336d83eba12da15682abd82e9f58d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
