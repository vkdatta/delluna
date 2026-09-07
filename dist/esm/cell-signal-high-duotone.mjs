export const name="cell-signal-high-duotone";
export const id="dl_354f573778784cad96f8";
export const url=new URL("../icons/cell-signal-high-duotone.svg?v=c74dee7f18937a969822345261a361f1b0b45c9c67b0b4ab465052d189687e4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
