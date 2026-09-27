export const name="devices_other-fill";
export const id="dl_b4386def76edd364d460";
export const url=new URL("../icons/devices_other-fill.svg?v=58757f3b6bb555247f6f1100d6ea815e2e1a28250ca9f26c15b09099dc405269",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
