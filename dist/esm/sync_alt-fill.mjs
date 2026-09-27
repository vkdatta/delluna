export const name="sync_alt-fill";
export const id="dl_d23d25bb785960dbddd8";
export const url=new URL("../icons/sync_alt-fill.svg?v=5165168ea480824e255f7f450b3a5d641ad01a3f239d6d69a218f644a4b11527",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
