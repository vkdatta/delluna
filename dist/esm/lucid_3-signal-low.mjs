export const name="lucid_3-signal-low";
export const id="dl_cd00ea04d5bc4f39b6a7";
export const url=new URL("../icons/lucid_3-signal-low.svg?v=ff15b56c86c04d873b899375377513118a5561f0f10ff2a31e389650006f281e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
