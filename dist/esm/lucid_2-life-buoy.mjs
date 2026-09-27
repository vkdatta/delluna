export const name="lucid_2-life-buoy";
export const id="dl_0b106b6272184cfbbd72";
export const url=new URL("../icons/lucid_2-life-buoy.svg?v=e44a9411003c86f530a58226b3bd0276b605ba8269415395e0e1a027d9537d76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
