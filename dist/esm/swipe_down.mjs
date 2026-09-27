export const name="swipe_down";
export const id="dl_2902a262c695f37ecd19";
export const url=new URL("../icons/swipe_down.svg?v=57a49731cdc13551afa6fe387a0e3f19a2da92ad87c25adff765f3416173351c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
