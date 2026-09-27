export const name="placeholder-duotone";
export const id="dl_10dc46564cda40b1aa36";
export const url=new URL("../icons/placeholder-duotone.svg?v=6782a5d506888242a39f7878788d2313c42d60f3ac72ce971ff419512545f6f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
