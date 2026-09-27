export const name="18_up_rating";
export const id="dl_d3f11f46ac15f4039278";
export const url=new URL("../icons/18_up_rating.svg?v=102769bb1ae64e1671a5187e915e33764fdc44eb530c55c8b0ff28309d59fa04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
