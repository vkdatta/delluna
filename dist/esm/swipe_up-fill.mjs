export const name="swipe_up-fill";
export const id="dl_8a4b847bc75fa7201715";
export const url=new URL("../icons/swipe_up-fill.svg?v=c6e84fbbb878f79e3aa7832430a879761553908a8afb7d6eeb934e3746c19d33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
