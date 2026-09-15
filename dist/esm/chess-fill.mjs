export const name="chess-fill";
export const id="dl_9e0cc0a97491425dbce4";
export const url=new URL("../icons/C/chess-fill.svg?v=4b75f69c926bda4a63818eddb3a8c0f6259a7e070d5f3d2e72bae3176ffb8344",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
