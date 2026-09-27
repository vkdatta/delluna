export const name="mobile_text_2-fill";
export const id="dl_88f926b419bc8b70600f";
export const url=new URL("../icons/mobile_text_2-fill.svg?v=f979e2c3dcdac75d3de80b7c1f28d2ea3fb13469491730d2008d180e27914c3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
