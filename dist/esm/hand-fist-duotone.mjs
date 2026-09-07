export const name="hand-fist-duotone";
export const id="dl_f501a5f14b3d471d9bd4";
export const url=new URL("../icons/hand-fist-duotone.svg?v=92c29ffeb09b209fc4d1ca65690da2ca87a180a0997ee72026ae99ccabbd006b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
