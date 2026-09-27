export const name="orbit-fill";
export const id="dl_902ff98d2c66b1840b03";
export const url=new URL("../icons/orbit-fill.svg?v=267f702c0cd9e20454d2d5ec22ff64c34581a85ec478183850b35bb9d7e282d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
