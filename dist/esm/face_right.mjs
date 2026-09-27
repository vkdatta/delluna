export const name="face_right";
export const id="dl_8713b38433bcb8c103a1";
export const url=new URL("../icons/face_right.svg?v=e41ece034efb216e9c95f646bf126837da4ec5899dcf19152d13c62a4136ce65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
