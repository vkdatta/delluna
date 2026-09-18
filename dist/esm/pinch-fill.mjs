export const name="pinch-fill";
export const id="dl_67e8f98907a144edbf7b";
export const url=new URL("../icons/pinch-fill.svg?v=edc7de0c490f57cb0683888a2231fbf3543ddf52885012b682f18dcfe2020efc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
