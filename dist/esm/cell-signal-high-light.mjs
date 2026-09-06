export const name="cell-signal-high-light";
export const id="dl_f25e2004fe2a4578b341";
export const url=new URL("../icons/cell-signal-high-light.svg?v=bf170254dab3ab4d148136f81bf3e750b1b989b6d1f279c095492b8ed932faeb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
