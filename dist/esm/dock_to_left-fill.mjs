export const name="dock_to_left-fill";
export const id="dl_c958cc7409ced74c1dd7";
export const url=new URL("../icons/dock_to_left-fill.svg?v=eeecb4e3cfcaede594258f9a3c5a4dbec3be37e3db86fd929a1ce88278814dda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
