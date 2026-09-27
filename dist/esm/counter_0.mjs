export const name="counter_0";
export const id="dl_cf93413c0fee25e66d52";
export const url=new URL("../icons/counter_0.svg?v=e660357a02374fa8d6d79e832edb83c1c124850feeeaaf03cd7be2871fdf43f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
