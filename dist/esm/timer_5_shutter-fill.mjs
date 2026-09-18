export const name="timer_5_shutter-fill";
export const id="dl_ba04d7266a934353a91f";
export const url=new URL("../icons/T/timer_5_shutter-fill.svg?v=717443a9bf8e1e375b375d41412bf3ee017dc18353765796f95da378932ffe74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
