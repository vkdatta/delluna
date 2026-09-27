export const name="dishwasher-fill";
export const id="dl_3970432430fb5eb87628";
export const url=new URL("../icons/dishwasher-fill.svg?v=933b4f102e5415a88cb5c5c16b2b61b78dff07614fd4fd51be90b1e4232752c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
