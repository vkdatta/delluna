export const name="mobile_hand-fill";
export const id="dl_698f40be06ae44aead4e";
export const url=new URL("../icons/M/mobile_hand-fill.svg?v=ab3584115e684e0bd6a378632266abd7641ac1732b6e803556721c635368ca1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
