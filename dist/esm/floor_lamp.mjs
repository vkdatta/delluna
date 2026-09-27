export const name="floor_lamp";
export const id="dl_bf5c1a73d516de8fe8fd";
export const url=new URL("../icons/floor_lamp.svg?v=191c001a24492cfb6d2ca707dd521b3f2d75037ecbe924dfa0cd045a0f80e4d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
