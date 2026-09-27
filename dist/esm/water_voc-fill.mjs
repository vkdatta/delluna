export const name="water_voc-fill";
export const id="dl_37904164490f81da3dcd";
export const url=new URL("../icons/water_voc-fill.svg?v=6dd2bffb9cdecf01f665da5e0b13c7337f9794fa31000acf5b595a676572b834",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
