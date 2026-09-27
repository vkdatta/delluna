export const name="timer_play-fill";
export const id="dl_a8bb4f3a100c1c198de8";
export const url=new URL("../icons/timer_play-fill.svg?v=74e26059944a6fec5c3514b752226ba5e1fbe3982624c4ad6bf4bd6ac3d09967",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
