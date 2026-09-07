export const name="swatches-thin";
export const id="dl_8d34c979a30d4d8aac0d";
export const url=new URL("../icons/S/swatches-thin.svg?v=b4c06d87b28592a0f0077ddefdd91855db946a5802a97a416e0fa4148b25564c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
