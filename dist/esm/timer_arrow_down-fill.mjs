export const name="timer_arrow_down-fill";
export const id="dl_5fe879a8f7adde7b983e";
export const url=new URL("../icons/timer_arrow_down-fill.svg?v=47e6d6c11b3b85b1937d353999fab93670b97592d8658d7ea27ac7dc7cfd810e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
