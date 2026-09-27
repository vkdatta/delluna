export const name="tablet_android-fill";
export const id="dl_06e1d17a0dfb30eb6a0b";
export const url=new URL("../icons/tablet_android-fill.svg?v=f5140d61a6b2d58a9f3de3e7ab71c2a9234766ded25cc12de3dbc19e92108ef6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
