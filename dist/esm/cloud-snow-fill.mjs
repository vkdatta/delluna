export const name="cloud-snow-fill";
export const id="dl_20d803e6e7834251b273";
export const url=new URL("../icons/cloud-snow-fill.svg?v=b63199e4b3dac2c77522126fafefb0bd0c444d9be13c5cf59379e135ab61648a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
