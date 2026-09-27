export const name="nest_multi_room-fill";
export const id="dl_38eb944aa9c3bb8a5ec4";
export const url=new URL("../icons/nest_multi_room-fill.svg?v=489dda2c5e5633bc06bc278b821c92d5e016bfb262a5c6e56b1f02f18c0f5e63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
