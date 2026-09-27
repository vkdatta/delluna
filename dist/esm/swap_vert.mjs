export const name="swap_vert";
export const id="dl_e0600a1e975afece3934";
export const url=new URL("../icons/swap_vert.svg?v=a1a7cdd3587e537035a2acca776fdd2b734852c028ec86d637231ffd777341c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
