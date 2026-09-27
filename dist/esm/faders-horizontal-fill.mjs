export const name="faders-horizontal-fill";
export const id="dl_643f949c0e2e49e68671";
export const url=new URL("../icons/faders-horizontal-fill.svg?v=8b0230501a6ec840a1c80adee72da0b5cc905366edd47f3cbe062d7da65665ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
