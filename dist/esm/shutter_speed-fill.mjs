export const name="shutter_speed-fill";
export const id="dl_b10605160c11bc5de625";
export const url=new URL("../icons/shutter_speed-fill.svg?v=bef285e7bb3b9ac0b241e3f3ee020f532de1b2b1ff7ab67262276707bed92d70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
