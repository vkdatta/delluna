export const name="lifebuoy-fill";
export const id="dl_411630075ce54c878df6";
export const url=new URL("../icons/lifebuoy-fill.svg?v=6221984a1c15883d1b00227c68b9c537018081d05a5ddc02b0a243b3b1c89277",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
