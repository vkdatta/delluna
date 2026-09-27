export const name="tooth-duotone";
export const id="dl_45c1bb6fdcb33eea76ac";
export const url=new URL("../icons/tooth-duotone.svg?v=cf80675726f0f010d2fd1c4a18cc10fe1f28a0748640a3013ffaad54ad30093a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
