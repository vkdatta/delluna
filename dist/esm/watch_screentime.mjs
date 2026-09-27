export const name="watch_screentime";
export const id="dl_be911ad781020e4b0f16";
export const url=new URL("../icons/watch_screentime.svg?v=2029129608de8a6ab301a2da27a2c5ee7071648b6aec23449e06761d921d6956",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
