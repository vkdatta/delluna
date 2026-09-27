export const name="closed-captioning-duotone";
export const id="dl_afac8db7fb89486cb62a";
export const url=new URL("../icons/closed-captioning-duotone.svg?v=7b0c8f5a2b29fba90dc699c739c349367f304e8b7008b28ef418cc8e6f156e97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
