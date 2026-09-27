export const name="mitre";
export const id="dl_b5e59276e14afbe3398a";
export const url=new URL("../icons/mitre.svg?v=1ad96f054c09cf163e8580ba5ac31baba65ad59499f408670fb41f971730986c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
