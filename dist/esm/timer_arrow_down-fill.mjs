export const name="timer_arrow_down-fill";
export const id="dl_aeeabf4aa82e42d4b14d";
export const url=new URL("../icons/timer_arrow_down-fill.svg?v=647399770734b258d8c1d17c49dfc7fd3d3bf65b0bfa0f2ceec90ad4140d90c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
